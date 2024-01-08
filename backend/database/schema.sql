-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rayj
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidates`
--

DROP TABLE IF EXISTS `candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidates` (
  `Users_idUsers` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  `Status` varchar(80) NOT NULL,
  PRIMARY KEY (`Users_idUsers`,`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Offers1_idx` (`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `offers` (`id_Offers`),
  CONSTRAINT `fk_Users_has_Offers_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id_Categories` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_Categories`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `Users_idUsers` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  PRIMARY KEY (`Users_idUsers`,`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Offers2_idx` (`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Users2_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Offers_Offers2` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `offers` (`id_Offers`),
  CONSTRAINT `fk_Users_has_Offers_Users2` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hardskills`
--

DROP TABLE IF EXISTS `hardskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hardskills` (
  `id_Hardskills` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_Hardskills`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hardskills`
--

LOCK TABLES `hardskills` WRITE;
/*!40000 ALTER TABLE `hardskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `hardskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hardskills_offers`
--

DROP TABLE IF EXISTS `hardskills_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hardskills_offers` (
  `Hardskills_id_Hardskills` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  PRIMARY KEY (`Hardskills_id_Hardskills`,`Offers_Id_offers`),
  KEY `fk_Hardskills_has_Offers_Offers1_idx` (`Offers_Id_offers`),
  KEY `fk_Hardskills_has_Offers_Hardskills1_idx` (`Hardskills_id_Hardskills`),
  CONSTRAINT `fk_Hardskills_has_Offers_Hardskills1` FOREIGN KEY (`Hardskills_id_Hardskills`) REFERENCES `hardskills` (`id_Hardskills`),
  CONSTRAINT `fk_Hardskills_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `offers` (`id_Offers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hardskills_offers`
--

LOCK TABLES `hardskills_offers` WRITE;
/*!40000 ALTER TABLE `hardskills_offers` DISABLE KEYS */;
/*!40000 ALTER TABLE `hardskills_offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `id_Offers` int NOT NULL,
  `Date_of_publication` datetime NOT NULL,
  `Post_title` varchar(80) NOT NULL,
  `Description` text NOT NULL,
  `Training` tinyint DEFAULT NULL,
  `Level` varchar(45) DEFAULT NULL,
  `Domaine` varchar(85) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Users_idUsers` int NOT NULL,
  PRIMARY KEY (`id_Offers`,`Users_idUsers`),
  KEY `fk_Offers_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Offers_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers_categories`
--

DROP TABLE IF EXISTS `offers_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers_categories` (
  `Offers_Id_offers` int NOT NULL,
  `Categories_idCategories` int NOT NULL,
  PRIMARY KEY (`Offers_Id_offers`,`Categories_idCategories`),
  KEY `fk_Offers_has_Categories_Categories1_idx` (`Categories_idCategories`),
  KEY `fk_Offers_has_Categories_Offers1_idx` (`Offers_Id_offers`),
  CONSTRAINT `fk_Offers_has_Categories_Categories1` FOREIGN KEY (`Categories_idCategories`) REFERENCES `categories` (`id_Categories`),
  CONSTRAINT `fk_Offers_has_Categories_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `offers` (`id_Offers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers_categories`
--

LOCK TABLES `offers_categories` WRITE;
/*!40000 ALTER TABLE `offers_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `offers_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `softskills`
--

DROP TABLE IF EXISTS `softskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `softskills` (
  `id_Softskills` int NOT NULL,
  `Name` varchar(85) NOT NULL,
  PRIMARY KEY (`id_Softskills`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `softskills`
--

LOCK TABLES `softskills` WRITE;
/*!40000 ALTER TABLE `softskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `softskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `softskills_offers`
--

DROP TABLE IF EXISTS `softskills_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `softskills_offers` (
  `Softskills_id_Softskills` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  PRIMARY KEY (`Softskills_id_Softskills`,`Offers_Id_offers`),
  KEY `fk_Softskills_has_Offers_Offers1_idx` (`Offers_Id_offers`),
  KEY `fk_Softskills_has_Offers_Softskills1_idx` (`Softskills_id_Softskills`),
  CONSTRAINT `fk_Softskills_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `offers` (`id_Offers`),
  CONSTRAINT `fk_Softskills_has_Offers_Softskills1` FOREIGN KEY (`Softskills_id_Softskills`) REFERENCES `softskills` (`id_Softskills`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `softskills_offers`
--

LOCK TABLES `softskills_offers` WRITE;
/*!40000 ALTER TABLE `softskills_offers` DISABLE KEYS */;
/*!40000 ALTER TABLE `softskills_offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_Users` int NOT NULL AUTO_INCREMENT,
  `Lastname` varchar(45) NOT NULL,
  `Firstname` varchar(45) NOT NULL,
  `Martricule` varchar(85) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Phone` int NOT NULL,
  `Seniority` datetime NOT NULL,
  `Admin` tinyint NOT NULL,
  PRIMARY KEY (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_hardskills`
--

DROP TABLE IF EXISTS `users_hardskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_hardskills` (
  `Hardskills_id_Hardskills` int NOT NULL,
  `Users_idUsers` int NOT NULL,
  PRIMARY KEY (`Hardskills_id_Hardskills`,`Users_idUsers`),
  KEY `fk_Hardskills_has_Users_Users1_idx` (`Users_idUsers`),
  KEY `fk_Hardskills_has_Users_Hardskills1_idx` (`Hardskills_id_Hardskills`),
  CONSTRAINT `fk_Hardskills_has_Users_Hardskills1` FOREIGN KEY (`Hardskills_id_Hardskills`) REFERENCES `hardskills` (`id_Hardskills`),
  CONSTRAINT `fk_Hardskills_has_Users_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_hardskills`
--

LOCK TABLES `users_hardskills` WRITE;
/*!40000 ALTER TABLE `users_hardskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_hardskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_softskills`
--

DROP TABLE IF EXISTS `users_softskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_softskills` (
  `Users_idUsers` int NOT NULL,
  `Softskills_id_Softskills` int NOT NULL,
  PRIMARY KEY (`Users_idUsers`,`Softskills_id_Softskills`),
  KEY `fk_Users_has_Softskills_Softskills1_idx` (`Softskills_id_Softskills`),
  KEY `fk_Users_has_Softskills_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Softskills_Softskills1` FOREIGN KEY (`Softskills_id_Softskills`) REFERENCES `softskills` (`id_Softskills`),
  CONSTRAINT `fk_Users_has_Softskills_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_softskills`
--

LOCK TABLES `users_softskills` WRITE;
/*!40000 ALTER TABLE `users_softskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_softskills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-04 15:08:37
