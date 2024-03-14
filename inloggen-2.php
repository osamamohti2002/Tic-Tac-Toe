<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>inloggen-2</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>

<div class="kiezen">
    <form action="inloggen-2.php">
    <div class="box1"><button><a href="multyplayer.php">Multyplayer</a></button></div>
    <div class="box2"><h1>Welkom bij tic tac toe spelletje</h1></div>
    <div class="box3"><button><a href="aiplayer.php">tegen computer spellen</a></button></div>
</div>

<?php
require_once ("connectie.php");
global $conn;
$cookie_name = $_GET["gebruikersnaam"];
setcookie($cookie_name,  time() + (86400 * 30), "/");

if(!isset($_COOKIE[$cookie_name])) {
    echo  $cookie_name;
} else {
    echo "welkome " . $cookie_name ."<br>";
}
session_start();
if (isset($_POST['inloggen'])){
    $login = $conn->prepare("SELECT * FROM spelers WHERE gebruikersnaam = :gebruikersnaam AND wachtwoord = :wachtwoord");
    $login->bindParam("gebruikersnaam" , $_POST['gebruikersnaam']);
    $login->bindParam("wachtwoord" , $_POST['wachtwoord']);
    $login->execute();
    if ($login->rowCount()===1){
        $user= $login->fetchObject();
        $_SESSION['user'] = $user;
        echo "je bent ingelogd ";
    }else{
        echo "de wachtwoord is onjuist<br>";
        echo "maak een account aan <a href='registeren-1.php' >";
    }

}

if (empty($_POST['gebruikersnaam'])){
    echo "<h1 class='h1geregisteerd'><a href='inloggen-1.php'> vul je gebruiker naam in </h1></a>" ;
}


?>
</body>
</html>