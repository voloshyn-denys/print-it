import React, {useState} from 'react';
import Autocomplete from './Autocomplete';

const AutocompleteContainer = () => {
    const [items, setItems] = useState([
        { id: 11111, title: "Service One" },
        { id: 22222, title: "Service Two" },
        { id: 33333, title: "Service Three" }
      ]);
    return <Autocomplete items={items} />
}

export default AutocompleteContainer;