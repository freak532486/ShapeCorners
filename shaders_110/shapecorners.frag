#version 110

uniform sampler2D sampler;
uniform sampler2D corner;
uniform float shadow_strength;

varying vec2 texcoord0;

void main()
{
    vec4 tex = texture2D(sampler, texcoord0);
    vec4 texCorner = texture2D(corner, texcoord0);
    tex.a = texCorner.a;
    if (tex.a != 0) {
        tex = vec4(tex.r * (1 - shadow_strength), tex.g * (1 - shadow_strength), tex.b * (1 - shadow_strength), tex.a);
    }
    gl_FragColor = tex;
}
