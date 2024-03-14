-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2022 at 12:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `speeltje`
--

-- --------------------------------------------------------

--
-- Table structure for table `scoor`
--

CREATE TABLE `scoor` (
  `id` int(4) NOT NULL,
  `spelerid` int(4) NOT NULL,
  `hoogscoor` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scoor`
--

INSERT INTO `scoor` (`id`, `spelerid`, `hoogscoor`) VALUES
(1, 2, 18),
(2, 3, 18);

-- --------------------------------------------------------

--
-- Table structure for table `spelers`
--

CREATE TABLE `spelers` (
  `id` int(3) NOT NULL,
  `gebruikersnaam` varchar(64) NOT NULL,
  `wachtwoord` varchar(64) NOT NULL,
  `rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `spelers`
--

INSERT INTO `spelers` (`id`, `gebruikersnaam`, `wachtwoord`, `rol`) VALUES
(2, 'osama', '1234', 'USER'),
(3, 'firas', '1234', 'USER'),
(4, 'abod', '1234', 'USER');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `scoor`
--
ALTER TABLE `scoor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `spelers`
--
ALTER TABLE `spelers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `scoor`
--
ALTER TABLE `scoor`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `spelers`
--
ALTER TABLE `spelers`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
