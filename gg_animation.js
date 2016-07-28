
	var KeyFrame = function (theTime, theValues) {
		
		this.time = theTime;
		this.values = theValues;
	}

	var Animation = function () {
		this.keyFrames = [];
		this.loop = false;
	}

	Animation.prototype.getValue = function(time) {
		
		var totalTime = this.keyFrames[this.keyFrames.length-1].time;
      	
		if (this.loop)
        	time = time % totalTime;
      
          
      	var i;
      	for (i=0; i<this.keyFrames.length-1; i++) {
          if (time < this.keyFrames[i].time)
         		break; 
      	}

      	var dim = this.keyFrames[0].values.length;
      	var ret = [];

      	t0 = this.keyFrames[i-1].time;
      	t1 = this.keyFrames[i].time;
      	t = (time - t0) / (t1-t0);
        
      	for (var j=0; j<dim; j++) {
        	v0 = this.keyFrames[i-1].values[j];
        	v1 = this.keyFrames[i].values[j];
        	ret[j] = Util.blend(v0,v1,t);
      	}
      	return ret;
	}

	Animation.prototype.addKeyFrame = function (theTime, theValue) {
        var keyFrame = new KeyFrame(theTime, theValue);
		this.keyFrames.push(keyFrame);
	}

            
