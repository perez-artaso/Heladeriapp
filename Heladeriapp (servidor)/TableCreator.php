<?php

require_once('./BDCon.php');

class TableCreator {
    public static function CreateTable() {
        $BDCon = BDCon::NewBDCon();
        $queryString = 'CREATE TABLE helados (
            id INT AUTO_INCREMENT,
            sabor VARCHAR(255) NOT NULL,
            tipo VARCHAR(255) NOT NULL,
            kilos INT NOT NULL,
            foto VARCHAR(255),
            PRIMARY KEY (id)
        )';
        $query = $BDCon->SetQuery($queryString);
        try {
            $query->execute();
            return true;
        } catch (Exception $e) {
            echo($e);
            return false;
        }
    }
}