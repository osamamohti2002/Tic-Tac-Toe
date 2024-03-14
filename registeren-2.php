<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>

<?php
$id = NULL;
$gebruikersnaam= $_POST['gebruikersnaam'];
$wachtwoord= $_POST['wachtwoord'];

require_once ("connectie.php");
global $conn;
$sql = $conn->prepare("INSERT INTO spelers VALUES (:id , :gebruikersnaam , :wachtwoord , 'USER' )");
$sql->bindParam(":id" , $id );
$sql->bindParam(":gebruikersnaam" , $gebruikersnaam);
$sql->bindParam(":wachtwoord" , $wachtwoord);
$sql->execute();
echo"je bent geregisteerd";

?>

<h1 class="h1geregisteerd">je geregisteerd </h1>
<button><a href="inloggen-1.php">Inloggen</a></button>
</body>
</html>



