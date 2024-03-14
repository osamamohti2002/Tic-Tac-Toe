<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>Aiplayer</title>
    <link rel="stylesheet" href="main.css">


</head>

<body>

<div class="navbar">
    <h3 style="color: white;">Welkom bij ons speeltje, selecteer een vierkant om te beginnen</h3>
    <br>
</div>
<div class="page">
    <div class="main">
        <p class="heading">
            Player 1:
        </p>
        <p class="heading" id="wins"></p>
        <p class="heading" id="numOfWins"></p>

    </div>
    <div id="grid" class="container">
        <div  onclick="startGame(this.id)" class="box fade-in" id="b1"></div>
        <div  onclick="startGame(this.id)" class="box" id="b2"></div>
        <div  onclick="startGame(this.id)" class="box" id="b3"></div>
        <div  onclick="startGame(this.id)" class="box" id="b4"></div>
        <div  onclick="startGame(this.id)" class="box" id="b5"></div>
        <div  onclick="startGame(this.id)" class="box" id="b6"></div>
        <div  onclick="startGame(this.id)" class="box" id="b7"></div>
        <div  onclick="startGame(this.id)" class="box" id="b8"></div>
        <div  onclick="startGame(this.id)" class="box" id="b9"></div>
    </div>
    <div class="sidebarright">
        <p class="heading">AI</p>
        <p class="heading" id="aiwins"></p>
        <p class="heading" id="numOfAiWins"></p>
    </div>
</div>
<script src="ai.js"></script>
</body>
</html>
