nose_x=0;
nose_y=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function preload(){
clown_nose=loadImage('https://tse4.mm.bing.net/th?id=OIP.xAg8_DvZRfNcaZx6-Qz9BwAAAA&pid=Api&P=0&w=300&h=300');
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x,nose_y,30,30);
fill(255,0,0);
stroke(255,0,0);
circle(nose_x,nose_y,20);
}
function takeSnapshot(){
    save('filterimg.png');
}
function gotPoses(results){
 if(results.length>0){
     console.log(results);
     nose_x=results[0].pose.nose.x;
     nose_y=results[0].pose.nose.y;
     console.log("nose x= "+nose_x+"nose y= "+nose_y)
 }
}                      