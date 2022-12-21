const randomColor = function () {
    var color ="#4B0082"
    return color;
  }
  
  const randomNum = function (minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      default:
        return 0;
    }
  }
  
  const SPEED = 200
  const WAITING_SPACE = 300
  
  export default class {
    constructor(canvas) {
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.move_count = 0
    }
    paint () {
      if (!this.canvas) {
        return
      }
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    reset (waiting) {
      // 重置到起点
      this.inited = true
      this.color = randomColor()
      this.width = randomNum(90,100)
      this.height = randomNum(400, 450)
      this.x = this.canvas.width + WAITING_SPACE
      this.up = Math.round(Math.random())
      this.y = this.up ? 0 : this.canvas.height - this.height
      this.next_trigger = false
      this.triger_space = this.width + randomNum(160, 200)
      this.waiting = waiting
    }
  
    setNext (pillar) {
      this.next = pillar
    }
  
    move (t) {
      if (!this.inited || this.waiting) {
        return
      }
      this.x -= t * SPEED;
      if (this.x < -WAITING_SPACE) {
        this.reset(true)
      }
      if ((this.x + this.width) < ((this.canvas.width + WAITING_SPACE) - this.triger_space) && !this.next_trigger) {
        this.next && this.next.reset()
        this.next_trigger = true
      }
      this.paint();
    }
  }