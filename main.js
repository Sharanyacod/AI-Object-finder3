status="";
function preload(){
    video.hide();
}
function setup(){
  canvas=createCanvas(520,520);
    canvas.center();
}
function draw(){
   image(video,0,0,520,520) 
    if(status!=""){
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:object Detected";
            document.getElementById("number_of_objects").innerHTML="number-of-objects:Detected";
            fill("Maroon");
            percent=floor(object[i].confidence);
        }
    }
}
function play_video(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Object";
}
function modelLoaded(){
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
    
}
function gotResult(error,results){
    if(error){
        console.log(error);
        
    }
    
    console.log(results);
    objects=results;
}