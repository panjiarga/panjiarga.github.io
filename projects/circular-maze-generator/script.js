const SIZE = 20;
const STROKE = SIZE / 5;
const xmlns = "http://www.w3.org/2000/svg";
const siteColor = 'black';
function drawCircle(position, radius, stroke, color) {
    var circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("transform-origin", `${position[0]} ${position[1]}`);
    circle.setAttribute("cy", `${position[1]}`);
    circle.setAttribute("cx", `${position[0]}`);
    circle.setAttribute("r", `${radius}`);
    circle.setAttribute("stroke-width", `${stroke}`);
    circle.setAttribute("stroke", `${color}`);
    circle.setAttribute("fill", "none");
    return circle;
}
function drawBase(level, color) {
    // initiate svg canvas
    const canvasSize = 2 * SIZE * (level + 2);
    var svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("viewBox", "0 0 " + canvasSize + " " + canvasSize);
    svg.setAttribute("transform-origin", `${canvasSize / 2} ${canvasSize / 2}`);
    svg.setAttribute("width", canvasSize);
    svg.setAttribute("height", canvasSize);
    svg.setAttribute("id", "maze");
    svg.setAttribute("position", "absolute");
    svg.style.display = "block";
    document.getElementById('maze-container').setAttribute("width", canvasSize);
    document.getElementById('maze-container').setAttribute("height", canvasSize);

    exitPath = generateExitPath(level);

    for (let i = 0; i <= level; i++) {
        let clr;
        if (color == 'random') { clr = randColor(1); } else { clr = color; };
        console.log('LEVEL' + i);
        svg.appendChild(drawCircle([canvasSize / 2, canvasSize / 2], ((i + 1) * SIZE), STROKE, clr)); //${(1-i/level)}
        svg.appendChild(drawExitPath(exitPath[i], [canvasSize / 2, canvasSize / 2], STROKE, clr));
    }

    document.getElementById('maze-container').appendChild(svg);
}
const rotateMaze = () => {
    const maze = document.getElementById('maze');
    const slider = document.getElementById('slider');
    const ball = document.getElementById('ball');
    const val = document.getElementById('value');
    val.innerHTML = slider.value;
    let deg = 180 - slider.value;
    maze.style.transform = `rotate(${deg}deg)`;
    //ball.style.transform = `rotate(${deg}deg)`;
};
const generateExitPath = (level) => {
    //initiate (level 0) 
    //[degree of rotation,size]
    let exit = [];
    exit.push([180, SIZE]);
    let wall = [];
    wall.push([0, 0]);
    //[level,[{array of tuple}],numOfTuple]
    let exitPath = [];
    exitPath.push([exit, wall]);

    exit = [], wall = [];
    for (let i = 1; i < level; i++) {
        let deg = (Math.ceil(Math.random() * 360) % 360);
        let dy = (i + 1) * SIZE;

        //how many tuple? = floor of level/4
        let numOfTuple = Math.ceil(i / 4);
        if (i%4 == 0) {numOfTuple=1;} 
        console.log("Path: "+numOfTuple);
        for (let j = 0; j < numOfTuple; j++) {
            exit.push([deg, dy]);
            wall.push([deg + 30, dy]);
            deg += Math.ceil((360 / numOfTuple) + (Math.random() * 10));
            deg = deg % 360;
            //console.log('degree on '+j+' iteration= '+deg);
        }
        //console.log('level'+i+':'+'exit'+exit+'wall'+wall);
        exitPath.push([exit, wall]);
        exit = [];
        wall = [];
    }

    for (let i = 1; i < level - 1; i++) {
        //check for every level
        let walls = exitPath[i][1];
        let pathsBelow = exitPath[i][0];
        let pathsAbove = exitPath[i + 1][0];
        //check for every walls
        for (let j = 0; j < walls.length; j++) {
            //compare to every path below 
            for (let k = 0; k < pathsBelow.length; k++) {
                if (Math.abs(walls[j][0] - pathsBelow[k][0]) < 5) {
                    walls[j][0] += 5;
                    console.log("moving a wall"+walls[j][0]+" level"+i);
                }
            }
            //compare to every path above
            for (let k = 0; k < pathsAbove.length; k++) {
                if (Math.abs(walls[j][0] - pathsAbove[k][0]) < 5) {
                    //walls[j][0] += 5;
                    //console.log("moving a wall");
                    walls[j][0] += 3;
                    pathsAbove[k][0] -=3;
                    console.log("moving a wall "+walls[j][0]+" level"+i);
                }
            }
        }
    }
    //outer wall + one exit
    exit.push([Math.ceil(Math.random() * 360), (level + 1) * SIZE]);
    wall.push([0, 0]);
    exitPath.push([exit, wall]);
    return exitPath;
};
const randColor = (a) => {
    var r = Math.floor(256 * Math.random());
    var g = Math.floor(256 * Math.random());
    var b = Math.floor(256 * Math.random());
    var alpha = a;
    //console.log("rgb("+r+","+g+","+b+","+alpha+")");
    return "rgb(" + r + "," + g + "," + b + "," + alpha + ")";
};
const drawExitPath = (levelExitPaths, coordinate, stroke, color) => {

    let svg = document.createElementNS(xmlns, "svg");
    let wallList = levelExitPaths[1];
    let pathList = levelExitPaths[0];
    //console.log(pathList);
    for (const paths of pathList) {
        var circle = document.createElementNS(xmlns, "circle");
        circle.setAttribute("transform-origin", `${coordinate[0]} ${coordinate[1]}`);
        circle.setAttribute("cy", `${coordinate[1] + paths[1]}`);
        circle.setAttribute("cx", `${coordinate[0]}`);
        circle.setAttribute("r", `${SIZE / 2}`);
        circle.setAttribute("fill", siteColor);
        circle.style.transform = `rotate(${paths[0]}deg)`;
        svg.appendChild(circle);
    }
    //console.log(wallList);
    for (const walls of wallList) {
        var rect = document.createElementNS(xmlns, "rect");
        rect.setAttribute("transform-origin", `${coordinate[0]} ${coordinate[1]}`);
        rect.setAttribute("y", `${coordinate[1] + walls[1]}`);
        rect.setAttribute("x", `${coordinate[0]}`);
        rect.setAttribute("width", `${stroke}`);
        rect.setAttribute("height", `${(walls[1] ? SIZE : 0)}`);
        rect.setAttribute("fill", color);
        rect.style.transform = `rotate(${walls[0]}deg)`;
        svg.appendChild(rect);
    }
    return svg;
};
drawBase(100, 'random');
slider.oninput = rotateMaze;
