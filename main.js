function preload(){
    
}

function setup(){
    canvas = createCanvas(350,350);
    //canvas.center();
    canvas.position(200,200);
    video = createCapture(VIDEO);
    video.hide();



}
function draw(){

    image(video, 50, 50,250, 250);
fill("#d361ed");
    rect(0,0,350,50);
    rect(0,300,350,50);
    rect(0,0,50,350);
    rect(300,0,50,350);
    
   fill("lightblue");
  circle(25,25,50);
  circle(325,25,50);
  circle(25,325,50);
  circle(325,325,50);

  fill("lightgreen");
  circle(175,25,50);
  circle(25,175,50);
  circle(175,325,50);  
  circle(325,175,50); 
}

function take_snapshot(){
    save("my_image.png");
}

