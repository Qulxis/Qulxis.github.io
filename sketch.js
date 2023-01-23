function setup() {
	createCanvas(600, 240);
	angleMode(DEGREES);
  }

function draw() {
	
	// textSize(32);
	// fill(180);
	// text(hour(), 10, 30);
	// fill(100);
	// text(minute(), 10, 60);
	// fill(0);
	// text(second(), 10, 90);
	// background(0);
  	translate(0, 240);
  	rotate(-90);
	let hr = hour();
	let mn = minute();
	let sc = second();
	if (sc==0) {
		console.log(mn)
	}
	// let dy = day();

	// Background, sunny if during sun, dark during dark
	if ( 6> hr > 0) {
		background('#4c4552');
	  } 
	if (18>hr>6) {
		// console.log('negative');
		background('#b3a46b');

	  }
	else {
		background('#4c4552');
	}
	


	// strokeWeight(8);
	// stroke(255);
	// noFill();
	//   ellipse(200, 200, 300);

	// //   strokeWeight(4);
	// stroke(255, 100, 150);
	// let secondAngle = map(sc, 0, 60, 0, 360);
	// let minuteAngle = map(mn, 0, 60, 0, 360);
	// let hourAngle = map(hr % 24, 0, 24, 0, 360);
	// let sunlight
	
	// arc(0, 0, 300, 300, 0, hourAngle);
	// noFill();
	// stroke(150, 100, 255);
	
	// arc(0, 0, 280, 280, 0, minuteAngle);
	// stroke(150, 255, 100);

	// arc(0, 0, 260, 260, 0, secondAngle);
	// stroke(150, 255, 100);
	
	let sc2 = map(sc%2,0,1,100,255);
	let c = color(sc2,100,0);
	let m2 = map(mn,0,60,0,600);
	let h2 = map(hr%12,0,12,0,240);
	let s_width = map(sc,0,60,0,m2)
	let s_height = map(sc,0,60,0,h2)
	
	// Main block
	push();
	fill('#3cc9c2');
	noStroke();
	rect(0, 0, h2, m2);
	pop();
	
	


	for (let i = 0; i < 25; i++) {
		if (i%2 ==0){
			push();
			if (i%6 == 0){
				strokeWeight(3);
			}
			else {
				strokeWeight(1);
			}
			line(i*10,0, i*10,600);
			pop();	
		}
		
	}

	for (let i = 0; i < 61; i++) {
		push();
		if (i%10 == 0) {
			strokeWeight(3);
		}
		else {
			strokeWeight(1);
		}
		line(0,i*10,240, i*10);
		pop();	
	}

	let edge = map(sc,0,60,600,m2); //edge

	push();
	// rect(0,0,s_height,s_width);
	fill('#455247')
	rect(0,edge,240,10);
	pop();

	// Current minute
	let trans = map(sc,0,60,67,255);
	push();
	fill(60, 201, 194,trans);
	rect(0,edge,h2,10);
	pop();

	// // Minutes Line
	// push();
	// strokeWeight(3);
	// stroke('#ff63b9');
	// line(0,edge,240,edge);
	// pop();
	
	


	// Current Hour line
	push();
	strokeWeight(5)
	stroke('#252b6e');
	line(h2,0,h2,m2);
	pop();
	
}
