import React, {useState} from 'react';
import Models from './Models';

const ModelsContainer = () => {
    const [models, setModels] = useState( [
        { id: 11, title: "A1 PAX Wardrobe System Door" },
        { id: 22, title: "B1 PAX Wardrobe System 2 Door" }
      ]);
    return <Models models={models} />
}

export default ModelsContainer