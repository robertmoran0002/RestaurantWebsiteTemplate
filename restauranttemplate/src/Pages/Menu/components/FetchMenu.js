function FetchMenu() {

    var menuItems = []
        fetch('https://localhost:7046/api/MenuItems', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'XApiKey': 'z!@fjie@39dfH~zFoO91Cd9da!349czD39CzjgopI~GifgRRV4er93*$goCV3!'
            }
        }).then(response => response.json())
            .then(data => { this.setState({ menuItems: data }); })
            .catch((error) => { console.log(error) });

    return menuItems;
}

export default FetchMenu;