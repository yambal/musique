import p5 from 'p5'

export const sketch = (p: p5) => {
  let renderer: p5.Renderer
  let videoCapture: p5.Element
  p.setup = () => {
    renderer = p.createCanvas(p.windowWidth, p.windowHeight);
    videoCapture = p.createCapture('video')
    videoCapture.hide()
  }
  
  p.draw = () => {
    p.background(p.frameCount % 360, 80, 100);
  }

  p.mousePressed = () => {
    let fs = !!p.fullscreen()
    p.fullscreen(!fs)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}