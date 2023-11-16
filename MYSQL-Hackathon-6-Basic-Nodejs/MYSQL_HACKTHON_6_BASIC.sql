

CREATE DATABASE MYSQL_HACKTHON_6_BASIC;

USE MYSQL_HACKTHON_6_BASIC;

-- Tạo Bảng
CREATE TABLE todo (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name TEXT,
    status VARCHAR(50) DEFAULT 'uncompleted'
);


-- TODO
-- Lấy tất cả các todo
SELECT 
    *
FROM
    todo;
-- Hiển thị thông tin 1 todo
SELECT 
    *
FROM
    todo
WHERE
    id = 1;

-- Thêm một todo
INSERT INTO todo (name) VALUES 
('Làm việc nhà');

-- Xóa một todo
DELETE FROM todo 
WHERE id = 1 ;

-- Sửa một todo

UPDATE todo
SET name = 'ăn cơm', status = 'completed'
WHERE id = 1 ;



