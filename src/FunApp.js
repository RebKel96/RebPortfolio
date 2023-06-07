import React, { useRef, useEffect } from 'react';

function FunApp() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas element and its context
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the initial line style
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.strokeStyle = 'purple';


    // Set up the mouse event handlers
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const handleMouseDown = (event) => {
      isDrawing = true;
      lastX = event.offsetX;
      lastY = event.offsetY;
    };

    const handleMouseMove = (event) => {
      if (isDrawing) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        lastX = event.offsetX;
        lastY = event.offsetY;
      }
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const handleMouseOut = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} width="500" height="500" style={{ border: '1px solid black' }} />;
}

export default FunApp;