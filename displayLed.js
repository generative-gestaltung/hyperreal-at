var Led_Len = 30;
var Led_Points = [[0,0],[1,1],[Led_Len,1],[Led_Len+1,0],[Led_Len,-1],[1,-1],[0,0]];
var Led_Rotate_8 = [0, Math.PI/2, Math.PI/2, 0, Math.PI/2, Math.PI/2, 0,
                  Math.PI/3];
var Led_Translate_8 = [[0,0], [Led_Len, 0], [Led_Len, Led_Len], [0, 2*Led_Len], 
                     [0,0], [0, Led_Len], [0, Led_Len]];



var Led_Char = function (c, x, y) {
	this.c = c;
	this.x = x;
	this.y = y;
}


var Led_N = 24;

var drawCircle = function (n) {

	for (var i=0; i<n; i++) {
		context.save();
		var angle = Math.PI*2*i / n;

		var R = 200;

		var t = (n-4)/130;
		var div = Util.blend(0.5,20,t);
		var LEN = R/div;

		var ox = R*Math.sin(angle);
		var oy = R*Math.cos(angle);

		context.translate (500+ox, 500+oy);
		context.rotate(-angle+Math.PI);
		context.translate (-LEN/2,0);

		context.fillRect (0, 0, LEN, 1);
		context.restore();
	}
}

Led_Char.prototype.drawLed = function (n) {

	context.fillStyle = "#ffffff";
	drawCircle(8);

/*
	var sc = 1;
	if (n<16) {	
		var circleN = 16;
		var angle = Math.PI*4*n / circleN;
		var ox = Led_Len*Math.round(Math.sin(angle));
		var oy = Led_Len*Math.round(Math.cos(angle)) + (Math.floor(n*2/circleN)*2*Led_Len);

		context.translate (this.x+ox, this.y+oy);
		context.rotate(-angle+Math.PI);
		context.translate (-Led_Len/2,0);
	}

	else {
		return;
		sc = 2;
		var circleN = 8;
		var angle = Math.PI*4*n / circleN;
		var ox = sc*Led_Len*0.5*Math.sin(angle);
		var oy = sc*Led_Len*0.5*Math.cos(angle) + (Math.floor((n-16)*2/circleN)*2*Led_Len);

		context.translate (this.x+ox, this.y+oy);
		context.rotate(-angle+Math.PI);
		context.translate (-Led_Len*sc/2,0);
	}

	context.beginPath();

    for (i=0; i<Led_Points.length; i++) {
    	context.lineTo(Led_Points[i][0]*sc, Led_Points[i][1]);
    }
    
    context.closePath();  
    context.strokeStyle = "rgba(255,0,255,1)";  
    context.stroke();  
    */


    //context.restore();
}

Led_Char.prototype.draw = function() {
	for (var i=0; i<Led_N; i++) {
		this.drawLed(i);
	}
}


var Display_Led = function() {
	this.texts = [];
	this.chars = [];
}

Display_Led.prototype.addText = function (text, xo, yo) {
	this.texts.push(text);
	for (var i=0; i<text.length; i++) {
		this.chars.push (new Led_Char(text[i], i*Led_Len*4, 200));
	}
}

Display_Led.prototype.draw = function () {
	for (var i=0; i<this.chars.length; i++) {
		this.chars[i].draw();
	}
}