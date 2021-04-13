#version 140

uniform sampler2D sampler;
uniform sampler2D corner;
uniform float shadow_strength;

in vec2 texcoord0;
out vec4 fragColor;

void main(void)
{
    vec4 tex = texture(sampler, texcoord0);
    vec4 texCorner = texture(corner, texcoord0);
    tex.a = texCorner.a;
    if (tex.a != 0) {
        tex = vec4(tex.r * (1 - shadow_strength), tex.g * (1 - shadow_strength), tex.b * (1 - shadow_strength), tex.a);
    }
    fragColor = tex;
}
