import {
	FooterLink
} from "./FooterStyle";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function CategoryLinks() {
	const [category, setCategory] = useState([]);
	var menuLinks = category.map((catItems) => buildDropdown(catItems));

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
/*		console.log("Pulled data for the footer.")*/
	}

	useEffect(() => {
		getCategory()
	}, []);

	function buildDropdown(catItem) {

		return (
			<FooterLink key={catItem.menuCategoryId }><Link to={"/Category/" + catItem.menuCategoryId} state={{ catId: catItem.menuCategoryId }}><FooterLink>{catItem.menuCategoryName}</FooterLink></Link></FooterLink>
		)
	}

	return menuLinks;
}