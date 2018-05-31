const VERTEX_BUFFER = [[0, 0], [0, 1], [1, 0], [1, 1]];

const Single = (regl, props) => {
  return regl({
    vert: `
            precision lowp float;
            attribute vec2 position;
            uniform mat4 projection, view, model;
            varying vec2 vUv;

            void main () {
              vUv = position;
              vec2 adjusted = 1.0 - 2.0 * position;
              vec4 pos =  vec4(adjusted,0,1);
              gl_Position =  pos;
            }
         `,

    frag: `

          precision lowp float;
          uniform sampler2D tex0;
          uniform sampler2D tex1;
          uniform float tolerance;
          uniform float slope;
            varying vec2 vUv;

          float chromaKeyAlphaTwoFloat(vec3 color, vec3 keyColor, float tolerance, float slope)
            {
              float d = abs(length(abs(keyColor - color)));
              float edge0 = tolerance * (1.0 - slope);
              float alpha = smoothstep(edge0, tolerance, d);
              return 1. - alpha;
            }

          float luma(vec3 color) {
            return dot(color, vec3(0.299, 0.587, 0.114));
          }


          void main() {
           vec2 uv = vUv;
           vec3 vid0 = texture2D(tex0, uv).rgb;
           vec3 vid1 = texture2D(tex1, uv).rgb;
           vec3 keyColor = vec3(0.,0.,0.);

            float webcamKeyColor = chromaKeyAlphaTwoFloat(
               vec3(luma(vid0)),
               clamp(keyColor, 0.0, 1.),
               clamp(tolerance, 0.0001, 1.),
               clamp(slope, 0.001, 1.)
            );

            vec3 webcamMixedColor = mix(vid0, vid1, webcamKeyColor);
            gl_FragColor = vec4(webcamMixedColor,1);

          }

          `,

    uniforms: {
      tex0: regl.prop("tex0"),
      tex1: regl.prop("tex1"),
      tolerance: regl.prop("tolerance"),
      slope: regl.prop("slope"),
    },
    attributes: {
      position: VERTEX_BUFFER,
    },
    primitive: "triangle strip",
    count: 4,
  })(props);
};

export default Single;
