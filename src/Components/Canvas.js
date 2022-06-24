import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    const {cards} = props;
    const canvasRef = useRef(null);
    
    const draw = ctx => {
        ctx.fillStyle = '#000000'
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
        if (cards.length > 0) {
          console.log('draw cards: ' + cards[0]);
          ctx.fillText(cards[0], 70, 70);

        }
      }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        draw(context);
      }, [draw]);
      return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;