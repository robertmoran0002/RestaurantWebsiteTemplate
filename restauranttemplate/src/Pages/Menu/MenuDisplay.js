import React, { useEffect, useState } from 'react';
import GetMenuName from './components/GetMenuName';
import renderMenuTable from './components/RenderMenuTable';
import LoadingCard from '../../Components/LoadingCard';

function MenuDisplay({ catId }) {

    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const dummyVariable = catId;  // Used only to force an update when changing directly from one menu category to another

    async function getMenu() {
        fetch('https://localhost:7046/api/MenuItems?categoryId=' + catId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'XApiKey': 'z!@fjie@39dfH~zFoO91Cd9da!349czD39CzjgopI~GifgRRV4er93*$goCV3!'
            }
        }).then(response => response.json())
            .then(data => setMenu(data)).then(setIsLoaded(true))
            .catch((error) => { console.log(error) });
/*        console.log("Just seeing how many times I'm pulling from the database.")*/
    }

    useEffect(() => {
        getMenu()
    }, [dummyVariable]);

    const contents = isLoaded ? renderMenuTable(menu) : <LoadingCard/>;

    return (
        <div align="center">
            <GetMenuName catId={catId} category={{ category }} />
            {contents}
            <br /><br /><br /><br /><br />
            </div>
        )
}

export default MenuDisplay;