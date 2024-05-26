-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2024 at 06:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `plants`
--

-- --------------------------------------------------------

--
-- Table structure for table `plantdetails`
--

CREATE TABLE `plantdetails` (
  `id` int(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `scientific_name` varchar(50) NOT NULL,
  `adopted_tech` text DEFAULT NULL,
  `avg_yield` varchar(50) DEFAULT NULL,
  `edible_part` varchar(50) DEFAULT NULL,
  `family` varchar(50) NOT NULL,
  `nutrition` varchar(50) DEFAULT NULL,
  `pests` text DEFAULT NULL,
  `planting_material` varchar(50) DEFAULT NULL,
  `pollination` varchar(50) NOT NULL,
  `source` text NOT NULL,
  `variety` text DEFAULT NULL,
  `vernacular_name` text DEFAULT NULL,
  `flowering` varchar(15) DEFAULT NULL,
  `fruiting` varchar(15) DEFAULT NULL,
  `duration` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plantdetails`
--

INSERT INTO `plantdetails` (`id`, `name`, `scientific_name`, `adopted_tech`, `avg_yield`, `edible_part`, `family`, `nutrition`, `pests`, `planting_material`, `pollination`, `source`, `variety`, `vernacular_name`, `flowering`, `fruiting`, `duration`) VALUES
(1, 'Tomato', 'Solanum Lycopersicm', 'Organic Farming', '20-30 tons/acre', 'Fruit', 'Solanaceae', 'Vitamin C, Vitamin K, Potassium', 'Aphids, Whiteflies', 'Seeds, Seedlings', 'Self-Polinating', 'Local Farms', 'Roma, Cherry, Beefsteak', 'Tamatar', '30-40 Days', '70-80 Days', '120 Days'),
(2, 'Potato', 'Solanum tuberosum', 'Conventional farming', '15-20 tons/acre', 'Roots', 'Solanaceae', 'Vitamin C, Vitamin B6, Potassium', 'Colorado Potato Beetle, Aphids', 'Seed tubers', 'Self-pollinating', 'Local Farms, Local Markets', 'Russet, Yukon Gold, Red Pontiac', 'Aloo', '60-70 Days', '80-90 Days', '120 Days');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `plantdetails`
--
ALTER TABLE `plantdetails`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `plantdetails`
--
ALTER TABLE `plantdetails`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
