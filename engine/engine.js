class Message {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getFirst() {
    return this.head;
  }
  removeItem() {
    this.head = this.head.next;
  }
  addItem(data) {
    var item = {data: data, next: this.head || this.tail};
    this.head = item;
  }
}
class MOJO {
  Engine(canvas) {

  }
}
// class Engine extends Mojo{
//   constructor(canvas) {
//     const gl = canvas.getContext("webgl");
//     if (!gl) {
//       alert("Unable to initialize WebGL. Your browser or machine may not support it.");
//       return;
//     }
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);
//   }
// }
