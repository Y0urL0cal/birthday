var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 canvas.add(block_image_object);

block_image_width = 30;
block_image_height = 30;

 function new_image() {
   fabric.Image.fromURL('BirthdayImage.jpg', function (Img) 
   { block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
    top:0,
    left:0
    });
    canvas.add(block_image_object); });
 }

function playSound(){
	{ x.play();
}
}
