# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.3.9-MariaDB)
# Database: spk_karyawan
# Generation Time: 2019-06-19 19:13:23 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table data_kriteria
# ------------------------------------------------------------

DROP TABLE IF EXISTS `data_kriteria`;

CREATE TABLE `data_kriteria` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `kriteria_id` int(11) DEFAULT NULL,
  `karyawan_id` int(11) DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `data_kriteria` WRITE;
/*!40000 ALTER TABLE `data_kriteria` DISABLE KEYS */;

INSERT INTO `data_kriteria` (`id`, `kriteria_id`, `karyawan_id`, `nilai`)
VALUES
	(1,2,14,6),
	(2,3,14,5),
	(3,4,14,6),
	(4,5,14,8),
	(5,6,14,6),
	(6,7,14,7),
	(7,8,14,3),
	(8,2,9,5),
	(9,3,9,5),
	(10,4,9,4),
	(11,5,9,4),
	(12,6,9,8),
	(13,7,9,9),
	(14,8,9,2),
	(15,2,7,6),
	(16,3,7,5),
	(17,4,7,6),
	(18,5,7,7),
	(19,6,7,9),
	(20,7,7,6),
	(21,8,7,1),
	(22,2,6,4),
	(23,3,6,7),
	(24,4,6,8),
	(25,5,6,7),
	(26,6,6,7),
	(27,7,6,7),
	(28,8,6,2),
	(29,2,5,7),
	(30,3,5,8),
	(31,4,5,9),
	(32,5,5,5),
	(33,6,5,6),
	(34,7,5,5),
	(35,8,5,4),
	(36,2,10,8),
	(37,3,10,7),
	(38,4,10,2),
	(39,5,10,8),
	(40,6,10,5),
	(41,7,10,8),
	(42,8,10,4),
	(43,2,11,6),
	(44,3,11,6),
	(45,4,11,6),
	(46,5,11,7),
	(47,6,11,7),
	(48,7,11,7),
	(49,8,11,1),
	(50,2,13,8),
	(51,3,13,5),
	(52,4,13,7),
	(53,5,13,9),
	(54,6,13,7),
	(55,7,13,8),
	(56,8,13,2),
	(57,2,12,7),
	(58,3,12,5),
	(59,4,12,8),
	(60,5,12,6),
	(61,6,12,6),
	(62,7,12,6),
	(63,8,12,2),
	(64,2,8,7),
	(65,3,8,5),
	(66,4,8,5),
	(67,5,8,8),
	(68,6,8,6),
	(69,7,8,7),
	(70,8,8,1);

/*!40000 ALTER TABLE `data_kriteria` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hasil_akhir
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hasil_akhir`;

CREATE TABLE `hasil_akhir` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `karyawan_id` int(11) DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `hasil_akhir` WRITE;
/*!40000 ALTER TABLE `hasil_akhir` DISABLE KEYS */;

INSERT INTO `hasil_akhir` (`id`, `karyawan_id`, `total`)
VALUES
	(1,5,0.85),
	(2,6,0.68),
	(3,7,0.72),
	(4,8,0.73),
	(5,9,0.62),
	(6,10,0.8),
	(7,11,0.72),
	(8,12,0.77),
	(9,13,0.86),
	(10,14,0.73);

/*!40000 ALTER TABLE `hasil_akhir` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table karyawan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `karyawan`;

CREATE TABLE `karyawan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_karyawan` varchar(50) DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `ttl` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `karyawan` WRITE;
/*!40000 ALTER TABLE `karyawan` DISABLE KEYS */;

INSERT INTO `karyawan` (`id`, `nama_karyawan`, `umur`, `ttl`)
VALUES
	(5,'Kardiawan',34,'1992-12-01'),
	(6,'Imanuel ',35,'1997-12-12'),
	(7,'Gusfakih',21,'1993-12-23'),
	(8,'Syamsul Bhari',35,'1976-12-25'),
	(9,'Arifin Ilham',43,'1932-03-09'),
	(10,'Martinus',65,'1987-12-12'),
	(11,'Robertus',76,'2000-12-07'),
	(12,'Supardi',43,'1991-12-12'),
	(13,'Slamet Riyadi',24,'1994-12-12'),
	(14,'Ahmad Solihin',25,'1995-02-28');

/*!40000 ALTER TABLE `karyawan` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table kriteria
# ------------------------------------------------------------

DROP TABLE IF EXISTS `kriteria`;

CREATE TABLE `kriteria` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_kriteria` varchar(100) DEFAULT NULL,
  `bobot` int(11) DEFAULT NULL,
  `bobotpecahan` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `kriteria` WRITE;
/*!40000 ALTER TABLE `kriteria` DISABLE KEYS */;

INSERT INTO `kriteria` (`id`, `nama_kriteria`, `bobot`, `bobotpecahan`)
VALUES
	(2,'Kualias Kerja',40,0.4),
	(3,'Ketelitian Kerja',15,0.15),
	(4,'Absensi Kehadiran',15,0.15),
	(5,'Perilaku',10,0.1),
	(6,'Kedisiplinan Kerja',10,0.1),
	(7,'Tanggung Jawab',5,0.05),
	(8,'Waktu Kerja',5,0.05);

/*!40000 ALTER TABLE `kriteria` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `nama_user` varchar(25) DEFAULT NULL,
  `level` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `username`, `password`, `nama_user`, `level`)
VALUES
	(1,'admin','admin','Admin','admin');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
