var Tool = function () {
}

Tool.prototype.constructor = Tool;

Tool.prototype.redrawScreen = function () {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(var i = 0; i < polygons.length; i++) {
        var polygon = polygons[i];

        ctx.fillStyle = "rgba(" + Math.ceil(25 + Math.random() * 200) + ","
                               + Math.ceil(25 + Math.random() * 200) + ","
                               + Math.ceil(25 + Math.random() * 200) + "," + 0.5 + ")";

        ctx.beginPath();
        ctx.moveTo(polygon[0].x, polygon[0].y);
        for(var j = 1; j < polygon.length - 1; j++) {
            ctx.lineTo(polygon[j].x, polygon[j].y);
        }
        ctx.closePath();
        //ctx.stroke();
        ctx.fill();
    }

    document.getElementById("outputText").value = JSON.stringify(polygons);
}

Tool.prototype.click = function (x, y) {
    var point = {x, y};
    poly.push(point);

    if(poly.length > 1) {
        var first = poly[0];
        var start = poly[poly.length-2];
        var end = poly[poly.length-1];

        if(currentTool.checkTolerance(first, end)) {
            poly.pop();
            poly.push(first);

            if(poly.length > 3)
                polygons.push(poly);

            poly = [];
            this.redrawScreen();
        } else {
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
        }
    }

    if(poly.length > 0) {
        var end = poly[poly.length-1];
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(50,50,50,0.5)';
        ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgb(0, 150, 150)';
    }
}

Tool.prototype.checkTolerance = function(first, last) {
    var xDist =  first.x > last.x ? first.x - last.x : last.x - first.x;
    var yDist =  first.y > last.y ? first.y - last.y : last.y - first.y;

    if(xDist < tolerance && yDist < tolerance) return true;
    return false;
}

Tool.prototype.drawBrush = function (x, y) {
    this.restoreData();

    previousData.x = x - tolerance;
    previousData.y = y - tolerance;
    previousData.imageData = ctx.getImageData(previousData.x, previousData.y, tolerance * 2, tolerance * 2);

    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.beginPath();
    ctx.arc(x, y, tolerance, 0, 2 * Math.PI);
    ctx.fill();
}

Tool.prototype.mouseDown = function (x, y) {
}
Tool.prototype.mouseUp = function (x, y) {
}

Tool.prototype.restoreData = function () {
    if(previousData.imageData) {
        ctx.putImageData(previousData.imageData, previousData.x, previousData.y);
    }
}

var MergeVertices = function () {
}

MergeVertices.prototype = Object.create(Tool.prototype);
MergeVertices.prototype.constructor = MergeVertices;
MergeVertices.prototype.click = function (x, y) { 
    for(var i = 0; i < polygons.length; i++) {
        for(var j = 0; j < polygons[i].length; j++) {
            if(this.checkTolerance(polygons[i][j], {x, y})) {
                //this.affectedPoints.push({i, j});
                polygons[i][j] = {x, y};
            }
        }
    }
    this.redrawScreen();
}
MergeVertices.prototype.drawBrush = function (x, y) {

    this.restoreData();

    previousData.x = x - tolerance;
    previousData.y = y - tolerance;
    previousData.imageData = ctx.getImageData(previousData.x, previousData.y, tolerance * 2, tolerance * 2);

    ctx.fillStyle = 'rgba(0,255,0,0.5)';
    ctx.beginPath();
    ctx.arc(x, y, tolerance, 0, 2 * Math.PI);
    ctx.fill();

}

MergeVertices.prototype.redrawScreen = function () {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(var i = 0; i < polygons.length; i++) {
        var polygon = polygons[i];

        ctx.strokeStyle = 'rgb(150, 0, 0)';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(polygon[0].x, polygon[0].y);
        for(var j = 1; j < polygon.length - 1; j++) {
            ctx.lineTo(polygon[j].x, polygon[j].y);
        }
        ctx.closePath();
        ctx.stroke();


        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(50,50,50,0.5)';
        for(var j = 1; j < polygon.length; j++) {
            ctx.beginPath();
            ctx.arc(polygon[j].x, polygon[j].y, 7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }



        //ctx.fill();
    }

    ctx.strokeStyle = 'rgb(0, 150, 150)';
    document.getElementById("outputText").value = JSON.stringify(polygons);
}
var MoveVertices = function () {
}

MoveVertices.prototype = Object.create(Tool.prototype);
MoveVertices.prototype.constructor = MoveVertices;
MoveVertices.prototype.drawBrush = function (x, y) {

    if(this.mouseIsDown) {
        var diffX = x - this.downAt.x;
        var diffY = y - this.downAt.y;
        

        for(var i = 0; i < this.affectedPoints.length; i++) {
            var p = this.affectedPoints[i];

            polygons[p.i][p.j].x += diffX;
            polygons[p.i][p.j].y += diffY;
        }

        this.downAt.x = x;
        this.downAt.y = y;

        this.redrawScreen();
    } else {
        this.restoreData();
    }

    previousData.x = x - tolerance;
    previousData.y = y - tolerance;
    previousData.imageData = ctx.getImageData(previousData.x, previousData.y, tolerance * 2, tolerance * 2);

    ctx.fillStyle = 'rgba(0,0,255,0.5)';
    ctx.beginPath();
    ctx.arc(x, y, tolerance, 0, 2 * Math.PI);
    ctx.fill();

}
MoveVertices.prototype.mouseDown = function (x, y) {

    this.mouseIsDown = true;
    this.affectedPoints = [];
    this.downAt = {x, y};

    for(var i = 0; i < polygons.length; i++) {
        for(var j = 0; j < polygons[i].length; j++) {
            if(this.checkTolerance(polygons[i][j], {x, y})) {
                this.affectedPoints.push({i, j});
            }
        }
    }

    console.log(JSON.stringify(this.affectedPoints));

}

MoveVertices.prototype.mouseUp = function (x, y) {
    if(this.mouseIsDown) {
        this.mouseIsDown = false;

        var diffX = x - this.downAt.x;
        var diffY = y - this.downAt.y;

        for(var i = 0; i < this.affectedPoints.length; i++) {
            var p = this.affectedPoints[i];

            polygons[p.i][p.j].x += diffX;
            polygons[p.i][p.j].y += diffY;
        }


        this.redrawScreen();

    }
}

MoveVertices.prototype.click = function (x, y) {
}

MoveVertices.prototype.redrawScreen = function () {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(var i = 0; i < polygons.length; i++) {
        var polygon = polygons[i];

        ctx.beginPath();
        ctx.moveTo(polygon[0].x, polygon[0].y);
        for(var j = 1; j < polygon.length - 1; j++) {
            ctx.lineTo(polygon[j].x, polygon[j].y);
        }
        ctx.closePath();
        ctx.stroke();


        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(50,50,50,0.5)';
        for(var j = 1; j < polygon.length; j++) {
            ctx.beginPath();
            ctx.arc(polygon[j].x, polygon[j].y, 7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }

        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgb(0, 150, 150)';


        //ctx.fill();
    }

    document.getElementById("outputText").value = JSON.stringify(polygons);
}

var polygons = [];
var poly = [];

var canvas = null;
var ctx = null;

var tolerance = 20;

var mergeVerticesBrush = new MergeVertices();
var moveVerticesBrush = new MoveVertices();
var drawPolyBrush = new Tool();

var currentTool = drawPolyBrush;

var imageData = null;

function handleFileSelect (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (function(imageFile) {
        return function(e) {
            document.getElementById('workspace')
                .setAttribute('style', 'background-image: url("' + e.target.result + '")');
            imageData = new Image();
            imageData.src = e.target.result;
        };
    })(file);

    reader.readAsDataURL(file);
}

function handleLeftClick(event) {
    var workspace = document.getElementById("workspace");
    var x = event.clientX - workspace.offsetLeft + window.scrollX;
    var y = event.clientY - workspace.offsetTop + window.scrollY;
    currentTool.restoreData();
    previousData.imageData = null;
    currentTool.click(x, y);
}


var previousData = {};


function handleMouseMove(event) {
    var workspace = document.getElementById("workspace");
    var x = event.clientX - workspace.offsetLeft + window.scrollX;
    var y = event.clientY - workspace.offsetTop + window.scrollY;
    currentTool.drawBrush(x, y);
}

function initialise() {
    document.getElementById('imageFile')
        .addEventListener('change', handleFileSelect, false);

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = 'rgb(0, 150, 150)';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(0, 150, 150)';

    canvas.addEventListener('click', handleLeftClick, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('mouseup', function (event) { 
        var workspace = document.getElementById("workspace");
        var x = event.clientX - workspace.offsetLeft + window.scrollX;
        var y = event.clientY - workspace.offsetTop + window.scrollY;
        currentTool.mouseUp(x, y);
    }, false);

    canvas.addEventListener('mousedown', function (event) { 
        var workspace = document.getElementById("workspace");
        var x = event.clientX - workspace.offsetLeft + window.scrollX;
        var y = event.clientY - workspace.offsetTop + window.scrollY;
        currentTool.mouseDown(x, y);
    }, false);
    document.getElementById('brushSize').addEventListener('change', function () {
        tolerance = this.value;
    });

    document.getElementById('drawPolyTool').addEventListener('click', function () {
        currentTool = drawPolyBrush; 
        currentTool.redrawScreen();
    });

    document.getElementById('mergeVerticesTool').addEventListener('click', function () {
        currentTool = mergeVerticesBrush; 
        currentTool.redrawScreen();
    });

    document.getElementById('moveVerticesTool').addEventListener('click', function () {
        currentTool = moveVerticesBrush;
        currentTool.redrawScreen();
    })

    document.getElementById("toggleOverlay").addEventListener('click', function () {
        ctx.drawImage(imageData, 0, 0)
    });


    document.getElementById('refresh').addEventListener('click', function () {

        polygons = JSON.parse(document.getElementById("outputText").value);
        currentTool.redrawScreen();
    }, false);
}

