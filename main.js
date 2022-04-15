img=""
Status=""
Objects=[]
function preload(){
img=loadImage('bobst-individual-study-room.jpg')
}








function setup(){
canvas=createCanvas(380,380)
canvas.center()
objectDetector=ml5.objectDetector('CocoSSD',modelLoaded);
document.getElementById('Status').innerHTML="Status:detecting objects"
video=createCapture(VIDEO)
video.hide()
}


function modelLoaded(){
console.log("model has been loaded")
Status=true
//objectDetector.detect(img,gotResult)//
}
function gotResult(error,results){
if(error){
console.log(error)
}
console.log(results)
Objects=results


}




function draw(){
//image(img,0,0,640,420)//
image(video,0,0,380,380)
/*fill("red")
text("dog",45,75)
noFill()
stroke("red");
rect(30,60,450,350)
fill("blue")
text("cat",300,110)
noFill()
stroke("blue")
rect(300,100,300,250)
*/
if(Status==true){
    r=random(255)
    g=random(255)
    b=random(255)
    objectDetector.detect(video,gotResult)
for (let counter = 0; counter < Objects.length; counter++) {
    document.getElementById("Status").innerHTML="Status:object detected"
    document.getElementById("number_of_objects").innerHTML="Number of objects detected are:"+Objects.length
    fill(r,g,b)
    percent=floor(Objects[counter].confidence * 100)
    text(Objects[counter].label+" "+percent+"%",Objects[counter].x,Objects[counter].y)
    noFill()
    stroke(r,g,b)
    rect(Objects[counter].x,Objects[counter].y,Objects[counter].width,Objects[counter].height)

}


}







}
