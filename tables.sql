
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `courses`
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `requirement` varchar(250) DEFAULT NULL,
  `workload` varchar(250) DEFAULT NULL,
  `price` DECIMAL(10,2) DEFAULT NULL,
  `status` tinyint(2) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `instructors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `workload` varchar(250) DEFAULT NULL,
  `hour_value` DECIMAL(10, 2) DEFAULT NULL,
  `certificate` varchar(250) DEFAULT NULL,
  `status` tinyint(2) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;
CREATE TABLE `classes` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `instructor_id` INT(11) NULL DEFAULT NULL,
  `courses_id` INT(11) NULL DEFAULT NULL,
  `start_date` DATE NULL DEFAULT NULL,
  `final_date` DATE NULL DEFAULT NULL,
  `workload` SMALLINT(6) NULL DEFAULT NULL,
  INDEX `courses_FKIndex1` (`courses_id`) USING BTREE,
  INDEX `instructors_FKIndex2` (`instructor_id`) USING BTREE,
  CONSTRAINT `courses_FKIndex1` FOREIGN KEY (`courses_id`) REFERENCES `api_node`.`courses` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT `instructors_FKIndex2` FOREIGN KEY (`instructor_id`) REFERENCES `api_node`.`instructors` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
) COLLATE = 'utf8mb4_general_ci' ENGINE = InnoDB;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `document` CHAR(11) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` CHAR(11) DEFAULT NULL,
  `birth_date` DATE,
  `status` tinyint(2) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;
CREATE TABLE `matriculates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classes_id` INT(11) NOT NULL,
  `courses_id` INT(11) NOT NULL,
  `start_date` DATE NULL DEFAULT NULL,
  `final_date` DATE NULL DEFAULT NULL,
  `workload` SMALLINT(6) NULL DEFAULT NULL,
  INDEX `courses_FKIndex1` (`courses_id`) USING BTREE,
  INDEX `classes_FKIndex2` (`classes_id`) USING BTREE,
  CONSTRAINT `courses_FKIndex1` FOREIGN KEY (`courses_id`) REFERENCES `api_node`.`courses` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT `classes_FKIndex2` FOREIGN KEY (`classes_id`) REFERENCES `api_node`.`classes` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
) COLLATE = 'utf8mb4_general_ci' ENGINE = InnoDB;