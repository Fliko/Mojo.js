class Message {
  constructor() {
    this.tail = null;
    this.head = this.tail;
  }
  getMessage() {
    return this.tail === null ? null : this.tail.data;
  }
  removeItem() {
    if(this.tail === null) {
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  addItem(data) {
    var item = {data: data,
                next: this.tail,
                prev: null};
    if(!this.head) {
      this.head = item;
      this.tail = this.head
    } else {
      this.head.prev = item;
      this.head = item;
    }
  }
}
class MOJO {
  Engine(canvas) {

  }
}
module.exports.Message = Message;
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
