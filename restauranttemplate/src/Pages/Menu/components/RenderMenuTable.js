import FetchMenu from './FetchMenu';
import placeMenuItems from './PlaceMenuItems';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

export default function renderMenuTable(menu) {
    const col = 2;
    var rowArr = [];

    for (let i = 0; i < menu.length; i += col) {

        rowArr.push((
            <Row key={i} className="justify-content-md-center">
                {placeMenuItems(menu, i + col, i)}
            </Row>
        ))
    }
    
    return rowArr;
}