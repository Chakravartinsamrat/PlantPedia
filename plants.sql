-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2024 at 08:08 PM
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
-- Table structure for table `contactdetails`
--

CREATE TABLE `contactdetails` (
  `id` int(2) NOT NULL,
  `cname` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactdetails`
--

INSERT INTO `contactdetails` (`id`, `cname`, `email`, `message`) VALUES
(1, 'Piyush Chakarborthy', 'piyushchakarvorthy@gmail.com', 'Hi this the first entry to the database'),
(2, 'piyush', 'asfa@gmail.com', 'asdfasdf'),
(3, 'piyush', 'piyushchakarvorthy@gmail.com', 'asfadgadsfasdf');

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
  `duration` varchar(15) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plantdetails`
--

INSERT INTO `plantdetails` (`id`, `name`, `scientific_name`, `adopted_tech`, `avg_yield`, `edible_part`, `family`, `nutrition`, `pests`, `planting_material`, `pollination`, `source`, `variety`, `vernacular_name`, `flowering`, `fruiting`, `duration`, `image`) VALUES
(1, 'Cauliflower', 'Brassica oleracea', 'Organic farming', '15-20 tons/acre', 'Head', 'Brassicaceae', 'Vitamin C, Vitamin K, Folate, Fiber', 'Aphids, Cabbage worms', 'Seeds, Transplants', 'Self-Pollinating', 'Local nurseries', 'Snowball, Brocoverde, Romanesco', 'Phool Gobi', '55-65 days', '70-85 days', '75-120 days', '1717592870558.jpg'),
(2, 'Tomato', 'Solanum Lycopersicm', 'Organic Farming', '20-30 tons/acre', '20-30 tons/acre', 'Solanaceae', 'Vitamin C, Vitamin K, Potassium', 'Aphids, Whiteflies', 'Seeds, Seedlings', 'Self-Polinating', 'Local Farms', 'Roma, Cherry, Beefsteak', 'Tamatar', '30-40 Days', '70-80 Days', '120 Days', '1717593846985.jpg'),
(3, 'Potato', 'Solanum tuberosum', 'Conventional farming', '15-20 tons/acre', 'Roots', 'Solanaceae', 'Vitamin C, Vitamin B6, Potassium', 'Colorado Potato Beetle, Aphids', 'Seed tubers', 'Self-pollinating', 'Local Farms, Local Markets', 'Russet, Yukon Gold, Red Pontiac', 'Aloo', '60-70 Days', '80-90 Days', '120 Days ', '1717593964418.jpg'),
(4, 'Carrot', 'Daucus carota', 'Organic Farming', '8-12 tons/acre', 'Roots', 'Apiaceae', 'Vitamin A, Vitamin K, Fiber', 'Carrot Fly, Aphids', 'Seeds', 'Self-Polinating', 'Local Farms', 'Nantes, Imperator, Danvers', 'Gajar', '60-70Days ', '80-90Days ', '120-130Days', '1717660622708.jpg'),
(5, 'Broccoli ', 'Brassica oleracea ', 'Conventional farming', '2-4 tons/acre ', 'Florets ', 'Brassicaceae', 'Vitamin C, Vitamin K, Folate', 'Cabbage worms, Aphids', 'Seeds ', 'External Pollination', 'Local Markets', 'Calabrese, Romanesco ', 'Hari phool gobi', '50-60 days', '80-90Days', '90-100Days', '1717660818402.jpg'),
(6, 'Onion ', 'Allium cepa ', 'Conventional farming', '15-20 tons/acre ', 'Fleshy leaves ', 'Amaryllidacea', 'Vitamin C, Folate, Fiber ', 'Onion fly, Thripd ', 'Seedlings', 'Wind Pollination', 'Local market', 'Yellow Onion, Red Onion, White Onion', 'Pyaz', '50-60Days ', '80-90Days ', '120-130Days', '1717660988492.jpg'),
(7, 'Eggplant', 'Solanum melongena ', 'Conventional farming', '10-15 tons/acre', 'Placenta', 'Solanaceae', 'Vitamin C, Vitamin K, Fiber', 'Flea beetles, Aphids', 'Seedlings', 'Self-Polinating', 'Local market', 'Italian, Japanese, Globe', 'Baingan', '45-50 days', '70-80 Days', '100-110 days', '1717663233388.jpg'),
(8, 'Spinach', 'Spinacia oleracea', 'Hydroponic farming', '3-4 tons/acre', 'Leaves', 'Amaranthaceae', 'Vitamin A, Vitamin C, Iron, Calcium', 'Leaf Miners, Aphids', 'Seeds', 'Wind Pollination', 'Greenhouses, Local Farms', 'Savoy, Semi-Savoy, Smooth-Leaf', 'Palak', '30-35 days', 'N/A', '40-50 days', '1717663415356.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `retaildetails`
--

CREATE TABLE `retaildetails` (
  `rid` int(10) NOT NULL,
  `region` varchar(50) NOT NULL,
  `exportquantity` varchar(50) NOT NULL,
  `topcountry` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `retaildetails`
--

INSERT INTO `retaildetails` (`rid`, `region`, `exportquantity`, `topcountry`) VALUES
(1, 'India- Asia Pacific', '721.85 Metric Tones', 'Bhutan'),
(2, 'India- Asia Pacific', '174,600 metric tons', 'Bangladesh, Nepal'),
(3, 'India- Asia Pacific', '474000 metric tons', 'The Netherlands'),
(4, 'India- Asia Pacific', '1244 metric tones', 'United Arab Emirates'),
(5, 'India- Asia Pacific', '128 Metric Tons', 'USA'),
(6, 'India- Asia Pacific', '666408 Metric Tons', 'USA'),
(7, 'India- Asia Pacific', '11428763 Metric Tons', 'USA'),
(8, 'India- Asia Pacific', '34521234 Metric Tons', 'Japan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactdetails`
--
ALTER TABLE `contactdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plantdetails`
--
ALTER TABLE `plantdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `retaildetails`
--
ALTER TABLE `retaildetails`
  ADD KEY `r` (`rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactdetails`
--
ALTER TABLE `contactdetails`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `plantdetails`
--
ALTER TABLE `plantdetails`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `retaildetails`
--
ALTER TABLE `retaildetails`
  ADD CONSTRAINT `r` FOREIGN KEY (`rid`) REFERENCES `plantdetails` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
