const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// Parse .env.local manually
function loadEnv() {
  const envPath = path.join(__dirname, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('.env.local file not found');
    process.exit(1);
  }

  const content = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  content.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const parts = trimmed.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      env[key] = val;
    }
  });
  return env;
}

async function testConnection() {
  const env = loadEnv();
  
  const config = {
    host: env.DB_HOST || 'localhost',
    port: parseInt(env.DB_PORT || '3306'),
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || 'skwebtech'
  };

  console.log(`Connecting to MySQL database at ${config.host}:${config.port}...`);
  console.log(`User: ${config.user}`);
  console.log(`Database Name: ${config.database}`);
  
  try {
    const conn = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password
    });

    console.log('\n✅ Successfully connected to the MySQL server!');
    
    // Check if database exists
    const [databases] = await conn.query(`SHOW DATABASES LIKE '${config.database}'`);
    if (databases.length > 0) {
      console.log(`✅ Database "${config.database}" exists.`);
      await conn.query(`USE \`${config.database}\``);
      
      // List tables
      const [tables] = await conn.query('SHOW TABLES');
      console.log(`Found ${tables.length} tables:`);
      tables.forEach(t => {
        console.log(` - ${Object.values(t)[0]}`);
      });
    } else {
      console.log(`❌ Database "${config.database}" does NOT exist yet. (The app will create it automatically on first run)`);
    }

    await conn.end();
  } catch (error) {
    console.error('\n❌ Connection FAILED!');
    console.error('Error Details:', error.message || error);
  }
}

testConnection();
