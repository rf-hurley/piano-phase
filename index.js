// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [230,220,190];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 5 });

const ball0 = {
    x: 280,
    y: 30,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[0],
    soundLength: 200,
} 

const ball1 = {
    x: 260,
    y: 400,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[3],
    soundLength: 500,
} 

const ball2 = {
    x: 240,
    y: 90,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[1],
    soundLength: 500,
} 

const ball3 = {
    x: 220,
    y: 420,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[4],
    soundLength: 500,
} 

const ball4 = {
    x: 200,
    y: 150,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[2],
    soundLength: 500,
} 

const ball5 = {
    x: 180,
    y: 440,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[3],
    soundLength: 500,
} 

const ball6 = {
    x: 160,
    y: 210,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[0],
    soundLength: 500,
} 

const ball7 = {
    x: 140,
    y: 460,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[4],
    soundLength: 500,
} 

const ball8 = {
    x: 120,
    y: 270,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[1],
    soundLength: 500,
} 

const ball9 = {
    x: 100,
    y: 480,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[3],
    soundLength: 500,
} 

const ball10 = {
    x: 80,
    y: 330,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[2],
    soundLength: 500,
} 

const ball11 = {
    x: 60,
    y: 500,
    size: 40,
    speed: 5,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[4],
    soundLength: 500,
} 

const item0 = {
    x: 280,
    y: 30,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[0],
    soundLength: 200,
} 

const item1 = {
    x: 260,
    y: 400,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[3],
    soundLength: 500,
} 

const item2 = {
    x: 240,
    y: 90,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[1],
    soundLength: 500,
} 

const item3 = {
    x: 220,
    y: 420,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[4],
    soundLength: 500,
} 

const item4 = {
    x: 200,
    y: 150,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[2],
    soundLength: 500,
} 

const item5 = {
    x: 180,
    y: 440,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[3],
    soundLength: 500,
} 

const item6 = {
    x: 160,
    y: 210,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[0],
    soundLength: 500,
} 

const item7 = {
    x: 140,
    y: 460,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[4],
    soundLength: 500,
} 

const item8 = {
    x: 120,
    y: 270,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[1],
    soundLength: 500,
} 

const item9 = {
    x: 100,
    y: 480,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[3],
    soundLength: 500,
} 

const item10 = {
    x: 80,
    y: 330,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[2],
    soundLength: 500,
} 

const item11 = {
    x: 60,
    y: 500,
    size: 40,
    speed: 6,
    fillColor: [1,42,175],
    strokeColor: [1,88,175],
    ballStrokeWeight: 2,
    Sound: sounds[4],
    soundLength: 500,
} 

const balls = [ball0, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11];
const items = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11];

const leftBorder = {
    x1: 30,
    y1: 0,
    x2: 30,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

const middleBorder = {
    x1: 300,
    y1: 0,
    x2: 300,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

const middleBorder2 = {
    x1: 310,
    y1: 0,
    x2: 310,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

const rightBorder = {
    x1: 580,
    y1: 0,
    x2: 580,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    ball0.Sound = sounds[0];
    ball1.Sound = sounds[3];
    ball2.Sound = sounds[1];
    ball3.Sound = sounds[4];
    ball4.Sound = sounds[2];
    ball5.Sound = sounds[3];
    ball6.Sound = sounds[0];
    ball7.Sound = sounds[4];
    ball8.Sound = sounds[1];
    ball9.Sound = sounds[3];
    ball10.Sound = sounds[2];
    ball11.Sound = sounds[4];
    item0.Sound = sounds[0];
    item1.Sound = sounds[3];
    item2.Sound = sounds[1];
    item3.Sound = sounds[4];
    item4.Sound = sounds[2];
    item5.Sound = sounds[3];
    item6.Sound = sounds[0];
    item7.Sound = sounds[4];
    item8.Sound = sounds[1];
    item9.Sound = sounds[3];
    item10.Sound = sounds[2];
    item11.Sound = sounds[4];

    // ball.Sound = sounds[i];

    for(let i = 0; i < sounds.length; i++){
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}

function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    items.forEach((item) => {
        updateBall2(item);
        displayBall2(item);
    })
    drawLine(leftBorder);
    drawLine(middleBorder);
    drawLine(middleBorder2);
    drawLine(rightBorder);

    frameRate(30);
}

function updateBall(ball){
    // console.log(ball.x);
    if(ball.x + ball.size/2 >= middleBorder.x1 ){
        ball.speed *= -1;
        ball.Sound.play();
        activateLine(middleBorder);
    } else if(ball.x - ball.size/2 <= leftBorder.x1 ){
        ball.speed *= -1;
        ball.Sound.play();
        activateLine(leftBorder);
    }
    ball.x += ball.speed;
}

function updateBall2(item){
    if(item.x + 280. + item.size/2 >= rightBorder.x1 ){
        item.speed *= -1;
        item.Sound.play();
        activateLine(rightBorder);
    } else if(item.x + 280. - item.size/2 <= middleBorder2.x1 ){
        item.speed *= -1;
        item.Sound.play();
        activateLine(middleBorder2);
    }
    item.x += item.speed;
}

const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

const displayBall2 = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x += 280, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}

function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 15);
}

function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}