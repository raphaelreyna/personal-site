const canvas = document.getElementById('tesseract');
const ctx = canvas.getContext('2d');
var color = "#009688";

const edges = [
    [
        [-1.0, -1.0, -1.0, -1.0],
        [-1.0, -1.0, -1.0, 1.0]
    ],
    [
        [-1.0, -1.0, -1.0, -1.0],
        [-1.0, -1.0, 1.0, -1.0]
    ],
    [
        [-1.0, -1.0, -1.0, -1.0],
        [-1.0, 1.0, -1.0, -1.0
        ]
    ],
    [
        [-1.0, -1.0, -1.0, -1.0],
        [1.0, -1.0, -1.0, -1.0]
    ],
    [
        [-1.0, -1.0, -1.0, 1.0],
        [-1.0, -1.0, 1.0, 1.0]
    ],
    [
        [-1.0, -1.0, -1.0, 1.0],
        [-1.0, 1.0, -1.0, 1.0
        ]
    ],
    [
        [-1.0, -1.0, -1.0, 1.0],
        [1.0, -1.0, -1.0, 1.0]
    ],
    [
        [-1.0, -1.0, 1.0, -1.0],
        [-1.0, -1.0, 1.0, 1.0]
    ],
    [
        [-1.0, -1.0, 1.0, -1.0],
        [-1.0, 1.0, 1.0, -1.0]
    ],
    [
        [-1.0, -1.0, 1.0, -1.0],
        [1.0, -1.0, 1.0, -1.0]
    ],
    [
        [-1.0, -1.0, 1.0, 1.0],
        [-1.0, 1.0, 1.0, 1.0]
    ],
    [
        [-1.0, -1.0, 1.0, 1.0],
        [1.0, -1.0, 1.0, 1.0]
    ],
    [
        [-1.0, 1.0, -1.0, -1.0],
        [-1.0, 1.0, -1.0, 1.0]
    ],
    [
        [-1.0, 1.0, -1.0, -1.0],
        [-1.0, 1.0, 1.0, -1.0]
    ],
    [
        [-1.0,1.0, -1.0, -1.0],
        [1.0, 1.0, -1.0, -1.0]
    ],
    [
        [-1.0, 1.0, -1.0, 1.0],
        [-1.0, 1.0, 1.0, 1.0]
    ],
    [
        [-1.0, 1.0, -1.0, 1.0],
        [1.0, 1.0, -1.0, 1.0]
    ],
    [
        [-1.0, 1.0, 1.0, -1.0],
        [-1.0, 1.0, 1.0, 1.0]
    ],
    [
        [-1.0, 1.0, 1.0, -1.0],
        [1.0, 1.0, 1.0, -1.0]
    ],
    [
        [-1.0, 1.0, 1.0, 1.0],
        [1.0, 1.0, 1.0, 1.0]
    ],
    [
        [1.0, -1.0, -1.0, -1.0],
        [1.0, -1.0, -1.0, 1.0]
    ],
    [
        [1.0, -1.0, -1.0, -1.0],
        [1.0, -1.0, 1.0, -1.0]
    ],
    [
        [1.0, -1.0, -1.0, -1.0],
        [1.0, 1.0, -1.0, -1.0]
    ],
    [
        [1.0, -1.0, -1.0, 1.0],
        [1.0, -1.0, 1.0, 1.0]
    ],
    [
        [1.0, -1.0, -1.0, 1.0],
        [1.0, 1.0, -1.0, 1.0]
    ],
    [
        [1.0, -1.0, 1.0, -1.0],
        [1.0, -1.0, 1.0, 1.0]
    ],
    [
        [1.0, -1.0, 1.0, -1.0],
        [1.0, 1.0, 1.0, -1.0]
    ],
    [
        [1.0, -1.0, 1.0, 1.0],
        [1.0, 1.0, 1.0, 1.0]
    ],
    [
        [1.0, 1.0, -1.0, -1.0],
        [1.0, 1.0, -1.0, 1.0]
    ],
    [
        [1.0, 1.0, -1.0, -1.0],
        [1.0, 1.0, 1.0, -1.0]
    ],
    [
        [1.0, 1.0, -1.0, 1.0],
        [1.0, 1.0, 1.0, 1.0]
    ],
    [
        [1.0, 1.0, 1.0, -1.0],
        [1.0, 1.0, 1.0, 1.0]
    ]
];

function rotateXY(point, angle) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const w = point[3];
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return [x*c-y*s,
            x*s+y*c,
            z,
            w
           ];
}

function rotateXZ(point, angle) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const w = point[3];
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return [x*c-z*s,
            y,
            x*s+z*c,
            w
           ];
}

function rotateXW(point, angle) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const w = point[3];
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return [x*c-w*s,
            y,
            z,
            x*s+w*c
           ];
}

function rotateYZ(point, angle) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const w = point[3];
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return [x,
            y*c-z*s,
            y*s+z*c,
            w
           ];
}

function rotateYW(point, angle) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const w = point[3];
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return [x,
            y*c-w*s,
            z,
            y*s+w*c
           ];
}

function rotateZW(point, angle) {
    const x = point[0];
    const y = point[1];
    const z = point[2];
    const w = point[3];
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return [x,
            y,
            z*c-w*s,
            z*s+w*c
           ];
}

function project(point) {
    return [point[0], point[1]];
}

function normalize(point) {
    return [(canvas.width / 4) * (point[0] + 2),
            ( canvas.height / 4) * (point[1] + 2)
    ];
}

function rotateCube(plane, angle) {
    for (var i = 0; i < 32; i++) {
        switch(plane) {
        case 'xy':
            edges[i][0] = rotateXY(edges[i][0], angle);
            edges[i][1] = rotateXY(edges[i][1], angle);
            break;
        case 'xz':
            edges[i][0] = rotateXZ(edges[i][0], angle);
            edges[i][1] = rotateXZ(edges[i][1], angle);
            break;
        case 'xw':
            edges[i][0] = rotateXW(edges[i][0], angle);
            edges[i][1] = rotateXW(edges[i][1], angle);
            break;
        case 'yz':
            edges[i][0] = rotateYZ(edges[i][0], angle);
            edges[i][1] = rotateYZ(edges[i][1], angle);
            break;
        case 'yw':
            edges[i][0] = rotateYW(edges[i][0], angle);
            edges[i][1] = rotateYW(edges[i][1], angle);
            break;
        case 'zw':
            edges[i][0] = rotateZW(edges[i][0], angle);
            edges[i][1] = rotateZW(edges[i][1], angle);
            break;
        default:
            alert('wrong rotation plane');
            break;
        }
    }
}

function drawCube(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = color;
    for (var i = 0; i < 32; i++) {
        var start = edges[i][0];
        var end = edges[i][1];
        start = project(start);
        end = project(end);
        start = normalize(start);
        end = normalize(end);
        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    }
}

function drawLoop() {
	  rotateCube('yw', 0.005);
    rotateCube('zw', 0.0035);
    rotateCube('xz', 0.0025);
    drawCube();
 	  window.requestAnimationFrame(drawLoop);
}

function hsvToRGB(h, s, v){
    var r, g, b = 0;

    const c = s*v;
    const x = c*(1-Math.abs(((h/60)%2)-1));
    const m = v-c;

    if (0<=h && h<60){
        r=c;
        g=x;
        b=0;
    } else if (60<=h && h<120){
        r=x;
        g=c;
        b=0;
    } else if (120<=h && h<180){
        r=0;
        g=c;
        b=x;
    } else if (180<=h && h<240){
        r=0;
        g=x;
        b=c;
    } else if (240<=h && h<300){
        r=x;
        g=0;
        b=c;
    } else if (240<=h && h<360){
        r=c;
        g=0;
        b=x;
    }

    return {
        r: (r+m)%255,
        g: (g+m)%255,
        b: (b+m)%255
    };
}

function rgbToHex(red, green, blue) {
    var rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

function handleMouse(evt) {
    var theta = 4*Math.atan2(evt.clientY, evt.clientX);
    theta = theta*180/Math.PI;
    color = hsvToRGB(theta, 0.3, 1);
    color = rgbToHex(255*color.r, 255*color.g, 255*color.b);
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const x = (evt.clientX - width/2)/width;
    const y = (evt.clientY - height/2)/height;
    rotateCube('xw', x/200);
    rotateCube('yw', y/200);
}

document.addEventListener("mousemove", handleMouse);
rotateCube('xy', 0.3);
rotateCube('xz', 0.3);
rotateCube('yw', 0.3);
drawLoop();
