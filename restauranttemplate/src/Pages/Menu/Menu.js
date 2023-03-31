import MenuDisplay from './MenuDisplay';
import React, { Component, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function Menu() {
    const location = useLocation();
    console.log(location);
    const { catId } = location.state;

    useEffect(() => {
    }, []);

    return (
        <div align="center">
            <MenuDisplay catId={catId} />
            </div>
        )
}



export default Menu;