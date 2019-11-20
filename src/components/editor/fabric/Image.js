import React, {useEffect} from 'react';
import {fabric} from "fabric";

const Image = ({canvas, scale = 0.2, url }) => {

  useEffect(() => {
    new fabric.Image.fromURL(url, img => {
      img.scale(scale);
      canvas.add(img);
    })
  }, []) 

  return null;
}

export default Image;
