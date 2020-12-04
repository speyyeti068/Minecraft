var canvas = new fabric.Canvas("myCanvas");

var playerX = 10;

var playerY = 10;

var blockImageWidth = 30;

var blockImageHeight = 30;

var playerObject = "";

var blockImageObject = "";

function playerUpdate(){
    console.log("player update function is being called");

    fabric.Image.fromURL("player.png", function(img1){
        console.log(img1);

        playerObject = img1;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);

        playerObject.set({
            top: playerY, left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(img1){
        blockImageObject = img1;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);

        blockImageObject.set({
            top: playerY, left: playerX
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80"){
        console.log("shift and p are pressed together");

        blockImageHeight = blockImageHeight + 10;
        blockImageWidth = blockImageWidth + 10;

        document.getElementById("height").innerHTML = blockImageHeight;
        document.getElementById("width").innerHTML = blockImageWidth;
    }

    if (e.shiftKey == true && keyPressed == "77"){
        console.log("shift and m are pressed together");

        blockImageHeight = blockImageHeight - 10;
        blockImageWidth = blockImageWidth - 10;

        document.getElementById("height").innerHTML = blockImageHeight;
        document.getElementById("width").innerHTML = blockImageWidth;
    }

    if (keyPressed == "38"){
        console.log("up");

        up();
    }
    if (keyPressed == "37"){
        console.log("left");

        left();
    }
    if (keyPressed == "39"){
        console.log("right");

        right();
    }
    if (keyPressed == "40"){
        console.log("down");

        down();
    }

    if (keyPressed == "87"){
        newImage("wall.jpg");

        console.log("w is pressed")
    }

    if (keyPressed == "71"){
        newImage("ground.png");

        console.log("g is pressed")
    }
    
    if (keyPressed == "76"){
        newImage("light_green.png");

        console.log("l is pressed")
    }

    if (keyPressed == "84"){
        newImage("trunk.jpg");

        console.log("t is pressed")
    }

    if (keyPressed == "82"){
        newImage("roof.jpg");

        console.log("r is pressed")
    }

    if (keyPressed == "89"){
        newImage("yellow_wall.png");

        console.log("y is pressed")
    }

    if (keyPressed == "68"){
        newImage("dark_green.png");

        console.log("d is pressed")
    }

    if (keyPressed == "85"){
        newImage("unique.png");

        console.log("u is pressed")
    }

    if (keyPressed == "67"){
        newImage("cloud.jpg");

        console.log("c is pressed")
    }
}

function up(){
    console.log("up function is being called");

    if (playerY>=10){
        playerY = playerY - blockImageHeight;
        console.log("log image height " + blockImageHeight);

        console.log("player x: " + playerX);
        console.log("player y: " + playerY);

        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down(){
    console.log("down function is being called");

    if (playerY<=460){
        playerY = playerY + blockImageHeight;
        console.log("log image height " + blockImageHeight);

        console.log("player x: " + playerX);
        console.log("player y: " + playerY);

        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left(){
    console.log("left function is being called");

    if (playerX>=0){
        playerX = playerX - blockImageWidth;
        console.log("log image width " + blockImageWidth);

        console.log("player x: " + playerX);
        console.log("player y: " + playerY);

        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right(){
    console.log("right function is being called");

    if (playerX<=750){
        playerX = playerX + blockImageWidth;
        console.log("log image width " + blockImageWidth);

        console.log("player x: " + playerX);
        console.log("player y: " + playerY);

        canvas.remove(playerObject);
        playerUpdate();
    }
}