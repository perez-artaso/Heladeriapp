<?php

require_once('./BDCon.php');

class IceCreamManager {

    public static function CreateIceCream($sabor, $tipo, $kilos) {
        $BDCon = BDCon::NewBDCon();
        $queryString = "INSERT INTO helados (sabor, tipo, kilos) VALUES (?,?,?)";
    
        $query = $BDCon->SetQuery($queryString);

        $query->bindValue(1, $sabor, PDO::PARAM_STR);
        $query->bindValue(2, $tipo, PDO::PARAM_STR);
        $query->bindValue(3, $kilos, PDO::PARAM_INT);

        try {
            $query->execute();
            return true;
        } catch (Exception $e) {
            echo($e);
            return false;
        }
    }

    public static function DeleteIceCream($id) {
        $BDCon = BDCon::NewBDCon();
        $queryString = "DELETE FROM helados WHERE id = ?";
    
        $query = $BDCon->SetQuery($queryString);

        $query->bindValue(1, $id, PDO::PARAM_INT);

        try {
            $query->execute();
            return true;
        } catch (Exception $e) {
            echo($e);
            return false;
        }
    }

    public static function UpdateIceCream($id, $sabor, $tipo, $kilos) {
        $BDCon = BDCon::NewBDCon();
        $queryString = "UPDATE helados SET sabor = ?, tipo = ?, kilos = ? WHERE id = ?";
    
        $query = $BDCon->SetQuery($queryString);

        $query->bindValue(1, $sabor, PDO::PARAM_STR);
        $query->bindValue(2, $tipo, PDO::PARAM_STR);
        $query->bindValue(3, $kilos, PDO::PARAM_INT);
        $query->bindValue(4, $id, PDO::PARAM_INT);
        
        try {
            $query->execute();
            return true;
        } catch (Exception $e) {
            echo($e);
            return false;
        }
    }

    public static function ReadIceCreams() {
        $BDCon = BDCon::NewBDCon();
        $queryString = "SELECT * FROM helados";
    
        $query = $BDCon->SetQuery($queryString);
        
        try {
            $query->execute();
            return json_encode($query->fetchAll());
        } catch (Exception $e) {
            echo($e);
            return false;
        }
    }



}