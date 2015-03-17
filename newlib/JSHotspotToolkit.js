var Tool = function () {
}

Tool.prototype.constructor = Tool;

Tool.prototype.setStrokeStyle = function () {
    ctx.lineWidth = 1;
    //ctx.strokeStyle = 'rgb(0, 150, 150)';
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.75)';
}

Tool.prototype.drawVertex = function (point) {

    var vertexWidth = 1;
    var vertexSize = 10;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = vertexWidth;
    ctx.beginPath();
    ctx.moveTo(point.x - (vertexSize / 2), point.y);
    ctx.lineTo(point.x + (vertexSize / 2), point.y);

    ctx.moveTo(point.x , point.y - (vertexSize / 2));
    ctx.lineTo(point.x , point.y + (vertexSize / 2));

    ctx.stroke();
}

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
        ctx.fill();
    }

    document.getElementById("outputText").innerHTML = JSON.stringify(polygons);
}

Tool.prototype.click = function (x, y) {

    var point = {x, y};

    var done = false;
    if(poly.length > 0) {
        var first = poly[0];
        if(currentTool.checkTolerance(point, first)) {
            // first test if we can close the polygon
            poly.push(first);
            if(poly.length > 3) polygons.push(poly);
            poly = [];
            done = true;
            this.redrawScreen();
        }
    }

     if(!done){
        var found = false;
        for(var i = 0; i < polygons.length; i++) {
            var checkPoly = polygons[i];

            for(var j = 0; j < checkPoly.length; j++) {
                var currVertex = checkPoly[j];

                if(currentTool.checkTolerance(point, currVertex)) {
                    console.log("Found a vertex to snap to!");
                    poly.push(currVertex);
                    found = true;
                    break;
                }
            }
            if(found) break;
        }

        if(!found) {
            poly.push(point);
        }

        if(poly.length > 1) {
            var last = poly[poly.length - 2];
            var curr = poly[poly.length - 1];
            ctx.beginPath();
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.stroke();
        }
    }

     // draw most recent vertex
    if(poly.length > 0) {
        var end = poly[poly.length-1];
        this.drawVertex(end);
        this.setStrokeStyle();
    }
}

Tool.prototype.checkTolerance = function(first, last) {
    var x_dist =  first.x > last.x ? first.x - last.x : last.x - first.x;
    var y_dist =  first.y > last.y ? first.y - last.y : last.y - first.y;

    var dist = (Math.sqrt((x_dist * x_dist) + (y_dist * y_dist)));

    if(dist < tolerance) return true;
    return false;
}

Tool.prototype.drawBrush = function (x, y) {
    this.restoreData();

    previousData.x = x - tolerance;
    previousData.y = y - tolerance;

    if(previousData.x < 0) previousData.x = 0;
    if(previousData.y < 0) previousData.y = 0;

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
    if(previousData.x < 0) previousData.x = 0;
    if(previousData.y < 0) previousData.y = 0;
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

        for(var j = 1; j < polygon.length; j++) {
            ctx.arc(polygon[j].x, polygon[j].y, 7, 0, 2 * Math.PI);
            this.drawVertex(polygon[j]);
        }
        this.setStrokeStyle();
    }

    ctx.strokeStyle = 'rgb(0, 150, 150)';
    document.getElementById("outputText").innerHTML = JSON.stringify(polygons);
}
var MoveVertices = function () {
}

MoveVertices.prototype = Object.create(Tool.prototype);
MoveVertices.prototype.constructor = MoveVertices;
MoveVertices.prototype.drawBrush = function (x, y) {

    if(this.mouseIsDown) {
        var diffX = x - this.downAt.x;
        var diffY = y - this.downAt.y;
        this.downAt.x = x;
        this.downAt.y = y;

        for(var i = 0; i < this.affectedPoints.length; i++) {
            var p = this.affectedPoints[i];

            var dupe = false;
            for(j = 0; j < i; j++) {
                var o = this.affectedPoints[j];

                if(polygons[p.i][p.j] == polygons[o.i][o.j]) {
                    dupe = true; // ignore points that have already been moved earlier in the outer loop
                    break;
                }
            }

            if(!dupe) {
                polygons[p.i][p.j].x += diffX;
                polygons[p.i][p.j].y += diffY;
            }

        }

        this.redrawScreen();
    } else {
        this.restoreData();
    }

    previousData.x = x - tolerance;
    previousData.y = y - tolerance;
    if(previousData.x < 0) previousData.x = 0;
    if(previousData.y < 0) previousData.y = 0;
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

      document.getElementById("outputText").innerHTML = JSON.stringify(polygons);
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

        for(var j = 1; j < polygon.length; j++) {
            this.drawVertex(polygon[j]);
        }

        this.setStrokeStyle();;
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
var imageName = "";

function handleFileSelect (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    if(file.name !== undefined)
        imageName = file.name;
    else
        imageName = "";

    reader.onload = (function(imageFile) {
        return function(e) {
            document.getElementById('canvas')
                .setAttribute('style', 'background-image: url("' + e.target.result + '")');
            imageData = new Image();
            imageData.src = e.target.result;

            canvas.width = imageData.naturalWidth;
            canvas.height = imageData.naturalHeight;
        };
    })(file);

    reader.readAsDataURL(file);
}

function handleLoadJSON (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (function(imageFile) {
        return function(e) {
           document.getElementById('outputText').innerHTML = e.target.result;
            polygons = JSON.parse(document.getElementById("outputText").innerHTML);
            currentTool.redrawScreen();
        };
    })(file);

    reader.readAsText(file);
}

function handleLeftClick(event) {
    var workspace = document.getElementById("workspace");
    var x = event.clientX - canvas.offsetLeft - workspace.offsetLeft + window.scrollX + workspace.scrollLeft;
    var y = event.clientY - canvas.offsetTop - workspace.offsetTop + window.scrollY + workspace.scrollTop;
    currentTool.restoreData();
    previousData.imageData = null;
    currentTool.click(x, y);
}

var previousData = {};

function handleMouseMove(event) {
    var workspace = document.getElementById("workspace");
    var x = event.clientX - canvas.offsetLeft - workspace.offsetLeft + window.scrollX + workspace.scrollLeft;
    var y = event.clientY - canvas.offsetTop - workspace.offsetTop + window.scrollY + workspace.scrollTop;

    console.log("Client y: " + event.clientY);
    console.log("Workspace scroll y: " + workspace.scrollTop);

    if(isResizing) {
        var x_dist = resizeStart.x > x ? resizeStart.x - x : x - resizeStart.x;
        var y_dist = resizeStart.y > y ? resizeStart.y - y : y - resizeStart.y;

        var newBrushSize = (Math.sqrt((x_dist * x_dist) + (y_dist * y_dist)));
        if(newBrushSize < 5) newBrushSize = 5;
        document.getElementById("brushSize").value =  newBrushSize;
        tolerance = newBrushSize;
    }

    currentTool.drawBrush(x, y);
}

function handleMouseOut(event) {
    currentTool.restoreData();
}

var isResizing = false;
var resizeStart = {};
function startBrushResize(x, y) {
    isResizing = true;
    resizeStart.x = x;
    resizeStart.y = y;
}

function endBrushResize(x, y) {
    isResizing = false;
}

function resizeCanvas() {
    var canvas = document.getElementById("canvas");
    var workspace = document.getElementById("workspace");

//    canvas.style.width = "100%";
//    canvas.style.height = "100%";
//    canvas.width = canvas.offsetWidth;
//    canvas.height = canvas.offsetHeight;
//  currentTool.redrawScreen();
}


function initialise() {
    document.getElementById('imageFile')
        .addEventListener('change', handleFileSelect, false);

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = 'rgb(0, 150, 150)';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(0, 150, 150)';

    canvas.addEventListener('mouseout', handleMouseOut, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('mouseup', function (event) {
        var workspace = document.getElementById("workspace");

    var x = event.clientX - canvas.offsetLeft - workspace.offsetLeft + window.scrollX + workspace.scrollLeft;
    var y = event.clientY - canvas.offsetTop - workspace.offsetTop + window.scrollY + workspace.scrollTop;

        if(isResizing) endBrushResize(x, y);
        else {
            currentTool.mouseUp(x, y);
            handleLeftClick(event);
        }
    }, false);

    canvas.addEventListener('mousedown', function (event) { 

        var workspace = document.getElementById("workspace");
    var x = event.clientX - canvas.offsetLeft - workspace.offsetLeft + window.scrollX + workspace.scrollLeft;
    var y = event.clientY - canvas.offsetTop - workspace.offsetTop + window.scrollY + workspace.scrollTop;
        if(!event.ctrlKey) currentTool.mouseDown(x, y);
        if(event.ctrlKey) startBrushResize(x, y);
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

    document.getElementById('loadFile').addEventListener('click', function () {
        document.getElementById('load').click();
    })
    document.getElementById('load')
        .addEventListener('change', handleLoadJSON, false);

    document.getElementById('saveFile').addEventListener('click', (function () {
        var fileName = "shape_data.json";

        if(imageName.length > 0) {
            fileName = imageName.substring(0, imageName.lastIndexOf('.')) + ".json";
        }

        saveTextAs(document.getElementById('outputText').innerHTML, fileName);
    }).bind(this));

    document.getElementById('refresh').addEventListener('click', function () {
        polygons = JSON.parse(document.getElementById("outputText").innerHTML);
        currentTool.redrawScreen();
    }, false);



    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

