import React, { useState } from "react";
import './Editor.css';

import CanvasArea from "./fabric/CanvasArea";
import Image from "./fabric/Image";

import ImagesEditArea from './ImagesEditArea'

const Editor = () => {
  const [image_url, setImageUrl] = useState(null);

  const addImage = (evt) => {
    let reader = new FileReader();
    let file = evt.target.files[0];

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="editor">
      <div className="editor_area">
        <div className="editor_control">
          <p>CONTROL PANEL</p>
        </div>

        <CanvasArea
          width={window.innerWidth - 300}
          height={window.innerHeight - 46 - 58}
        >
          {image_url && <Image url={image_url} />}
        </CanvasArea>

        <div className="editor_zoom">+ 1:1 FIT -</div>
      </div>

      <aside className="editor_aside settings">
        <ImagesEditArea title="Images" onAddImage={addImage} />
      </aside>
    </div>
  );
}

export default Editor;
