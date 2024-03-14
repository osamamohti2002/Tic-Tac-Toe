<?php
$servername = "localhost";
$dbname = "speeltje";
$username="root";
$password="";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username, $password );
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "";
    echo "<br>";
}
catch (PDOException $e) {
    echo "connectie mislukt";
}
