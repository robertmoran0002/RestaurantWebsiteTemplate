import React, { Component } from 'react';
import LoadingCard from '../../Components/LoadingCard';
import renderMenuTable from '../Menu/components/RenderMenuTable';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            featuredCount: 0,
            menuItems: []
        };
    }

    componentDidMount() {
        this.getMenuItems();
    }

    getMenuItems() {
        fetch('https://localhost:7046/api/MenuItems?includeFeatured=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'XApiKey': 'z!@fjie@39dfH~zFoO91Cd9da!349czD39CzjgopI~GifgRRV4er93*$goCV3!'
            }
        }).then(response => response.json())
            .then(data => { this.setState({ menuItems: data, isLoaded: true }); })
            .catch((error) => { console.log(error) });
    }

    static fillFeaturedMenu(menuItems) {

        var featureMenu = []
        for (let m of menuItems) {
            if (m.featured === true) {
                if (m.active === true) {
                    featureMenu.push((m))
                }
            }
        }
        return featureMenu
    }

    render() {
        let contents = this.state.isLoaded ? renderMenuTable(HomePage.fillFeaturedMenu(this.state.menuItems)) : <LoadingCard />

        return (
            <div >
                <br/>
                <h1 align="center">Featured</h1><br/>
                {contents}
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default HomePage;
