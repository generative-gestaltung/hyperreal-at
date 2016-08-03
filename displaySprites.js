
    var TEXTURE_ATLAS = "FontomType-SkyhookMono.gif";
    var NUMBER_ATLAS = "skyhook_numbers.png";
    
    var charSizeX = 15;
    var charSizeY = 20;
    var img0 = new Image();
    var img1 = new Image();
    var defaultSize = 13;
    var textRatio = 0.7;

    img0.src = TEXTURE_ATLAS;
    img1.src = NUMBER_ATLAS;
    

    var loaded = 0;
    
    img0.onload = function() {
        loaded +=1;
    }
    
    img1.onload = function() {
        loaded +=1;
    }

    var atlas0 = {
        img: img0,
        imgCols: 9,
        imgRows: 3,
        imgW: 1118,
        imgH: 672,
        dX: 1118.0 / 9,
        dY: 672.0 / 3,
        arr: ['a', 'b', 'c', 'd', 'e', 'f',
           'g', 'h', 'i', 'j', 'k', 'l',
           'm', 'n', 'o', 'p', 'q', 'r',
           's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }

    var atlas1 = {
        img: img1,
        imgCols:24,
        imgRows:1,
        imgW: 1382,
        imgH: 98,
        dX: 1340.0 / 24,
        dY: 98.0,
        arr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
              '-', '(', '!', '@', '#', '$', '%', '&', '.', ',', '?', ':', ';']
    }

    var clickAreas = [];


    var toInt = function (c, theAtlas) {
        for (var i=0; i<theAtlas.arr.length; i++) {
            if (c==theAtlas.arr[i])
                return i;
        }
        return -1;
    }

    var getCoordsForChar = function (char, theAtlas) {
        ind = toInt (char, theAtlas);
        if (ind==-1)
            return {x:-1};
        os = 0;
        yy = Math.floor(ind/theAtlas.imgCols);
        if (yy==1)
            os = 0.075;
        if (yy==2)
            os = 0.16;
        return {x:ind%theAtlas.imgCols, y:yy+os, dX: theAtlas.dX, dY: theAtlas.dY};
    }

    var Sprite = function (c, theX, theY, size) {
        this.c = c;
        this.size = size;
        this.pos = {x:theX, y:theY};
        this.highL = false;
    }

    Sprite.prototype.highlight = function() {
        this.highL = true;
    }

    Sprite.prototype.draw = function() {

        var y=0;

        coords = getCoordsForChar (this.c, atlas0);
        img = atlas0.img;
        
        if (coords.x==-1) {
            coords = getCoordsForChar (this.c, atlas1);
            img = atlas1.img;
        }

        if (this.highL) {
            context.fillStyle = "rgba(255,255,255,0.5)";
            context.fillRect (this.pos.x, this.pos.y, 
                              this.size, this.size);
            this.highL = false;
        }
        
        context.drawImage (img, coords.x*coords.dX, coords.y*coords.dY, coords.dX, coords.dY, 
                           this.pos.x, this.pos.y, 
                           this.size*textRatio, this.size);
    }

    var Display_Sprites = function (N) {

        this.sprites = [];
        this.texts = [];
        this.N = N;
        this.currentX = 0;
        this.currentY = 0;
        this.currentSize = 10;
    }

    Display_Sprites.prototype.addText = function (text, xo, yo, size) {

        for (var i=0; i<text.length; i++) {
            c = text[i];
            x = i*size*textRatio + xo;
            y = yo;
            this.sprites.push (new Sprite(c, x, y, size));
        }
    }

    Display_Sprites.prototype.hitReset = function() {
        this.currentX = 0;
        this.currentY = 0;
    }

    Display_Sprites.prototype.hitReturn = function() {
        this.currentX = 0;
        this.currentY += this.currentSize;
    }

    Display_Sprites.prototype.setSize = function (s) {
        this.currentSize = s;
    }

    Display_Sprites.prototype.addChar = function (c) {
            this.sprites.push (new Sprite(c, this.currentX, this.currentY, this.currentSize));
            this.currentX += this.currentSize;
    }

    var _cnt = 0;
    Display_Sprites.prototype.draw = function () {
        context.save();
        context.translate(150,20);
        for (var i=0; i<this.sprites.length; i++) {
            this.sprites[i].draw();
        }
        if (_cnt%30<15)
            context.fillStyle = "#fff";
        else
            context.fillStyle = "rgba(50,150,255,0)";
        _cnt += 1;

        context.fillRect(this.currentX, this.currentY, 10, 20);
        context.restore();
    }
