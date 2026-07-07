-- SK WebTech Database Schema
-- MySQL Database: skwebtech

CREATE DATABASE IF NOT EXISTS `skwebtech` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `skwebtech`;

-- 1. Blogs Table
-- Stores blog posts details, content is saved in Markdown format
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` VARCHAR(50) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `excerpt` TEXT NULL,
  `content` MEDIUMTEXT NULL,
  `coverImage` VARCHAR(255) NULL,
  `category` VARCHAR(100) NULL,
  `authorName` VARCHAR(100) NULL,
  `authorRole` VARCHAR(100) NULL,
  `publishedAt` VARCHAR(50) NULL,
  `readTime` VARCHAR(50) NULL,
  `tags` TEXT NULL, -- JSON array of tags (strings)
  `featured` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_blog_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Projects Table
-- Stores portfolio showcase projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` VARCHAR(50) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `image` VARCHAR(255) NULL,
  `category` VARCHAR(100) NULL,
  `technologies` TEXT NULL, -- JSON array of technologies (strings)
  `liveUrl` VARCHAR(255) NULL,
  `featured` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Services Table
-- Stores service listings shown on the homepage and services catalog
CREATE TABLE IF NOT EXISTS `services` (
  `id` VARCHAR(50) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `shortDesc` VARCHAR(255) NULL,
  `features` TEXT NULL, -- JSON array of features (strings)
  `technologies` TEXT NULL, -- JSON array of tools/languages (strings)
  `color` VARCHAR(100) NULL, -- CSS background gradient classes
  `href` VARCHAR(255) NULL, -- Redirect link (if any)
  `featured` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Service Pages (SEO Templates) Table
-- Stores the local SEO layout templates for services page generation
CREATE TABLE IF NOT EXISTS `service_pages` (
  `id` VARCHAR(50) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `color` VARCHAR(100) NULL,
  `textColor` VARCHAR(100) NULL,
  `metaTitleTemplate` VARCHAR(255) NULL,
  `metaDescriptionTemplate` TEXT NULL,
  `keywordsTemplate` TEXT NULL, -- JSON array of keywords templates
  `h1Template` VARCHAR(255) NULL,
  `introTemplate` TEXT NULL,
  `subIntroTemplate` TEXT NULL,
  `features` TEXT NULL, -- JSON array of custom objects: [{title, desc}]
  `technologies` TEXT NULL, -- JSON array of technologies
  `benefits` TEXT NULL, -- JSON array of objects: [{title, desc, icon}]
  `faqsTemplate` TEXT NULL, -- JSON array of objects: [{q, a}]
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_page_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Locations Table
-- Stores the cities/states for which regional landing pages are generated
CREATE TABLE IF NOT EXISTS `locations` (
  `slug` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NULL,
  PRIMARY KEY (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Contacts Table
-- Stores client inquiries and contact form submissions
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `service` VARCHAR(100) NULL,
  `message` TEXT NULL,
  `status` VARCHAR(50) DEFAULT 'Pending', -- 'Pending', 'In-Progress', 'Resolved'
  `createdAt` VARCHAR(50) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Admin Users Table
-- Stores admin panel accounts; passwords are bcrypt hashes (never plain text).
-- A default user (username: admin) is auto-seeded by the app on first run
-- from the ADMIN_PASSWORD env var, then managed via the dashboard Security card.
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `passwordHash` VARCHAR(100) NOT NULL, -- bcrypt hash (cost 12)
  `createdAt` VARCHAR(50) NULL,
  `updatedAt` VARCHAR(50) NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_admin_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin account — username: admin / password: admin123
-- The hash below is bcrypt('admin123', cost 12). Plain-text passwords are NEVER stored.
-- ⚠ CHANGE THIS PASSWORD immediately after first login: Admin Dashboard → Security → Update Password.
-- (The app also auto-seeds this row on first run if the table is empty, so running this is optional.)
INSERT IGNORE INTO `admin_users` (`username`, `passwordHash`, `createdAt`, `updatedAt`)
VALUES ('admin', '$2b$12$7aTx5AG5DW1BGD2aB.CUvur..njroW/f2JKAh6/om25fWUsFpux8K', NOW(), NOW());
