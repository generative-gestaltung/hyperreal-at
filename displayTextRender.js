    var charSizeX = 15;
    var charSizeY = 20;
    var defaultSize = 13;
    var textRatio = 0.7;

    
    var clickAreas = [];


    var Display_Text_Renderer = function (N) {

        this.data = [];
        this.texts = [];
        this.N = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.currentSize = 10;
        this.lineWidth = 1000;
    }

    Display_Text_Renderer.prototype.getData = function (i) {
        return this.data[i];
    }


    Display_Text_Renderer.prototype.getPos = function (i) {
        return this.data[i].pos;
    }

    Display_Text_Renderer.prototype.setPos = function (i, pos) {
        this.data[i].pos.x = pos.x;
        this.data[i].pos.y = pos.y;

        var elem = document.getElementById("txt"+i);
        if (!elem) return;
        elem.style.left=pos.x+"px";
        elem.style.top=pos.y+"px";
    }

    Display_Text_Renderer.prototype.addText = function (text, xo, yo, size) {

        for (var i=0; i<text.length; i++) {
            c = text[i];
            x = i*size*textRatio + xo;
            y = yo;
        }
    }

    Display_Text_Renderer.prototype.hitReset = function() {
        this.currentX = 0;
        this.currentY = 0;
    }

    Display_Text_Renderer.prototype.hitReturn = function() {
        this.currentX = 0;
        this.currentY += this.currentSize;
    }


    Display_Text_Renderer.prototype.kill = function (i) {
        var elem = document.getElementById("txt"+i);
        if (elem != null) {
            elem.remove();
        }
    }
    
    Display_Text_Renderer.prototype.setSize = function (s) {
        this.currentSize = s;
    }

    Display_Text_Renderer.prototype.addChar = function (c) {
            
            this.currentX += this.currentSize;
            if (this.currentX > this.lineWidth) 
                this.hitReturn();
            this.data.push({pos: {x: this.currentX, y: this.currentY}, size: this.currentSize});

            var div = document.createElement('div');
            div.id = "txt"+this.N;
            this.N += 1;
            div.style = "color:white;  float:left; position:absolute;"+
                        "left:"+this.currentX+"px; top:"+this.currentY+"px;"+
                        "font-size:"+this.currentSize+"px;"
            div.innerHTML = c;
            document.getElementById("txtContainer").appendChild(div);
    }



    var _cnt = 0;
    Display_Text_Renderer.prototype.draw = function () {
        
    }
