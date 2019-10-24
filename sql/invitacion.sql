-- phpMyAdmin SQL Dump
-- version 4.6.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 14, 2019 at 10:39 PM
-- Server version: 5.7.13-log
-- PHP Version: 5.6.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



--
-- Database: `c1490387_berlina`
--

-- --------------------------------------------------------

--
-- Table structure for table `invitacion`
--

CREATE TABLE `invitacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `guest_nombre` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `guest_apellido` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `guest_mensaje` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `guest_celu` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `pagado` enum('no','si') COLLATE utf8_unicode_ci NOT NULL,
  `retiro` enum('no','si') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invitacion`
--

INSERT INTO `invitacion` (`id`, `nombre`, `apellido`, `email`, `guest_nombre`, `guest_apellido`, `guest_mensaje`, `guest_celu`, `pagado`, `retiro`) VALUES
(1, 'Rafael', 'Defelice', 'defelicerafael@gmail.com', 'Mariano', 'Redonde', 'reddonde@gmail.com', '', 'no', 'no'),
(9, 'Rafael', 'Defelice', 'defelicerafael@gmail.com', 'Flopu', '', 'Te amo', '1158373644', 'no', 'no'),
(10, 'Rafael', 'defe', 'defe@gmail.com', 'Flopu', '', 'Te amo', '154437099', 'no', 'no'),
(11, 'rafael', '', '', '', '', '', '', 'no', 'no'),
(12, 'Rafa', 'Defe', 'defelice@gmai.com', 'Flo', '', 'Te amo', '1544370599', 'no', 'no'),
(13, 'rafa', 'De', 'De@gmail.com', 'Caqui', '', 'Hola Caco', '1544370599', 'no', 'no');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invitacion`
--
ALTER TABLE `invitacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invitacion`
--
ALTER TABLE `invitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
