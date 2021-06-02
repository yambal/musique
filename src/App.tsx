import React from 'react';
import p5 from 'p5'
import { sketch } from './sketch'

export const App = () => {
  const node = React.useRef(null)

  React.useEffect(() => {
    new p5(sketch, node?.current || undefined)
  },[node])

  return (
    <div ref={node} style={{
      overflow: "hidden",
      maxHeight: "100vh"
    }}/>
  );
}
