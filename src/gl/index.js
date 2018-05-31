import Emitter from "utils/emitter";
import Bridge from "store/bridge";
import loop from "raf-loop";
import Regl from "regl";
import Two from "./two";

const REGL = canvas => {
  const regl = Regl({
    canvas: canvas,
    attributes: { stencil: true, preserveDrawingBuffer: true },
  });

  const createTexture = el =>
    regl.texture({
      format: "rgb",
      width: 240,
      height: 180,
      type: "uint8",
      mag: "nearest",
      min: "nearest",
      wrapS: "clamp",
      wrapT: "clamp",
      data: el,
    });


  let textures = [];
  let t = performance.now()

  const raf = loop(function(tick) {
    /*texs[0].subimage({
      format: "rgb",
      width: 240,
      height: 180,
      wrapS: "clamp",
      wrapT: "clamp",
      data: assets.els[0],
    });
    texs[1].subimage({
      format: "rgb",
      width: 240,
      height: 180,
      wrapS: "clamp",
      wrapT: "clamp",
      data: assets.els[1],
    });*/

    let n = performance.now();
    if (n - t >= 40) {
      for (var i = 0; i < textures.length; i++) {
        const el = Bridge.videoEls[i];
        if (el.readyState >= el.HAVE_CURRENT_DATA) {
          textures[i].subimage(el);
        }
      }
      regl.clear({
        color: [0, 0, 0, 1],
        depth: true,
        stencil: false,
      });
      drawTwo({
        tex0: textures[0],
        tex1: textures[1],
        tolerance: 0.2,
        slope: 0.2,
      });
      t = n;
    }
  });

  if (Bridge.videosLoaded) {
    textures = Bridge.videoEls.map(el => createTexture(el));
      raf.start()
  } else {
    Emitter.on("videos:ready", els => {
      textures = els.map(el => regl.texture(el));
      raf.start()
    });
  }

  function destroy() {
    regl.destroy();
  }

  function draw() {
    regl.clear({
      color: [0, 0, 0, 1],
      depth: true,
      stencil: false,
    });
  }

  function drawTwo(props) {
    return Two(regl, props);
  }

  function read() {
    return regl.read(new Uint8Array(WIDTH * HEIGHT * 4));
  }

  return {
    read,
    drawTwo,
  };
};

export default REGL;
