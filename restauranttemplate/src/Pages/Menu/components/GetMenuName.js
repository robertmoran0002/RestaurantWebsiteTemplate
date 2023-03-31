import React, { useEffect, useState } from 'react';

function GetMenuName(catId) {
    const [category, setCategory] = useState([]);
    const dummyVariable = catId;    // Used only to force an update when changing directly from one menu category to another

    async function getCategory() {
        fetch('https://localhost:7046/api/MenuCategories/' + catId.catId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'XApiKey': 'z!@fjie@39dfH~zFoO91Cd9da!349czD39CzjgopI~GifgRRV4er93*$goCV3!'
            }
        }).then(response => response.json())
            .then(data => setCategory(data))
            .catch((error) => { console.log(error) });
    }

    useEffect(() => {
        getCategory()
    }, [dummyVariable]);

    return (
        <>
            <br/>
            <h1>{category.menuCategoryName} Menu</h1>
        </>
        )
    
}

export default GetMenuName;