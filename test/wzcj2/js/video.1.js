var AlphaVideo = function(videoUrl, loop){
    this.video = document.getElementById('game_video');
    this.canvas = document.getElementById("game_canvas");
    var req = new XMLHttpRequest();
    var src = videoUrl
    req.open('GET', src, true);
    req.responseType = 'blob';
    req.send();
    req.onload = function() {
        if (this.status == 200) {
            var vid = URL.createObjectURL(this.response);
            video.setAttribute("src", vid);
        }
    }
    // req.onprogress = function(e) {
    //     if (e.lengthComputable) {
    //         var percentComplete = ((e.loaded / e.total) * 100 | 0);
    //        console.log( `video load${percentComplete}%`)
    //     }
    // }



    var gl_contextAttributes = {
        antialias: false
    }; // iOS10 bug!
    var gl = null;
    for (var i = 0; i < 4; i++) {
        gl = canvas.getContext(["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"][i], gl_contextAttributes)
        if (gl){
            break;

        }
    }
    if (!gl){
        alert("No WebGL support!");
    }
    gl.clearColor(0, 0, 0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // prepare WebGL
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    var vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, `
            attribute vec2 vx;
                varying vec2 tx;
                void main(){
                gl_Position= vec4(vx.x*2.0-1.0,1.0-vx.y*2.0,0,1);
                tx=vx;
            }`);
    gl.compileShader(vs);
    var ps = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(ps, `
        precision mediump float;
            uniform sampler2D sm;
            varying vec2 tx;
            void main(){
            gl_FragColor = vec4(
                texture2D(sm, tx).rgb,
                texture2D(sm, tx + vec2(-0.5, 0)).r
            );
        }`);
    gl.compileShader(ps);
    var shader = gl.createProgram();
    gl.attachShader(shader, vs);
    gl.attachShader(shader, ps);
    gl.linkProgram(shader);
    gl.useProgram(shader);
    var vx_ptr = gl.getAttribLocation(shader, "vx");
    gl.enableVertexAttribArray(vx_ptr);
    gl.uniform1i(gl.getUniformLocation(shader, "sm"), 0);
    var vx = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vx);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);
    var ix = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ix);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // gl.generateMipmap(gl.TEXTURE_2D);
    // load the video

    var videoready = false;
    video.oncanplay = function() {
        videoready = true;
    }
    video.onerror = function() {
        var err = "unknown error";
        switch (video.error.code) {
            case 1:
                err = "video loading aborted";
                break;
            case 2:
                err = "network loading error";
                break;
            case 3:
                err = "video decoding failed / corrupted data or unsupported codec";
                break;
            case 4:
                err = "video not supported";
                break;
        };
        // log("Error: " + err + " (errorcode=" + video.error.code + ")", "color:red;");
    };
    // video.src = "abc.mp4";
    // try to disable the iPhone video fullscreen mode:
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    if( loop ){
        video.setAttribute("loop", "loop");
    }else{
        video.removeAttribute("loop");   
    }
    if (typeof WeixinJSBridge == "object") {
        WeixinJSBridge.invoke("WeixinJSBridgeReady", {}, function(e) {
            video.play(); //播放视频
        });
    } else {
        document.addEventListener("WeixinJSBridgeReady", function(e) {
            video.play(); //播放视频
        }, false);
    }
    // try to start playing
    // fix chrome video play error: 
    //  https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
    var playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
    // iOS - start video via touch
    // var needtouch = false;

    // function iOS_video_touch_start() {
    //     console.log("got the touch, try playing");
    //     window.removeEventListener("touchstart", iOS_video_touch_start, true);
    //     video.play();
    //     needtouch = false;
    // }
    var errcnt = 0;
    // requestAnimationFrame loop
    function frameloop() {
        // if (video && video.paused) {
        //     if (needtouch == false) {
        //         needtouch = true;
        //         window.addEventListener("touchstart", iOS_video_touch_start, true);
        //     }
        // }
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        if (videoready) {
            try {
                // upload the video frame
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
            } catch (e) {
                // log only the first few errors
                errcnt++;
                if (errcnt < 10)
                    console.log(e, "color:red;");
                else if (errcnt == 10)
                console.log("...", "color:red;");
            }
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, vx);
        gl.vertexAttribPointer(vx_ptr, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ix);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        window.requestAnimationFrame(frameloop);
    }
    frameloop();
} 
