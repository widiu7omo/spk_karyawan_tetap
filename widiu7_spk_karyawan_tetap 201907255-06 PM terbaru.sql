# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 64.62.211.134 (MySQL 5.6.37)
# Database: widiu7_spk_karyawan_tetap
# Generation Time: 2019-07-25 09:06:21 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table calon_karyawan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `calon_karyawan`;

CREATE TABLE `calon_karyawan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_karyawan` varchar(50) DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `ttl` varchar(22) DEFAULT NULL,
  `status` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `calon_karyawan` WRITE;
/*!40000 ALTER TABLE `calon_karyawan` DISABLE KEYS */;

INSERT INTO `calon_karyawan` (`id`, `nama_karyawan`, `umur`, `ttl`, `status`)
VALUES
	(3,'Arifin Ilham',31,'1987-03-21',0),
	(6,'Sutrisno',25,'1993-02-02',0),
	(7,'Alexander',18,'2000-07-22',0),
	(8,'Loren',30,'1988-08-15',0),
	(9,'Sanadi',41,'1977-03-21',0);

/*!40000 ALTER TABLE `calon_karyawan` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table data_kriteria
# ------------------------------------------------------------

DROP TABLE IF EXISTS `data_kriteria`;

CREATE TABLE `data_kriteria` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `kriteria_id` int(11) unsigned DEFAULT NULL,
  `karyawan_id` int(11) unsigned DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kriteria_id` (`kriteria_id`),
  KEY `karyawan_id` (`karyawan_id`),
  CONSTRAINT `data_kriteria_ibfk_1` FOREIGN KEY (`kriteria_id`) REFERENCES `kriteria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `data_kriteria_ibfk_2` FOREIGN KEY (`karyawan_id`) REFERENCES `calon_karyawan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `data_kriteria` WRITE;
/*!40000 ALTER TABLE `data_kriteria` DISABLE KEYS */;

INSERT INTO `data_kriteria` (`id`, `kriteria_id`, `karyawan_id`, `nilai`)
VALUES
	(1,2,3,6),
	(2,3,3,7),
	(3,4,3,6),
	(4,5,3,5),
	(5,6,3,9),
	(6,7,3,6),
	(7,8,3,5),
	(8,2,6,5),
	(9,3,6,8),
	(10,4,6,6),
	(11,5,6,7),
	(12,6,6,4),
	(13,7,6,5),
	(14,8,6,8),
	(15,2,7,5),
	(16,3,7,7),
	(17,4,7,6),
	(18,5,7,7),
	(19,6,7,8),
	(20,7,7,5),
	(21,8,7,7),
	(22,2,8,6),
	(23,3,8,7),
	(24,4,8,8),
	(25,5,8,6),
	(26,6,8,4),
	(27,7,8,7),
	(28,8,8,8),
	(29,2,9,7),
	(30,3,9,6),
	(31,4,9,8),
	(32,5,9,7),
	(33,6,9,6),
	(34,7,9,8),
	(35,8,9,7);

/*!40000 ALTER TABLE `data_kriteria` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hasil_akhir
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hasil_akhir`;

CREATE TABLE `hasil_akhir` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `karyawan_id` int(11) unsigned DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `karyawan_id` (`karyawan_id`),
  CONSTRAINT `hasil_akhir_ibfk_1` FOREIGN KEY (`karyawan_id`) REFERENCES `calon_karyawan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `hasil_akhir` WRITE;
/*!40000 ALTER TABLE `hasil_akhir` DISABLE KEYS */;

INSERT INTO `hasil_akhir` (`id`, `karyawan_id`, `total`)
VALUES
	(1,3,0.83),
	(2,6,0.77),
	(3,7,0.79),
	(4,8,0.85),
	(5,9,0.92);

/*!40000 ALTER TABLE `hasil_akhir` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table history_pemilihan_karyawan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `history_pemilihan_karyawan`;

CREATE TABLE `history_pemilihan_karyawan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_karyawan` varchar(50) DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `ttl` varchar(22) DEFAULT NULL,
  `status` int(1) DEFAULT '0',
  `waktu_pemilihan` datetime DEFAULT NULL,
  `batch_pengambilan` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `history_pemilihan_karyawan` WRITE;
/*!40000 ALTER TABLE `history_pemilihan_karyawan` DISABLE KEYS */;

INSERT INTO `history_pemilihan_karyawan` (`id`, `nama_karyawan`, `umur`, `ttl`, `status`, `waktu_pemilihan`, `batch_pengambilan`)
VALUES
	(15,'Kardiawan',34,'1992-12-01',1,'2019-07-12 07:12:17',3),
	(16,'Imanuel ',35,'1997-12-12',1,'2019-07-12 07:12:17',3),
	(17,'Arifin Ilham',43,'1932-03-09',1,'2019-07-12 07:12:17',3),
	(18,'Slamet Riyadi',24,'1994-12-12',1,'2019-07-12 07:12:17',3),
	(19,'Ahmad Solehudin',28,'1990-01-29',1,'2019-07-12 07:12:17',3),
	(20,'Sutrisno',25,'1993-02-02',0,'2019-07-12 07:12:17',3),
	(22,'Kardiawan',34,'1992-12-01',1,'2019-07-12 07:30:32',4),
	(23,'Imanuel ',35,'1997-12-12',1,'2019-07-12 07:30:32',4),
	(24,'Arifin Ilham',43,'1932-03-09',0,'2019-07-12 07:30:32',4),
	(25,'Slamet Riyadi',24,'1994-12-12',1,'2019-07-12 07:30:32',4),
	(26,'Ahmad Solehudin',28,'1990-01-29',1,'2019-07-12 07:30:32',4),
	(27,'Sutrisno',25,'1993-02-02',0,'2019-07-12 07:30:32',4),
	(28,'Hartono',25,'1993-02-02',1,'2019-07-12 07:30:32',4);

/*!40000 ALTER TABLE `history_pemilihan_karyawan` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table karyawan_tetap
# ------------------------------------------------------------

DROP TABLE IF EXISTS `karyawan_tetap`;

CREATE TABLE `karyawan_tetap` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_karyawan` varchar(50) DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `ttl` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `karyawan_tetap` WRITE;
/*!40000 ALTER TABLE `karyawan_tetap` DISABLE KEYS */;

INSERT INTO `karyawan_tetap` (`id`, `nama_karyawan`, `umur`, `ttl`)
VALUES
	(5,'Kardiawan',34,'1992-12-01'),
	(6,'Imanuel ',35,'1997-12-12'),
	(7,'Gusfakih',21,'1993-12-23'),
	(8,'Syamsul Bhari',35,'1976-12-25'),
	(9,'Arifin Ilham',43,'1932-03-09'),
	(10,'Martinus',65,'1987-12-12'),
	(15,'Gusfakih',21,'1993-12-23'),
	(16,'Syamsul Bhari',35,'1976-12-25'),
	(17,'Martinus',65,'1987-12-12'),
	(18,'Robertus',76,'2000-12-07'),
	(19,'Supardi',43,'1991-12-12'),
	(22,'Kardiawan',34,'1992-12-01'),
	(23,'Imanuel ',35,'1997-12-12'),
	(24,'Arifin Ilham',43,'1932-03-09'),
	(25,'Ahmad Solehudin',28,'1990-01-29'),
	(43,'Kardiawan',34,'1992-12-01'),
	(44,'Imanuel ',35,'1997-12-12'),
	(45,'Arifin Ilham',43,'1932-03-09'),
	(46,'Slamet Riyadi',24,'1994-12-12'),
	(47,'Ahmad Solehudin',28,'1990-01-29'),
	(50,'Kardiawan',34,'1992-12-01'),
	(51,'Imanuel ',35,'1997-12-12'),
	(52,'Slamet Riyadi',24,'1994-12-12'),
	(53,'Ahmad Solehudin',28,'1990-01-29'),
	(54,'Hartono',25,'1993-02-02');

/*!40000 ALTER TABLE `karyawan_tetap` ENABLE KEYS */;
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
	(2,'Kualitas Kerja',40,0.4),
	(3,'Ketelitian Kerja',15,0.15),
	(4,'Absensi Kehadiran',15,0.15),
	(5,'Perilaku',10,0.1),
	(6,'Kedisiplinan Kerja',10,0.1),
	(7,'Tanggung Jawab',5,0.05),
	(8,'Waktu Kerja',5,0.05);

/*!40000 ALTER TABLE `kriteria` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `aksi` text,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;

INSERT INTO `log` (`id`, `aksi`, `date`)
VALUES
	(1,'Admin Keluar','2019-07-25 08:58:19'),
	(2,'Admin Login','2019-07-25 08:58:27'),
	(3,'Admin Keluar','2019-07-25 08:58:43'),
	(4,'Admin Login','2019-07-25 08:58:58');

/*!40000 ALTER TABLE `log` ENABLE KEYS */;
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
