CREATE DATABASE IF NOT EXISTS zidstyling
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE zidstyling;

CREATE TABLE IF NOT EXISTS consultation_requests (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(40) NOT NULL DEFAULT '',
  occasion VARCHAR(100) NOT NULL,
  needed_by DATE NULL,
  idea TEXT NOT NULL,
  status ENUM('new', 'contacted', 'completed', 'cancelled') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_consultation_created_at (created_at),
  INDEX idx_consultation_status (status)
);
