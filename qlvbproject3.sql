-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2022 at 04:43 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlvbproject3`
--

-- --------------------------------------------------------

--
-- Table structure for table `base_document`
--

CREATE TABLE `base_document` (
  `id` int(11) NOT NULL,
  `ma_vb` varchar(10) NOT NULL,
  `ten_vb` varchar(45) NOT NULL,
  `noi_dung_vb` varchar(200) NOT NULL,
  `ma_co_quan` varchar(10) NOT NULL,
  `so_ki_hieu` varchar(25) NOT NULL,
  `chuc_vu_nguoi_ky` varchar(45) NOT NULL,
  `ten_nguoi_ky` varchar(40) NOT NULL,
  `thoi_gian_ban_hanh` datetime NOT NULL,
  `thong_tin_khac` varchar(200) NOT NULL,
  `thoi_gian_nhan` varchar(30) NOT NULL,
  `id_category` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `nguoi_gui_den` varchar(50) NOT NULL,
  `noi_gui_den` varchar(100) NOT NULL,
  `trang_thai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `base_document`
--

INSERT INTO `base_document` (`id`, `ma_vb`, `ten_vb`, `noi_dung_vb`, `ma_co_quan`, `so_ki_hieu`, `chuc_vu_nguoi_ky`, `ten_nguoi_ky`, `thoi_gian_ban_hanh`, `thong_tin_khac`, `thoi_gian_nhan`, `id_category`, `name`, `nguoi_gui_den`, `noi_gui_den`, `trang_thai`) VALUES
(7, '', 'Văn bản để biết', '', '11002', '00223', '', '', '0000-00-00 00:00:00', '', '12/28/2021 10:36 PM', 1, 'profile-1640705841493.docx', 'Nguyễn Văn N', 'Hà Nội', 1),
(8, '', 'Văn bản để biết 2', '', '11002', '00223', '', '', '0000-00-00 00:00:00', '', '12/26/2021 2:31 PM', 1, 'profile-1640748196298.docx', 'Nguyễn Văn N', 'Hà Nội', 1),
(10, '', 'Văn bản để biết', '', '11002', '00223', '', '', '0000-00-00 00:00:00', '', '12/26/2021 2:31 PM', 1, 'profile-1640751945080.docx', 'Nguyễn Văn N', 'Hà Nội', 0),
(11, '', 'Văn bản thuộc thẩm quyển UBNDTP', '', '11002', '00223', '', '', '0000-00-00 00:00:00', '', '12/26/2021 2:31 PM', 2, 'profile-1640850106947.docx', 'Nguyễn Văn G', 'Hà Nội', 0),
(12, '', 'Văn bản thuộc thẩm quyển UBNDTP', '', '11002', '00223', '', '', '0000-00-00 00:00:00', '', '12/26/2021 2:31 PM', 0, 'profile-1640852387298.docx', 'Nguyễn Văn N', 'Hà Nội', 0);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `ma` varchar(10) NOT NULL,
  `ten` varchar(45) NOT NULL,
  `list_id_chuc_vu_can_phe_duyet` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `ma`, `ten`, `list_id_chuc_vu_can_phe_duyet`) VALUES
(1, '', 'Văn bản để biết', '5,6,7,8'),
(2, '', 'VB thuộc thẩm quyền giải quyết của UBND TP', '3,4,5,6,7,8'),
(3, '', 'VB Thuộc thẩm quyền giải quyết của Văn Phòng ', '3,6,7,8'),
(4, '', 'VB không thuộc thẩm quyền giải quyết của UBND', '8,6,5');

-- --------------------------------------------------------

--
-- Table structure for table `chuc_vu`
--

CREATE TABLE `chuc_vu` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chuc_vu`
--

INSERT INTO `chuc_vu` (`id`, `name`) VALUES
(1, 'Văn Thư'),
(2, 'Lãnh đạo phòng HC-TC'),
(3, 'Chánh văn phòng'),
(4, 'Lãnh đạo UBND-TP'),
(5, 'Lãnh đạo VP UBND-TP'),
(6, 'Trưởng phòng'),
(7, 'Phó trưởng phòng'),
(8, 'Chuyên viên');

-- --------------------------------------------------------

--
-- Table structure for table `giaymoi`
--

CREATE TABLE `giaymoi` (
  `id` int(11) NOT NULL,
  `domat` varchar(45) NOT NULL,
  `dokhan` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `phong_ban`
--

CREATE TABLE `phong_ban` (
  `id` int(11) NOT NULL,
  `ma_phong` varchar(10) NOT NULL,
  `ten_phong` varchar(45) NOT NULL,
  `so_can_bo` int(11) NOT NULL,
  `dia_chi` varchar(200) NOT NULL,
  `id_truong_phong` int(11) NOT NULL,
  `sdt_phong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phong_ban`
--

INSERT INTO `phong_ban` (`id`, `ma_phong`, `ten_phong`, `so_can_bo`, `dia_chi`, `id_truong_phong`, `sdt_phong`) VALUES
(8, 'UBND-HN', 'Ủy ban nhân dân tỉnh', 10, '', 0, 372547688),
(10, 'UBND-HN1', 'Phòng HCHN', 10, 'Hai Bà Trưng - Hà Nội', 0, 372547655);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `ma_quyen` varchar(20) NOT NULL,
  `ten_quyen` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `ma_quyen`, `ten_quyen`) VALUES
(1, '', 'user'),
(2, '', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `ho_ten` varchar(45) NOT NULL,
  `goi_tinh` varchar(10) NOT NULL,
  `ngay_sinh` varchar(30) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `chuc_vu` int(4) NOT NULL,
  `id_phong_ban` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `ho_ten`, `goi_tinh`, `ngay_sinh`, `name`, `password`, `chuc_vu`, `id_phong_ban`, `email`, `role`) VALUES
(1, 'Nguyễn Văn Linh', 'Nam', '27/12/2000', 'Nguyễn Văn Linh', 'vanlinh', 0, 0, 'linh.nv187180@sis.hust.eud.vn', 2),
(20, 'Nguyễn Văn A', 'Nam', '1/8/2000', '', 'vanlinh', 5, 8, 'ldp1@gmail.com', 1),
(21, 'Nguyễn Văn B', 'Nam', '11/01/2000', '', 'vanlinh', 6, 8, 'tp1@gmail.com', 1),
(22, 'Nguyễn Văn T', 'Nam', '27/12/2000', '', 'vanlinh', 7, 8, 'ptpp1@gmail.com', 1),
(23, 'Nguyễn Văn C', 'Nam', '11/01/2000', '', 'vanlinh', 8, 8, 'cvp1@gmail.com', 1),
(24, 'Nguyễn Văn D', 'Nam', '1/01/2000', '', 'vanlinh', 1, 8, 'vtp1@gmail.com', 1),
(27, 'Nguyễn Văn A', 'Nam', '1/8/2000', '', 'vanlinh', 3, 10, 'cvpp2@gamil.com', 1),
(28, 'Nguyễn Văn T', 'Nam', '1/8/2000', '', 'vanlinh', 4, 10, 'ldubndtpp2@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_quyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vanban`
--

CREATE TABLE `vanban` (
  `id` int(11) NOT NULL,
  `thoi_gia_xu_ly` datetime NOT NULL,
  `ho_so_tai_lieu_gui_kem` varchar(200) NOT NULL,
  `do_mat` varchar(45) NOT NULL,
  `do_khan` varchar(45) NOT NULL,
  `trang_thai_xu_ly` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `xu_ly`
--

CREATE TABLE `xu_ly` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_base_document` int(11) NOT NULL,
  `thoi_gian` datetime NOT NULL,
  `chi_chu` varchar(45) NOT NULL,
  `hanh_dong` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `xu_ly`
--

INSERT INTO `xu_ly` (`id`, `id_user`, `id_base_document`, `thoi_gian`, `chi_chu`, `hanh_dong`) VALUES
(14, 20, 7, '0000-00-00 00:00:00', '', 'yes'),
(15, 21, 7, '0000-00-00 00:00:00', '', 'yes'),
(16, 22, 7, '0000-00-00 00:00:00', '', 'yes'),
(17, 23, 7, '0000-00-00 00:00:00', '', 'yes'),
(18, 20, 8, '0000-00-00 00:00:00', '', 'yes'),
(19, 21, 8, '0000-00-00 00:00:00', '', 'yes'),
(20, 22, 8, '0000-00-00 00:00:00', '', 'yes'),
(21, 23, 8, '0000-00-00 00:00:00', '', 'yes'),
(22, 20, 9, '0000-00-00 00:00:00', '', 'no');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `base_document`
--
ALTER TABLE `base_document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chuc_vu`
--
ALTER TABLE `chuc_vu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `giaymoi`
--
ALTER TABLE `giaymoi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phong_ban`
--
ALTER TABLE `phong_ban`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vanban`
--
ALTER TABLE `vanban`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xu_ly`
--
ALTER TABLE `xu_ly`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `base_document`
--
ALTER TABLE `base_document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `chuc_vu`
--
ALTER TABLE `chuc_vu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `giaymoi`
--
ALTER TABLE `giaymoi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `phong_ban`
--
ALTER TABLE `phong_ban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vanban`
--
ALTER TABLE `vanban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `xu_ly`
--
ALTER TABLE `xu_ly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
