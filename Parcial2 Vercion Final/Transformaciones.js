function Geometria(vx){

    geom = new THREE.Geometry();
      var largoVertice = vx.length;
     for (i = 0; i < largoVertice; i++){
       [x,y,z]=[vx[i][0],vx[i][1],vx[i][2]]
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
      }
      return geom;

}    



function Traslation(vt) {
        var matriz = new THREE.Matrix4();
        matriz.set(1, 0, 0, vt[0],
                   0, 1, 0, vt[1],
                   0, 0, 1, vt[2],
                   0, 0, 0, 1);
        return matriz;
}
function Escalado(vs) {
    var matriz = new THREE.Matrix4();
    matriz.set(vs[0], 0, 0, 0,
               0, vs[1], 0, 0,
               0, 0, vs[2], 0,
               0, 0, 0, 1);
    return matriz;
}

function RotacionX(angulo) {
    var matriz = new THREE.Matrix4();
    var rad = THREE.Math.degToRad(angulo);
    var cos = Math.cos(rad);
    var sen = Math.sin(rad);
    matriz.set(1, 0, 0, 0,
               0, cos, -sen, 0,
               0, sen, cos, 0,
               0, 0, 0, 1);
    return matriz;
}
function RotacionY(angulo) {
    var matriz = new THREE.Matrix4();
    var rad = THREE.Math.degToRad(angulo);
    var cos = Math.cos(rad);
    var sen = Math.sin(rad);
    matriz.set(cos, 0, sen, 0,
               0, 1, 0, 0,
               -sen, 0, cos, 0,
               0, 0, 0, 1);
    return matriz;
}
function RotacionZ(angulo) {
    var matriz = new THREE.Matrix4();
    var rad = THREE.Math.degToRad(angulo);
    var cos = Math.cos(rad);
    var sen = Math.sin(rad);
    matriz.set(cos, -sen, 0, 0,
               sen, cos, 0, 0,
               0, 0, 1, 0,
               0, 0, 0, 1);
    return matriz;
  }


//escalado real
function EscaladoReal(objeto,vt,vs) {

    vp=[-vt[0],-vt[1],-vt[2]]
    objeto.applyMatrix(Traslation(vp));
    objeto.applyMatrix(Escalado(vs));
    objeto.applyMatrix(Traslation(vt));

}

//rotacion real
function RotacionRealX(obj, vp, angulo) {
    var vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(RotacionX(angulo));
    obj.applyMatrix(Traslation(vp));
}
function RotacionRealY(obj, vp, angulo) {
    var vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(RotacionY(angulo));
    obj.applyMatrix(Traslation(vp));
}
function RotacionRealZ(obj, vp, angulo) {
    var vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(RotacionZ(angulo));
    obj.applyMatrix(Traslation(vp));
}