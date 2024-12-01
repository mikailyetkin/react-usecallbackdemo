
import React, { useEffect, useState } from "react"
 
function List({ getItems }) {
    const [items, setItems] = useState([]);

    console.log("Rendered List");

    useEffect(() => {
        console.log("Fetching items");
        setItems(getItems());
    }, [getItems]);
 
    return <div>
        {items?.map(item => <div key={item}>{item}</div>)}
    </div>
}

export default List;