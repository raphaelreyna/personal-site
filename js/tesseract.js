const canvas = document.getElementById('tesseract');
const ctx = canvas.getContext('2d');

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
	  rotateCube('yw', 0.01);
    rotateCube('zw', 0.007);
    rotateCube('xz', 0.005);
    drawCube();
 	  window.requestAnimationFrame(drawLoop);
}

rotateCube('xy', 0.3);
rotateCube('xz', 0.3);
rotateCube('yw', 0.3);
drawLoop();
