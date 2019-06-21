# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.3.9-MariaDB)
# Database: simfak
# Generation Time: 2019-06-20 02:13:01 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table akun
# ------------------------------------------------------------

DROP TABLE IF EXISTS `akun`;

CREATE TABLE `akun` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `level_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `akun` WRITE;
/*!40000 ALTER TABLE `akun` DISABLE KEYS */;

INSERT INTO `akun` (`id`, `username`, `password`, `level_id`)
VALUES
	(23,'A1316021','mahasiswa',2),
	(29,'direktur','direktur',5),
	(30,'bmn','bmn',3),
	(31,'admin','admin',1),
	(32,'kabag','kabag',4);

/*!40000 ALTER TABLE `akun` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table barang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `barang`;

CREATE TABLE `barang` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_barang` varchar(100) DEFAULT NULL,
  `jumlah` int(3) DEFAULT 0,
  `waktu_penambahan` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `barang` WRITE;
/*!40000 ALTER TABLE `barang` DISABLE KEYS */;

INSERT INTO `barang` (`id`, `nama_barang`, `jumlah`, `waktu_penambahan`)
VALUES
	(1,'Kursi',360,'2019-06-20 10:09:14'),
	(2,'Meja',100,'2019-06-20 10:01:18'),
	(3,'Ambal',400,'2019-06-20 10:01:18');

/*!40000 ALTER TABLE `barang` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cart_barang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cart_barang`;

CREATE TABLE `cart_barang` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) DEFAULT NULL,
  `akun_id` varchar(25) DEFAULT NULL,
  `jumlah` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table cart_ruangan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cart_ruangan`;

CREATE TABLE `cart_ruangan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ruangan_id` int(11) DEFAULT NULL,
  `akun_id` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table level
# ------------------------------------------------------------

DROP TABLE IF EXISTS `level`;

CREATE TABLE `level` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_level` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `level` WRITE;
/*!40000 ALTER TABLE `level` DISABLE KEYS */;

INSERT INTO `level` (`id`, `nama_level`)
VALUES
	(1,'admin'),
	(2,'mahasiswa'),
	(3,'bmn'),
	(4,'kabag umum'),
	(5,'direktur');

/*!40000 ALTER TABLE `level` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table mahasiswa
# ------------------------------------------------------------

DROP TABLE IF EXISTS `mahasiswa`;

CREATE TABLE `mahasiswa` (
  `nim` varchar(25) NOT NULL DEFAULT '',
  `nama_mahasiswa` varchar(100) DEFAULT NULL,
  `email_mahasiswa` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;

INSERT INTO `mahasiswa` (`nim`, `nama_mahasiswa`, `email_mahasiswa`)
VALUES
	('A1315041','Jumrani',NULL),
	('A1315108','Yulia Agustin',NULL),
	('A1316001','Adimas Kurniawan',NULL),
	('A1316002','Afrizal Habibi',NULL),
	('A1316004','Ahmad Fadillah',NULL),
	('A1316005','Ahmad Gapuri',NULL),
	('A1316006','Ahmad Nawawi',NULL),
	('A1316007','Akhmad Habibie',NULL),
	('A1316008','Aldania Rhiyanti Tambay',NULL),
	('A1316009','Alivia Agiesta Novitasari',NULL),
	('A1316010','Amalia Wanda Agustin',NULL),
	('A1316011','Amanda Ika Adistya',NULL),
	('A1316012','Apriliyana',NULL),
	('A1316013','Arief Mahdi',NULL),
	('A1316014','Ariyati Lestari',NULL),
	('A1316015','Army',NULL),
	('A1316017','Ayu Faradillah',NULL),
	('A1316018','Bonifasius Tandi',NULL),
	('A1316020','Catur Yuda Pratama',NULL),
	('A1316021','Danar Widi Utomo',NULL),
	('A1316022','Dendy Krisnadi Saputra',NULL),
	('A1316023','Devi Febriyanti',NULL),
	('A1316024','Dianawati',NULL),
	('A1316025','Dwiki Agustin Handayani',NULL),
	('A1316026','Eka Wulan Sari',NULL),
	('A1316028','Emiliyana Varida Sholehah',NULL),
	('A1316029','Emilyatie',NULL),
	('A1316030','Erni Widiya Wati',NULL),
	('A1316031','Fadel Muhammad',NULL),
	('A1316032','Fajar Triwijaya',NULL),
	('A1316033','Fathul Jannah',NULL),
	('A1316034','Febriannur',NULL),
	('A1316036','Hafiz Ansari',NULL),
	('A1316037','Handika',NULL),
	('A1316038','Haryati',NULL),
	('A1316039','Heriyanti',NULL),
	('A1316041','Herry Sulistia Hadikusuma',NULL),
	('A1316042','Hilda Anggi Pratiwi',NULL),
	('A1316043','Ibnu Fajar',NULL),
	('A1316044','Isabella Yulinshia Citra V.',NULL),
	('A1316046','Julian Rivaldo Menteng',NULL),
	('A1316047','Kadariyah',NULL),
	('A1316048','Kurlinasari',NULL),
	('A1316049','Leny Pebriyanti',NULL),
	('A1316050','Lisa Fitria',NULL),
	('A1316051','Lusiana',NULL),
	('A1316052','M. Fahrial Agustian',NULL),
	('A1316053','M. Fuadi Aziz Muri',NULL),
	('A1316055','Mahathir Ibrahim',NULL),
	('A1316056','Maimun Shalehah',NULL),
	('A1316057','Mariatul Kiftiah',NULL),
	('A1316058','Masa Exgelia Dirhayu S. R. S.',NULL),
	('A1316059','Mesayu Yuniza Putri Wahyudi',NULL),
	('A1316060','Miftahul Khair',NULL),
	('A1316061','Much. Rifani',NULL),
	('A1316062','Muhamad Ega Nabhan',NULL),
	('A1316063','Muhamad Kastalani',NULL),
	('A1316064','Muhammad Asrorri',NULL),
	('A1316065','Muhammad Fadly Ramadhana',NULL),
	('A1316066','Muhammad Fajar',NULL),
	('A1316067','Muhammad Fajar Baskhara',NULL),
	('A1316068','Muhammad Masyhuri',NULL),
	('A1316069','Muhammad Maulana',NULL),
	('A1316070','Muhammad Rasyid',NULL),
	('A1316071','Muhammad Rifqi Rizhani',NULL),
	('A1316072','Muhammad Rizaldi',NULL),
	('A1316073','Muhammad Rizki Maulana',NULL),
	('A1316074','Muhammad Sabani Ackbar',NULL),
	('A1316075','Muhammad Syahbani Adiguna',NULL),
	('A1316076','Muhammad Syahrul Rizal',NULL),
	('A1316077','Muhammad Tommy',NULL),
	('A1316080','Nadia',NULL),
	('A1316081','Nana Rusana',NULL),
	('A1316082','Neneng Adiwidiastuti',NULL),
	('A1316083','Nia Soraya',NULL),
	('A1316084','Normalisa',NULL),
	('A1316085','Normiyanti',NULL),
	('A1316087','Nurul Hasanah',NULL),
	('A1316090','Oktavia Ayu Soraya Raulina',NULL),
	('A1316091','Parida Hasanah',NULL),
	('A1316092','Pratiwi Anggraeni',NULL),
	('A1316093','Rabiatul Adawiyah',NULL),
	('A1316094','Rahma Nurhamisah',NULL),
	('A1316095','Raisita Aprilia',NULL),
	('A1316096','Rakhmilawati Faznur',NULL),
	('A1316097','Rama Novaris Ayyubi Pratama',NULL),
	('A1316098','Rana Fadhilah',NULL),
	('A1316099','Reinaldo',NULL),
	('A1316100','Resni Habibah',NULL),
	('A1316101','Ria Aprilia',NULL),
	('A1316102','Risda',NULL),
	('A1316103','Riski Puspa Pratiwi',NULL),
	('A1316105','Rizal Iskandar Al Ubaidah',NULL),
	('A1316106','Rizal Wardani',NULL),
	('A1316107','Rizki Hidayatullah',NULL),
	('A1316109','Rusida Riyani',NULL),
	('A1316110','Salsabila',NULL),
	('A1316111','Samsiatul Asriyah',NULL),
	('A1316112','Sela Aprilia',NULL),
	('A1316113','Septi Saputri',NULL),
	('A1316114','Siti Hotimah',NULL),
	('A1316115','Siti Nur Halisah',NULL),
	('A1316116','Sofiatun Mawardah',NULL),
	('A1316117','Sri Mulyati',NULL),
	('A1316118','Suharmadi',NULL),
	('A1316119','Sulaiman',NULL),
	('A1316120','Syaiful Hadi',NULL),
	('A1316121','Syarifa Nabila Huda',NULL),
	('A1316122','Tri Mulya Baktiningsih',NULL),
	('A1316123','Uni Pratiwi',NULL),
	('A1316124','Utami Rahayu Ningsih',NULL),
	('A1316125','Widi Dewi Saputri',NULL),
	('A1316126','Wulandari',NULL),
	('A1316127','Yuni Rohmatin',NULL),
	('A1316128','Yurice Buntu',NULL),
	('A1316129','Yurisma Baihaqi',NULL);

/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table notifikasi
# ------------------------------------------------------------

DROP TABLE IF EXISTS `notifikasi`;

CREATE TABLE `notifikasi` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pengirim` varchar(25) DEFAULT NULL,
  `penerima` varchar(25) DEFAULT NULL,
  `pesan` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `kategori` varchar(25) DEFAULT NULL,
  `read_status` int(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `notifikasi` WRITE;
/*!40000 ALTER TABLE `notifikasi` DISABLE KEYS */;

INSERT INTO `notifikasi` (`id`, `pengirim`, `penerima`, `pesan`, `link`, `kategori`, `read_status`)
VALUES
	(30,'A1316021','kabag umum','Mahasiswa mengajukan peminjaman fasilitas kampus.','./peminjaman-list.php','permohonan',1),
	(31,'kabag umum','A1316021','Peminjaman fasilitas perihal Acara Pelantikan Presma di TIP, <b class=\"text-success\">diterima</b> oleh kabag umum, akan diteruskan ke BMN','./peminjaman-user-status.php','Perizinan',0),
	(32,'kabag umum','bmn','Peminjaman fasilitas perihal Acara Pelantikan Presma di TIP, <b class=\"text-success\">diterima</b> oleh kabag umum, akan diteruskan ke BMN','./peminjaman-list.php','Perizinan',0),
	(33,'bmn','A1316021','Permintaan persetujuan peminjaman fasilitas perihal Acara Pelantikan Presma di TIP disetujui oleh BMN','./peminjaman-user-status.php','Perizinan',0),
	(34,'A1316021','kabag umum','Mahasiswa mengajukan peminjaman fasilitas kampus.','./peminjaman-list.php','permohonan',1),
	(35,'kabag umum','A1316021','Peminjaman fasilitas perihal Acara sambutan DPR kalsel, <b class=\"text-success\">diterima</b> oleh kabag umum, akan diteruskan ke BMN','./peminjaman-user-status.php','Perizinan',0),
	(36,'kabag umum','bmn','Peminjaman fasilitas perihal Acara sambutan DPR kalsel, <b class=\"text-success\">diterima</b> oleh kabag umum, akan diteruskan ke BMN','./peminjaman-list.php','Perizinan',0),
	(37,'bmn','A1316021','Permintaan persetujuan peminjaman fasilitas perihal Acara sambutan DPR kalsel <b class=\"text-success\">disetujui</b> oleh BMN','./peminjaman-user-status.php','Perizinan',0);

/*!40000 ALTER TABLE `notifikasi` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pegawai
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pegawai`;

CREATE TABLE `pegawai` (
  `nik` varchar(25) NOT NULL DEFAULT '',
  `nama_pegawai` varchar(255) DEFAULT NULL,
  `email_pegawai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nik`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `pegawai` WRITE;
/*!40000 ALTER TABLE `pegawai` DISABLE KEYS */;

INSERT INTO `pegawai` (`nik`, `nama_pegawai`, `email_pegawai`)
VALUES
	('admin','Admin','admin@politala.ac.id'),
	('bmn','Bmn','bmn@politala.ac.id'),
	('kabag','Kabag Umum','kabagumum@politala.ac.id');

/*!40000 ALTER TABLE `pegawai` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table peminjaman_barang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `peminjaman_barang`;

CREATE TABLE `peminjaman_barang` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) DEFAULT NULL,
  `tanggal_transaksi` date DEFAULT '0000-00-00',
  `tanggal_kembali` date NOT NULL DEFAULT '0000-00-00',
  `status` int(11) DEFAULT 0,
  `jumlah` int(11) DEFAULT 0,
  `akun_id` varchar(25) DEFAULT NULL,
  `perihal` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `peminjaman_barang` WRITE;
/*!40000 ALTER TABLE `peminjaman_barang` DISABLE KEYS */;

INSERT INTO `peminjaman_barang` (`id`, `barang_id`, `tanggal_transaksi`, `tanggal_kembali`, `status`, `jumlah`, `akun_id`, `perihal`)
VALUES
	(54,1,'2019-06-20','2019-06-20',1,40,'A1316021','Acara sambutan DPR kalsel');

/*!40000 ALTER TABLE `peminjaman_barang` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `sync_with_barang` AFTER INSERT ON `peminjaman_barang` FOR EACH ROW begin
update barang set jumlah = jumlah-new.jumlah where barang.id = new.barang_id;
end */;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `store_riwayat_barang` BEFORE DELETE ON `peminjaman_barang` FOR EACH ROW begin
INSERT INTO riwayat_barang(barang_id, status,jumlah, akun_id,perihal,tanggal_transaksi,tanggal_kembali) VALUES (old.barang_id,old.status,old.jumlah,old.akun_id,old.perihal,old.tanggal_transaksi,old.tanggal_kembali);
end */;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `sync_delete_with_barang` AFTER DELETE ON `peminjaman_barang` FOR EACH ROW begin
update barang set jumlah = jumlah+old.jumlah where barang.id = old.barang_id;
end */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table peminjaman_ruangan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `peminjaman_ruangan`;

CREATE TABLE `peminjaman_ruangan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ruangan_id` int(11) DEFAULT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `tanggal_kembali` date DEFAULT '0000-00-00',
  `status` int(11) DEFAULT 0,
  `akun_id` varchar(25) DEFAULT '',
  `perihal` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `peminjaman_ruangan` WRITE;
/*!40000 ALTER TABLE `peminjaman_ruangan` DISABLE KEYS */;

INSERT INTO `peminjaman_ruangan` (`id`, `ruangan_id`, `tanggal_transaksi`, `tanggal_kembali`, `status`, `akun_id`, `perihal`)
VALUES
	(38,1,'2019-06-20','2019-06-20',1,'A1316021','Acara sambutan DPR kalsel');

/*!40000 ALTER TABLE `peminjaman_ruangan` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `sync_with_ruangan` AFTER INSERT ON `peminjaman_ruangan` FOR EACH ROW begin
update ruangan set status = 1 where ruangan.id = new.ruangan_id;
end */;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `store_riwayat_ruangan` BEFORE DELETE ON `peminjaman_ruangan` FOR EACH ROW begin
INSERT INTO riwayat_ruangan(ruangan_id, akun_id,status,perihal,tanggal_transaksi,tanggal_kembali) VALUES (old.ruangan_id,old.akun_id,old.status,old.perihal,old.tanggal_transaksi,old.tanggal_kembali);
end */;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `sync_delete_with_ruangan` AFTER DELETE ON `peminjaman_ruangan` FOR EACH ROW begin
update ruangan set status = 0 where ruangan.id = old.ruangan_id;
end */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table prodi
# ------------------------------------------------------------

DROP TABLE IF EXISTS `prodi`;

CREATE TABLE `prodi` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_prodi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;

INSERT INTO `prodi` (`id`, `nama_prodi`)
VALUES
	(1,'Teknik Informatika'),
	(2,'Teknologi Industri Pertanian'),
	(3,'Mesin Otomotif'),
	(4,'Akuntansi');

/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table riwayat_barang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `riwayat_barang`;

CREATE TABLE `riwayat_barang` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) DEFAULT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `tanggal_kembali` date DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `akun_id` varchar(25) DEFAULT NULL,
  `perihal` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `riwayat_barang` WRITE;
/*!40000 ALTER TABLE `riwayat_barang` DISABLE KEYS */;

INSERT INTO `riwayat_barang` (`id`, `barang_id`, `tanggal_transaksi`, `tanggal_kembali`, `status`, `jumlah`, `akun_id`, `perihal`)
VALUES
	(1,1,'2019-06-26','2019-06-26',1,40,'A1316021','Acara Pelantikan Presma di TIP'),
	(2,2,'2019-06-26','2019-06-26',1,5,'A1316021','Acara Pelantikan Presma di TIP'),
	(3,3,'2019-06-26','2019-06-26',1,5,'A1316021','Acara Pelantikan Presma di TIP');

/*!40000 ALTER TABLE `riwayat_barang` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table riwayat_ruangan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `riwayat_ruangan`;

CREATE TABLE `riwayat_ruangan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ruangan_id` int(11) DEFAULT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `tanggal_kembali` date DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `akun_id` varchar(25) DEFAULT NULL,
  `perihal` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `riwayat_ruangan` WRITE;
/*!40000 ALTER TABLE `riwayat_ruangan` DISABLE KEYS */;

INSERT INTO `riwayat_ruangan` (`id`, `ruangan_id`, `tanggal_transaksi`, `tanggal_kembali`, `status`, `akun_id`, `perihal`)
VALUES
	(3,1,'2019-06-26','2019-06-26',1,'A1316021','Acara Pelantikan Presma di TIP');

/*!40000 ALTER TABLE `riwayat_ruangan` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ruangan
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ruangan`;

CREATE TABLE `ruangan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_ruangan` varchar(100) DEFAULT NULL,
  `prodi_id` int(11) DEFAULT NULL,
  `status` int(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `ruangan` WRITE;
/*!40000 ALTER TABLE `ruangan` DISABLE KEYS */;

INSERT INTO `ruangan` (`id`, `nama_ruangan`, `prodi_id`, `status`)
VALUES
	(1,'Karet',2,1),
	(2,'Cengkeh',2,0),
	(3,'Bootstrap',1,0),
	(4,'Java',1,0),
	(5,'Javascript',1,0),
	(6,'Suspensi',3,0),
	(7,'Ban',3,0),
	(8,'Myob',4,0),
	(11,'Sono',2,0);

/*!40000 ALTER TABLE `ruangan` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
