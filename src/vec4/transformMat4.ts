export function vec4transformMat4(out: number[], vec4: number[], mat4: number[]) {
    const x = vec4[0];
    const y = vec4[1];
    const z = vec4[2];
    const w = vec4[3];
    out[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z + mat4[12] * w;
    out[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z + mat4[13] * w;
    out[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z + mat4[14] * w;
    out[3] = mat4[3] * x + mat4[7] * y + mat4[11] * z + mat4[15] * w;
}
