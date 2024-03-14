<?php



$hoogscoor = $_GET['hoogscoor'];
//create a PDO connection with try and catch
try {
    $db = new PDO("mysql:host=localhost;dbname=speeltje", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Failed to connect to the database: " . $e->getMessage();
}
//insert resultaat into highscore table with prepared statements
$stmt = $db->prepare("UPDATE scoor SET hoogscoor = IFNULL(hoogscoor, 0) + 1");
$stmt->bindParam(':hogescoor', $hogescoor);
$stmt->execute();
