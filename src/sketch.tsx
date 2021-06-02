import p5 from 'p5'
import React from 'react';

export const sketch = (p: p5) => {
  let videoCapture: p5.Element
  
  p.setup = () => {
    const Renderer: p5.Renderer = p.createCanvas(p.windowWidth, p.windowHeight);
    // const Renderer: p5.Renderer = p.createCanvas(480, 480)
    // Renderer.parent('Renderer');
    videoCapture = p.createCapture('video')
    videoCapture.hide()
  }
  
  p.draw = () => {
    p.background(p.frameCount % 360, 80, 100);
  }

  p.mousePressed = () => {
    let fs = p.fullscreen();
    p.fullscreen(!fs);
  }
}