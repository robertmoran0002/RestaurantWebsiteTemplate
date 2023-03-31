import React, { useEffect, useState } from 'react';

async function FetchCategories() {
    const [category, setCategory] = useState([]);

    async function getCategory() {
        fetch('https://localhost:7046/api/MenuCategories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'XApiKey': 'z!@fjie@39dfH~zFoO91Cd9da!349czD39CzjgopI~GifgRRV4er93*$goCV3!'
            }
        }).then(response => response.json())
            .then(data => setCategory(data))
            .catch((error) => { console.log(error) });
        console.log("Testing the FetchCategories class.")
    }

    useEffect(() => {
        getCategory()
    }, []);
}

export default FetchCategories;