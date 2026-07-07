import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

// Import fallback/initial static data for migrations
import { blogPosts as initialBlogs, BlogPost } from '@/data/blog';
import { projects as initialProjects, Project } from '@/data/portfolio';
import { services as initialServices, Service } from '@/data/services';
import { servicePageTemplates as initialServicePages, ServicePageTemplate } from '@/data/servicePages';
import { locations as initialLocations, Location } from '@/data/locations';

// Type definitions
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'Pending' | 'In-Progress' | 'Resolved';
  createdAt: string;
}

export interface AdminUser {
  id: number;
  username: string;
  passwordHash: string;
}

// MySQL connection details from env
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'skwebtech';
const DB_PORT = parseInt(process.env.DB_PORT || '3306');

let pool: mysql.Pool | null = null;

// Get or create database pool
function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

// Initialize tables and seed initial data if needed
export async function initDb() {
  if (typeof window !== 'undefined') return;

  // First connection to create database if not exists
  const setupConn = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
  });

  await setupConn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
  await setupConn.end();

  const db = getPool();

  // 1. Create Blogs table
  await db.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id VARCHAR(50) PRIMARY KEY,
      slug VARCHAR(255) UNIQUE,
      title VARCHAR(255) NOT NULL,
      excerpt TEXT,
      content MEDIUMTEXT,
      coverImage VARCHAR(255),
      category VARCHAR(100),
      authorName VARCHAR(100),
      authorRole VARCHAR(100),
      publishedAt VARCHAR(50),
      readTime VARCHAR(50),
      tags TEXT,
      featured TINYINT(1) DEFAULT 0
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 2. Create Projects table
  await db.query(`
    CREATE TABLE IF NOT EXISTS projects (
      id VARCHAR(50) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      image VARCHAR(255),
      category VARCHAR(100),
      technologies TEXT,
      liveUrl VARCHAR(255),
      featured TINYINT(1) DEFAULT 0
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 3. Create Services table
  await db.query(`
    CREATE TABLE IF NOT EXISTS services (
      id VARCHAR(50) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      shortDesc VARCHAR(255),
      features TEXT,
      technologies TEXT,
      color VARCHAR(100),
      href VARCHAR(255),
      featured TINYINT(1) DEFAULT 0
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 4. Create Service Pages (SEO) table
  await db.query(`
    CREATE TABLE IF NOT EXISTS service_pages (
      id VARCHAR(50) PRIMARY KEY,
      slug VARCHAR(255) UNIQUE,
      title VARCHAR(255) NOT NULL,
      color VARCHAR(100),
      textColor VARCHAR(100),
      metaTitleTemplate VARCHAR(255),
      metaDescriptionTemplate TEXT,
      keywordsTemplate TEXT,
      h1Template VARCHAR(255),
      introTemplate TEXT,
      subIntroTemplate TEXT,
      features TEXT,
      technologies TEXT,
      benefits TEXT,
      faqsTemplate TEXT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 5. Create Locations table
  await db.query(`
    CREATE TABLE IF NOT EXISTS locations (
      slug VARCHAR(100) PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      state VARCHAR(100)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 6. Create Contacts table
  await db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id VARCHAR(50) PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(50),
      service VARCHAR(100),
      message TEXT,
      status VARCHAR(50) DEFAULT 'Pending',
      createdAt VARCHAR(50)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // 7. Create Admin Users table (bcrypt-hashed passwords)
  await db.query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      passwordHash VARCHAR(100) NOT NULL,
      createdAt VARCHAR(50),
      updatedAt VARCHAR(50)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // --- Seeding Data ---
  
  // Seed blogs
  const [blogCountRows] = await db.query('SELECT COUNT(*) as count FROM blogs');
  if ((blogCountRows as any)[0].count === 0) {
    console.log('Seeding initial blogs into MySQL...');
    for (const post of initialBlogs) {
      await db.query(
        `INSERT INTO blogs (id, slug, title, excerpt, content, coverImage, category, authorName, authorRole, publishedAt, readTime, tags, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          post.id,
          post.slug,
          post.title,
          post.excerpt,
          post.content,
          post.coverImage,
          post.category,
          post.author.name,
          post.author.role,
          post.publishedAt,
          post.readTime,
          JSON.stringify(post.tags),
          post.featured ? 1 : 0
        ]
      );
    }
  }

  // Seed projects
  const [projectCountRows] = await db.query('SELECT COUNT(*) as count FROM projects');
  if ((projectCountRows as any)[0].count === 0) {
    console.log('Seeding initial projects into MySQL...');
    for (const proj of initialProjects) {
      await db.query(
        `INSERT INTO projects (id, title, description, image, category, technologies, liveUrl, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          proj.id,
          proj.title,
          proj.description,
          proj.image,
          proj.category,
          JSON.stringify(proj.technologies),
          proj.liveUrl || '',
          proj.featured ? 1 : 0
        ]
      );
    }
  }

  // Seed services
  const [serviceCountRows] = await db.query('SELECT COUNT(*) as count FROM services');
  if ((serviceCountRows as any)[0].count === 0) {
    console.log('Seeding initial services into MySQL...');
    for (const serv of initialServices) {
      await db.query(
        `INSERT INTO services (id, title, description, shortDesc, features, technologies, color, href, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          serv.id,
          serv.title,
          serv.description,
          serv.shortDesc,
          JSON.stringify(serv.features),
          JSON.stringify(serv.technologies),
          serv.color,
          serv.href,
          serv.featured ? 1 : 0
        ]
      );
    }
  }

  // Seed service pages (SEO)
  const [pageCountRows] = await db.query('SELECT COUNT(*) as count FROM service_pages');
  if ((pageCountRows as any)[0].count === 0) {
    console.log('Seeding initial service pages into MySQL...');
    for (const template of initialServicePages) {
      await db.query(
        `INSERT INTO service_pages (id, slug, title, color, textColor, metaTitleTemplate, metaDescriptionTemplate, keywordsTemplate, h1Template, introTemplate, subIntroTemplate, features, technologies, benefits, faqsTemplate)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          template.id,
          template.slug,
          template.title,
          template.color,
          template.textColor,
          template.metaTitleTemplate,
          template.metaDescriptionTemplate,
          JSON.stringify(template.keywordsTemplate),
          template.h1Template,
          template.introTemplate,
          template.subIntroTemplate,
          JSON.stringify(template.features),
          JSON.stringify(template.technologies),
          JSON.stringify(template.benefits),
          JSON.stringify(template.faqsTemplate)
        ]
      );
    }
  }

  // Seed locations
  const [locCountRows] = await db.query('SELECT COUNT(*) as count FROM locations');
  if ((locCountRows as any)[0].count === 0) {
    console.log('Seeding initial locations into MySQL...');
    for (const loc of initialLocations) {
      await db.query(
        `INSERT INTO locations (slug, name, state) VALUES (?, ?, ?)`,
        [loc.slug, loc.name, loc.state]
      );
    }
  }

  // Seed default admin user — username 'admin', password from ADMIN_PASSWORD env
  // (or 'admin123' as a first-run fallback). Only used when the table is empty;
  // after that the password lives in the DB and is changed via the admin panel.
  const [adminCountRows] = await db.query('SELECT COUNT(*) as count FROM admin_users');
  if ((adminCountRows as any)[0].count === 0) {
    console.log('Seeding default admin user into MySQL...');
    const initialPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const passwordHash = await bcrypt.hash(initialPassword, 12);
    const now = new Date().toISOString();
    await db.query(
      `INSERT INTO admin_users (username, passwordHash, createdAt, updatedAt) VALUES (?, ?, ?, ?)`,
      ['admin', passwordHash, now, now]
    );
  }
}

// Auto-run DB init on demand or wrap call in helpers to ensure it runs
let isInitialized = false;
async function ensureInit() {
  if (isInitialized) return;
  await initDb();
  isInitialized = true;
}

// --- Dynamic MySQL DB Access Helpers ---

// 1. Blogs
export async function getBlogs(): Promise<BlogPost[]> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query('SELECT * FROM blogs');
  return (rows as any[]).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    content: r.content,
    coverImage: r.coverImage,
    category: r.category,
    author: {
      name: r.authorName,
      role: r.authorRole,
    },
    publishedAt: r.publishedAt,
    readTime: r.readTime,
    tags: JSON.parse(r.tags || '[]'),
    featured: !!r.featured,
  }));
}

export async function saveBlogs(blogs: BlogPost[]): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    // A simple approach is to truncate and re-insert, or implement specific INSERT/UPDATE
    // Since this is called for whole arrays in saving, let's implement truncation & reload
    await db.query('DELETE FROM blogs');
    for (const post of blogs) {
      await db.query(
        `INSERT INTO blogs (id, slug, title, excerpt, content, coverImage, category, authorName, authorRole, publishedAt, readTime, tags, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          post.id,
          post.slug,
          post.title,
          post.excerpt,
          post.content,
          post.coverImage,
          post.category,
          post.author.name,
          post.author.role,
          post.publishedAt,
          post.readTime,
          JSON.stringify(post.tags),
          post.featured ? 1 : 0
        ]
      );
    }
    return true;
  } catch (err) {
    console.error('Error saving blogs to MySQL:', err);
    return false;
  }
}

// 2. Projects
export async function getProjects(): Promise<Project[]> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query('SELECT * FROM projects');
  return (rows as any[]).map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    image: r.image,
    category: r.category,
    technologies: JSON.parse(r.technologies || '[]'),
    liveUrl: r.liveUrl,
    featured: !!r.featured,
  }));
}

export async function saveProjects(projects: Project[]): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    await db.query('DELETE FROM projects');
    for (const proj of projects) {
      await db.query(
        `INSERT INTO projects (id, title, description, image, category, technologies, liveUrl, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          proj.id,
          proj.title,
          proj.description,
          proj.image,
          proj.category,
          JSON.stringify(proj.technologies),
          proj.liveUrl || '',
          proj.featured ? 1 : 0
        ]
      );
    }
    return true;
  } catch (err) {
    console.error('Error saving projects to MySQL:', err);
    return false;
  }
}

// 3. Services
export async function getServices(): Promise<Omit<Service, 'icon'>[]> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query('SELECT * FROM services');
  return (rows as any[]).map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    shortDesc: r.shortDesc,
    features: JSON.parse(r.features || '[]'),
    technologies: JSON.parse(r.technologies || '[]'),
    color: r.color,
    href: r.href,
    featured: !!r.featured,
  }));
}

export async function saveServices(services: Omit<Service, 'icon'>[]): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    await db.query('DELETE FROM services');
    for (const serv of services) {
      await db.query(
        `INSERT INTO services (id, title, description, shortDesc, features, technologies, color, href, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          serv.id,
          serv.title,
          serv.description,
          serv.shortDesc,
          JSON.stringify(serv.features),
          JSON.stringify(serv.technologies),
          serv.color,
          serv.href,
          serv.featured ? 1 : 0
        ]
      );
    }
    return true;
  } catch (err) {
    console.error('Error saving services to MySQL:', err);
    return false;
  }
}

// 4. Service Page Templates (SEO templates)
export async function getServicePageTemplates(): Promise<ServicePageTemplate[]> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query('SELECT * FROM service_pages');
  return (rows as any[]).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    color: r.color,
    textColor: r.textColor,
    metaTitleTemplate: r.metaTitleTemplate,
    metaDescriptionTemplate: r.metaDescriptionTemplate,
    keywordsTemplate: JSON.parse(r.keywordsTemplate || '[]'),
    h1Template: r.h1Template,
    introTemplate: r.introTemplate,
    subIntroTemplate: r.subIntroTemplate,
    features: JSON.parse(r.features || '[]'),
    technologies: JSON.parse(r.technologies || '[]'),
    benefits: JSON.parse(r.benefits || '[]'),
    faqsTemplate: JSON.parse(r.faqsTemplate || '[]'),
  }));
}

export async function saveServicePageTemplates(templates: ServicePageTemplate[]): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    await db.query('DELETE FROM service_pages');
    for (const template of templates) {
      await db.query(
        `INSERT INTO service_pages (id, slug, title, color, textColor, metaTitleTemplate, metaDescriptionTemplate, keywordsTemplate, h1Template, introTemplate, subIntroTemplate, features, technologies, benefits, faqsTemplate)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          template.id,
          template.slug,
          template.title,
          template.color,
          template.textColor,
          template.metaTitleTemplate,
          template.metaDescriptionTemplate,
          JSON.stringify(template.keywordsTemplate),
          template.h1Template,
          template.introTemplate,
          template.subIntroTemplate,
          JSON.stringify(template.features),
          JSON.stringify(template.technologies),
          JSON.stringify(template.benefits),
          JSON.stringify(template.faqsTemplate)
        ]
      );
    }
    return true;
  } catch (err) {
    console.error('Error saving service templates to MySQL:', err);
    return false;
  }
}

// 5. Locations
export async function getLocations(): Promise<Location[]> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query('SELECT * FROM locations');
  return rows as Location[];
}

export async function saveLocations(locations: Location[]): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    await db.query('DELETE FROM locations');
    for (const loc of locations) {
      await db.query(
        `INSERT INTO locations (slug, name, state) VALUES (?, ?, ?)`,
        [loc.slug, loc.name, loc.state]
      );
    }
    return true;
  } catch (err) {
    console.error('Error saving locations to MySQL:', err);
    return false;
  }
}

// 6. Contacts
export async function getContacts(): Promise<ContactMessage[]> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query('SELECT * FROM contacts ORDER BY createdAt DESC');
  return (rows as any[]).map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    phone: r.phone,
    service: r.service,
    message: r.message,
    status: r.status as any,
    createdAt: r.createdAt,
  }));
}

export async function saveContacts(contacts: ContactMessage[]): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    // Clear and insert
    await db.query('DELETE FROM contacts');
    for (const c of contacts) {
      await db.query(
        `INSERT INTO contacts (id, name, email, phone, service, message, status, createdAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [c.id, c.name, c.email, c.phone || '', c.service || '', c.message, c.status, c.createdAt]
      );
    }
    return true;
  } catch (err) {
    console.error('Error saving contacts to MySQL:', err);
    return false;
  }
}

// 7. Admin users
export async function getAdminUser(username: string): Promise<AdminUser | undefined> {
  await ensureInit();
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, username, passwordHash FROM admin_users WHERE username = ?',
    [username]
  );
  const user = (rows as any[])[0];
  return user
    ? { id: user.id, username: user.username, passwordHash: user.passwordHash }
    : undefined;
}

export async function updateAdminPassword(username: string, passwordHash: string): Promise<boolean> {
  await ensureInit();
  const db = getPool();
  try {
    const [result] = await db.query(
      'UPDATE admin_users SET passwordHash = ?, updatedAt = ? WHERE username = ?',
      [passwordHash, new Date().toISOString(), username]
    );
    return (result as any).affectedRows > 0;
  } catch (err) {
    console.error('Error updating admin password in MySQL:', err);
    return false;
  }
}

// --- Derived dynamic async helpers for Blogs ---

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getBlogs();
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getBlogs();
  return posts.filter((post) => post.featured);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogs();
  return posts.find((post) => post.slug === slug);
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const posts = await getBlogs();
  const currentPost = posts.find((post) => post.slug === currentSlug);
  if (!currentPost) return [];

  return posts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getBlogs();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getBlogs();
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags);
}

// Add SEO page helpers
export async function getServiceTemplate(serviceSlug: string): Promise<ServicePageTemplate | undefined> {
  const templates = await getServicePageTemplates();
  return templates.find((s) => s.slug === serviceSlug);
}

export async function getLocationBySlug(slug: string): Promise<Location | undefined> {
  const locations = await getLocations();
  return locations.find((l) => l.slug === slug);
}
