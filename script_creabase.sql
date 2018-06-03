-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  Dim 03 juin 2018 à 13:12
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `bd_projetweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `Evenements`
--

CREATE TABLE `Evenements` (
  `idE` int(11) NOT NULL,
  `acroE` varchar(10) NOT NULL,
  `nomE` varchar(128) NOT NULL,
  `lieuE` varchar(256) NOT NULL,
  `descE` varchar(512) NOT NULL,
  `dateEvt` date NOT NULL,
  `dateOE` date NOT NULL,
  `dateCE` date NOT NULL,
  `nbMaxPartE` int(5) NOT NULL,
  `etuOk` tinyint(1) NOT NULL,
  `dipOk` tinyint(1) NOT NULL,
  `proOk` tinyint(1) NOT NULL,
  `adminOk` tinyint(1) NOT NULL,
  `ensOk` tinyint(1) NOT NULL,
  `accOk` tinyint(1) NOT NULL,
  `nbAccEtu` int(11) NOT NULL DEFAULT '0',
  `nbAccDip` int(11) NOT NULL DEFAULT '0',
  `nbAccPro` int(11) NOT NULL DEFAULT '0',
  `nbAccAdmin` int(11) NOT NULL DEFAULT '0',
  `nbAccEns` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Evenements`
--

INSERT INTO `Evenements` (`idE`, `acroE`, `nomE`, `lieuE`, `descE`, `dateEvt`, `dateOE`, `dateCE`, `nbMaxPartE`, `etuOk`, `dipOk`, `proOk`, `adminOk`, `ensOk`, `accOk`, `nbAccEtu`, `nbAccDip`, `nbAccPro`, `nbAccAdmin`, `nbAccEns`) VALUES
(1, 'TEST 1', 'PREMIER TEST, OUI TOUT PREMIER', 'UNIVERSITE TOULOUSE III PAUL SABATIER', 'Forum de Test !', '2018-05-26', '2018-05-21', '2018-05-23', 100, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0),
(4, 'al3c', 'AL3C 2018', 'UPS', 'Journée de présentation des projets', '2018-06-18', '2018-05-27', '2018-06-17', 300, 1, 0, 0, 1, 0, 1, 0, 0, 0, 5, 0);

-- --------------------------------------------------------

--
-- Structure de la table `Participants`
--

CREATE TABLE `Participants` (
  `idP` int(6) NOT NULL,
  `nomP` varchar(64) NOT NULL,
  `prenomP` varchar(64) NOT NULL,
  `mailP` varchar(128) NOT NULL,
  `telP` char(10) NOT NULL,
  `typeP` varchar(64) NOT NULL,
  `mdpP` varchar(32) DEFAULT NULL,
  `refP` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Participants`
--

INSERT INTO `Participants` (`idP`, `nomP`, `prenomP`, `mailP`, `telP`, `typeP`, `mdpP`, `refP`) VALUES
(1, 'Detrier', 'Jonathan', 'j.detrier@laposte.net', '0638795025', 'Etudiant', 'Jonathan', NULL),
(2, 'ROUX', 'Perrine', 'Perrine.roux31@gmail.com', '0879876564', 'Eleve', 'truc', 1),
(3, 'TEYSSIE', 'Cédric', 'blablabla@gmail.com', '0710101010', 'Enseignant', 'truc', NULL),
(10, 'test', 'test', 'test@test.xyz', '0433221100', 'Etudiant', NULL, NULL),
(13, 'pastel', 'lechat', 'pastel.lechat@tlse.mail.com', '0444332288', 'Professionnel', NULL, NULL),
-- --------------------------------------------------------

--
-- Structure de la table `Participer`
--

CREATE TABLE `Participer` (
  `idE` int(6) NOT NULL,
  `idP` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Participer`
--

INSERT INTO `Participer` (`idE`, `idP`) VALUES
(1, 1),
(4, 1),
(1, 2),
(1, 3),
(4, 13);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Evenements`
--
ALTER TABLE `Evenements`
  ADD PRIMARY KEY (`idE`);

--
-- Index pour la table `Participants`
--
ALTER TABLE `Participants`
  ADD PRIMARY KEY (`idP`),
  ADD KEY `refP_Participants_idP_Participants` (`refP`);

--
-- Index pour la table `Participer`
--
ALTER TABLE `Participer`
  ADD PRIMARY KEY (`idE`,`idP`),
  ADD KEY `idP_2` (`idP`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Evenements`
--
ALTER TABLE `Evenements`
  MODIFY `idE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Participants`
--
ALTER TABLE `Participants`
  MODIFY `idP` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Participants`
--
ALTER TABLE `Participants`
  ADD CONSTRAINT `refP_Participants_idP_Participants` FOREIGN KEY (`refP`) REFERENCES `Participants` (`idP`);

--
-- Contraintes pour la table `Participer`
--
ALTER TABLE `Participer`
  ADD CONSTRAINT `idE_Participer_idE_Evenements` FOREIGN KEY (`idE`) REFERENCES `Evenements` (`idE`),
  ADD CONSTRAINT `idP_Participer_idP_Participants` FOREIGN KEY (`idP`) REFERENCES `Participants` (`idP`);
