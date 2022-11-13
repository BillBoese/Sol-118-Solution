
function setup() {
  createCanvas(1280, 720);
  noLoop();
	frameRate(1);
  
}

function draw() {
  background(230);
	//taken from circles example simplify a bit change circles to point
	var PPoints = [];
	var tooClose = false;
	var protection = 0;
	var buffer = 40;
	var separation = 120; //120 seems to work best

  while(PPoints.length < 50){ //one big while loop with a flag and break, wonky but it works

    var PPoint = {      //PPoint var only lives for duration of loop
      x: Math.round(random(0 + buffer, width - buffer)),
      y: Math.round(random(0 + buffer, height - buffer)),
    };
   
    var tooClose = false;
    
    for(var j = 0; j < PPoints.length; j++){
      var other = PPoints[j];
      var d = dist(PPoint.x, PPoint.y, other.x, other.y);
      if (d < separation){ //too close
        tooClose = true;
        break; //this break just gets you out of the for loop but not the while
      }
    }
    
    if(!tooClose){ //only add to array if it has passed checks
      PPoints.push(PPoint);
    }
    
      protection ++;
      if (protection > 10000){
        break;  //this break gets you out of the while loop if something goes wrong. i dont like this either, redo this whole thing
      }
  } // end of while loop building the array of points

	//draw the points
  for (var i = 0; i < PPoints.length; i++) {
    //fill(0, 250, 50, 250);
    //noStroke();
		strokeWeight(0.1);
    point(PPoints[i].x, PPoints[i].y);
  }
	
	//connect each point to all others with straight lines
	for(var k = 0; k < PPoints.length; k++){
      var originPoint = PPoints[k];
			for(var l=0; l < PPoints.length; l++){
      	if (k != l) { // the points are different, draw a line to connect
				line(originPoint.x, originPoint.y,PPoints[l].x,PPoints[l].y);
				}
			}
    }
	
}
