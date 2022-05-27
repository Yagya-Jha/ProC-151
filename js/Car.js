AFRAME.registerComponent("car", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
              rot_speed: { type: "number", default: -1},
              scale:{ type: "number", default: 1}
  },
  init() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    this.el.setAttribute("position", {x: 0, y: 5, z: 80});
    this.el.setAttribute("rotation", { x: 0, y: -100, z: 0 });
    let s=this.data.scale;
    this.el.setAttribute("scale", {x:s , y:s , z:s});
  },
  tick(){
    const rot=this.el.getAttribute("rotation")
    y_rot = rot.y;
    y_rot += this.data.rot_speed;
    this.el.setAttribute("rotation", { x: 0, y: y_rot, z: 0 });
  }
});
