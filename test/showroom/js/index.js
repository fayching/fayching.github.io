// 检测是否支持 webgl
var useWebgl;

function webglAvailable() {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
}
if (webglAvailable()) {
    // useWebgl = true;
} else {
    // useWebgl = false;
}
var useWebgl = true;

var distanceX = 15, // 左右移动距离
    distanceY = 8, // 上下移动距离
    path = "images/clan/", // 图片路径
    scenebg = path + "bg.jpg", // 场景背景
    placeholderImg = path + "texture.jpg", // 占位图（可忽略，一般无须更改）
    // 道具
    Meshs = {
        "haibao": [
            [127, 281],
            path + "haibao.png", {
                x: -450,
                y: 135,
                z: 400
            },
        ],
        "shafa": [
            [317, 267],
            path + "shafa.png", {
                x: 378,
                y: -258,
                z: 400
            }
        ],
        "clock": [
            [102, 95],
            path + "clock.png", {
                x: -269,
                y: 258,
                z: 400
            }
        ],
        "hehuanshu": [
            [58, 78],
            path + "hehuanshu.png", {
                x: -450,
                y: -20,
                z: 390
            }
        ],
        "zai": [
            [56, 69],
            path + "zai.png", {
                x: 313,
                y: 221,
                z: 400
            }
        ],
        "tususu": [
            [49, 69],
            path + "tususu.png", {
                x: 320,
                y: 142,
                z: 400
            }
        ],
        "yeyan": [
            [51, 62],
            path + "yeyan.png", {
                x: 322,
                y: 73,
                z: 400
            }
        ],
        "sujiuer": [
            [34, 68],
            path + "sujiuer.png", {
                x: 320,
                y: 2,
                z: 400
            }
        ],
        "xiaolu": [
            [49, 66],
            path + "xiaolu.png", {
                x: 318,
                y: -76,
                z: 400
            }
        ],
        "shudie": [
            [130, 80],
            path + "shudie.png", {
                x: 495,
                y: 280,
                z: 400
            }
        ],
        "game": [
            [113, 46],
            path + "game.png", {
                x: 502,
                y: 173,
                z: 400
            }
        ],
        "taideng": [
            [56, 78],
            path + "taideng.png", {
                x: 18,
                y: -8,
                z: 400
            }
        ],
        "computer": [
            [88, 66],
            path + "computer.png", {
                x: -56,
                y: -18,
                z: 400
            }
        ],
        "ytch": [
            [64, 80],
            path + "ytch.png", {
                x: -150,
                y: 30,
                z: 400
            }
        ],
        "qtds": [
            [55, 56],
            path + "qtds.png", {
                x: -212,
                y: 181,
                z: 400
            }
        ],
        "hulu": [
            [38, 56],
            path + "hulu.png", {
                x: -326,
                y: 182,
                z: 400
            }
        ],
        "huoying": [
            [102, 37],
            path + "huoying.png", {
                x: -272,
                y: 132,
                z: 400
            }
        ],
        "deng": [
            [51, 78],
            path + "deng.png", {
                x: -320,
                y: 63,
                z: 400
            }
        ],
        "baozou": [
            [57, 60],
            path + "baozou.png", {
                x: -241,
                y: -20,
                z: 400
            }
        ],
        "goudian": [
            [107, 52],
            path + "goudian.png", {
                x: -53,
                y: -136,
                z: 400
            }
        ],
        "dianshi": [
            [216, 128],
            path + "dianshi.png", {
                x: 567,
                y: -34,
                z: 400
            }
        ],
        "dengzi": [
            [268, 300],
            path + "dengzi.png", {
                x: -508,
                y: -252,
                z: 400
            }
        ],
    };
    Mesh2={
        "p1": [
            [60, 60],
            path + "p1.jpg", {
                x: -178,
                y: -200,
                z: 400
            }
        ],
        "p2": [
            [60, 60],
            path + "p2.jpg", {
                x: -128,
                y: -200,
                z: 400
            }
        ],
        "p3": [
            [60, 60],
            path + "p3.jpg", {
                x: -58,
                y: -200,
                z: 400
            }
        ],
        "p4": [
            [60, 60],
            path + "p4.jpg", {
                x: 8,
                y: -200,
                z: 400
            }
        ],
        "p5": [
            [60, 60],
            path + "p5.jpg", {
                x: 60,
                y: -200,
                z: 400
            }
        ],
        "p6": [
            [60, 60],
            path + "p6.jpg", {
                x: 128,
                y: -200,
                z: 400
            }
        ],
        "p7": [
            [60, 60],
            path + "p7.jpg", {
                x: -168,
                y: -200,
                z: 384
            }
        ],
        "p8": [
            [60, 60],
            path + "p8.jpg", {
                x: -118,
                y: -200,
                z: 385
            }
        ],
        "p9": [
            [60, 60],
            path + "p9.jpg", {
                x: -48,
                y: -200,
                z: 384
            }
        ],
        "p10": [
            [60, 60],
            path + "p10.jpg", {
                x: 18,
                y: -200,
                z: 384
            }
        ],
        "p11": [
            [60, 60],
            path + "p11.jpg", {
                x: 68,
                y: -200,
                z: 384
            }
        ],
        "p12": [
            [60, 60],
            path + "p12.jpg", {
                x: 138,
                y: -200,
                z: 384
            }
        ],
    }

// 三要素：场景、相机、渲染器
var scene, camera, renderer;

var texture_placeholder,
    isUserInteracting = false,
    onMouseDownMouseX = 0,
    onMouseDownMouseY = 0,
    lon = 90,
    onMouseDownLon = 0,
    lat = 0,
    onMouseDownLat = 0,
    phi = 0,
    theta = 0,
    objects,
    objects_array,
    target = new THREE.Vector3();

var mouse2D = new THREE.Vector2(),
    mouse3D = new THREE.Vector3(),
    controls;

var raycaster = new THREE.Raycaster(),
    SELECTED;


// 容器大小
var winW, winH, clanW, clanH;

function setWH() {
    winW = document.documentElement.clientWidth,
        clanW = winW,
        clanH = winW * 0.8;
}
setWH();

init();
animate();



// 初始化
function init() {
    // var canvas2 = document.getElementById('thecanvas');
    // var ctx = canvas2.getContext("2d");
    // initCanvas();

    function initCanvas() {

        var v = document.getElementById("vv");
        v.load();
        v.muted = true;
        v.play();
        var videoWidth = 640;
        var videoHeight = 256;

        v.addEventListener('loadedmetadata', function(){
            //重置高宽
            videoWidth = v.videoWidth;
            videoHeight = v.videoHeight;
            canvas2.width = v.videoWidth;
            canvas2.height = v.videoHeight;

        });

        //渲染画面
        v.addEventListener('play',function() {
            //console.log("play");

            function render(){
                ctx.drawImage(v, 0, 0, videoWidth, videoHeight);
                requestAnimationFrame( render );
            }
            render();
        });

    }

    var chamber, geometry, material, mesh;
    chamber = document.getElementById('chamber');

    // 构建模型场景
    scene = new THREE.Scene();
    // scene.position.x = -150;
    scene.position.y = 0;
    scene.position.z = -320;

    // 构建相机
    // PerspectiveCamera 透视相机（视界大小，横纵比，视野开始，视野结束）
    camera = new THREE.PerspectiveCamera(80, clanW / clanH, 1, 1000);


    var controls2 = new THREE.DeviceOrientationControls(camera, true);
    controls2.connect();
    controls2.update();

    controls = new THREE.TrackballControls(camera,chamber);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    texture_placeholder = document.createElement('canvas');
    texture_placeholder.width = 50;
    texture_placeholder.height = 50;

    var context = texture_placeholder.getContext('2d');
    context.fillStyle = 'rgb( 200, 200, 200 )';
    context.fillRect(0, 0, texture_placeholder.width, texture_placeholder.height);

    var materials = [
        loadTexture(placeholderImg), // right
        loadTexture(placeholderImg), // left
        loadTexture(placeholderImg), // top
        loadTexture(placeholderImg), // bottom
        loadTexture(scenebg, addProp), // back
        loadTexture(placeholderImg) // front
    ];

    //地板
    // var groundGeometry = new THREE.BoxGeometry( 1200, 1020, 1 );//new THREE.PlaneGeometry(10, 10, 1, 1);
    // var texture = new THREE.Texture( canvas2 );
    // var material2 = new THREE.MeshBasicMaterial( { map: texture } );
    //
    // var ground = new THREE.Mesh( groundGeometry, material2 );
    // ground.position.x = 0;
    // ground.position.y = 0;
    // ground.position.z = 40;
    // texture.needsUpdate = true;
    // scene.add(ground);

    // 添加场景
    geometry = new THREE.BoxGeometry(1200, 1020, 1200, 10, 10, 10);
    material = new THREE.MeshFaceMaterial(materials);
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = -1;
    scene.add(mesh);



    // 添加物体
    function addProp() {
        var loader = new THREE.TextureLoader();

        objects = {};
        objects_array = [];
        var ratio = 1600 / 1200 * 3.51;

        for (var k in Mesh2) {
            // 结构
            geometry = new THREE.BoxGeometry(Mesh2[k][0][0] / ratio, Mesh2[k][0][1] / ratio, 0);
            // 材质
            material = new THREE.MeshBasicMaterial({
                map: loader.load(Mesh2[k][1]),
                transparent: true,
                opacity: 0,
            });
            material.map.minFilter = THREE.LinearFilter;
            // 坐标
            position = Mesh2[k][2];

            sphere = new THREE.Mesh(geometry, material);

            sphere.position.x = Mesh2[k][2].x / ratio;
            sphere.position.y = Mesh2[k][2].y / ratio;
            sphere.position.z = Mesh2[k][2].z;
            // sphere.position.copy(position);

            objects_array.push(sphere);
            objects[k] = sphere;
            scene.add(sphere);
        }
    }

    // 渲染器
    if (useWebgl) {
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
    } else {
        renderer = new THREE.CanvasRenderer({
            alpha: true
        });
    }
    renderer.setClearColor(00000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clanW, clanH);
    chamber.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    THREE.DefaultLoadingManager.onProgress = function(item, loaded, total) {

    };
    THREE.DefaultLoadingManager.onLoad = function() {
        // 道具
        for (var k in objects) {
            // 显示所有道具
            objects[k].material.opacity = 1;
            // 物体回调函数
            objects[k].callback = function() {
                console.log(this.id);
            }
        }
        var onPointerDownPointerX, onPointerDownPointerY;
        // touch
        $('#chamber').on('touchstart', function(event) {
            onDocumentTouchStart(event);
        });
        $('#chamber').on('touchmove', function(event) {
            onDocumentTouchMove(event);
        });
    };

}

function loadTexture(path, callback) {
    var texture = new THREE.Texture(texture_placeholder);
    var material = new THREE.MeshBasicMaterial({
        map: texture,
        overdraw: 0.5
    });
    material.map.minFilter = THREE.LinearFilter;
    var image = new Image();
    image.onload = function() {
        texture.image = this;
        texture.needsUpdate = true;
        if (callback) {
            callback()
        }
    };
    image.src = path;
    return material;
}

function onWindowResize() {
    setWH();

    camera.aspect = clanW / clanH;
    camera.updateProjectionMatrix();

    renderer.setSize(clanW, clanH);
}

function bindAction(x, y) {
    mouse3D.set(x, y, 0.5);
    raycaster.setFromCamera(mouse3D.clone(), camera);
    var intersects = raycaster.intersectObjects(objects_array);
    if (intersects.length > 0) {
        controls.enabled = false;
        SELECTED = intersects[0].object;
        SELECTED.position.y += 1;
        window.setTimeout(function() {
            SELECTED.position.y -= 1;
        }, 100);
        SELECTED.callback();
    }
}

function limitPos() {
    // lon初始值90  lat初始值0
    if (lon >= (90 + distanceX)) {
        lon = (90 + distanceX);
    } else if (lon <= (90 - distanceX)) {
        lon = (90 - distanceX);
    }

    if (lat >= distanceY) {
        lat = distanceY;
    } else if (lat <= -distanceY) {
        lat = -distanceY;
    }
}

function onDocumentTouchStart(event) {
    if (event.touches.length == 1) {
        event.preventDefault();
        onPointerDownPointerX = event.touches[0].pageX;
        onPointerDownPointerY = event.touches[0].pageY;
        onPointerDownLon = lon;
        onPointerDownLat = lat;

        mouse2D.x = (event.touches[0].pageX / clanW) * 2 - 1;
        mouse2D.y = -(event.touches[0].pageY / clanH) * 2 + 1;
        bindAction(mouse2D.x, mouse2D.y);
    }
}

function onDocumentTouchMove(event) {
    if (event.touches.length == 1) {
        event.preventDefault();
        lon = (onPointerDownPointerX - event.touches[0].pageX) * 0.1 + onPointerDownLon;
        lat = (event.touches[0].pageY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
        limitPos();
    }
}

// 动画循环渲染
function animate() {
    requestAnimationFrame(animate);
    update();
}

function update() {
    // 场景旋转
    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);

    target.x = 500 * Math.sin(phi) * Math.cos(theta);
    target.y = 500 * Math.cos(phi);
    target.z = 500 * Math.sin(phi) * Math.sin(theta);

    controls.update();
    controls2.update();

    // 视野中心
    camera.lookAt(target);
    renderer.render(scene, camera);
}
