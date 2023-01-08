import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Cursor() {
  return (
    <>
  <AnimatedCursor
      innerSize={24}
      outerSize={16}
      color='231, 76, 60'
      outerAlpha={0.5}
      innerScale={2}
      outerScale={5}
      trailingSpeed={10}      
      innerStyle={{
        border: '1px solid #fff'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </>
  
  );  
}

export default Cursor