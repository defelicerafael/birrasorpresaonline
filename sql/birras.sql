-- phpMyAdmin SQL Dump
-- version 4.6.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 14, 2019 at 10:26 PM
-- Server version: 5.7.13-log
-- PHP Version: 5.6.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


--
-- Database: `c1490387_berlina`
--

-- --------------------------------------------------------

--
-- Table structure for table `birras`
--

CREATE TABLE `birras` (
  `id` int(11) NOT NULL,
  `url` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `alt` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `link` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `texto` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `mostrar` enum('si','no') COLLATE utf8_unicode_ci NOT NULL,
  `orden` int(2) NOT NULL,
  `resumen` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `birras`
--

INSERT INTO `birras` (`id`, `url`, `alt`, `link`, `texto`, `mostrar`, `orden`, `resumen`) VALUES
(1, 'img/home/birras/carta_berlina_amber_ale.jpg', 'AMBER ALE', '', '', 'si', 1, ''),
(2, 'img/home/birras/carta_berlina_baguales_belgian_blonde.jpg', 'BAGUALES BELGUIAN BLONDE', '', '', 'si', 3, ''),
(13, 'img/home/birras/carta_berlina_brown_mild_ale.jpg', 'BROWN MILD ALE', '', '', 'si', 3, ''),
(14, 'img/home/birras/carta_berlina_cielo_ipa.jpg', 'CIELO IPA', '', '', 'si', 3, ''),
(15, 'img/home/birras/carta_berlina_colonia_suiza_strong_golden_ale.jpg', 'COLONIA SUIZA STRONG GOLDEN ALE', '', '', 'si', 3, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `birras`
--
ALTER TABLE `birras`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `birras`
--
ALTER TABLE `birras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
