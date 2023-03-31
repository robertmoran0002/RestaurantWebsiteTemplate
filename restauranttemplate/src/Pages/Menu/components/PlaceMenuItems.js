import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import VegetarianStamp from './VegetarianStamp';
import GlutenFreeStamp from './GlutenFreeStamp';

export default function placeMenuItems(menuItems, col, i) {
    var helpArr = []
    for (i; i < col; i++) {
        if (i < (menuItems.length)) {
            var vegetarian;
            var glutenFree;
            var allergy;

            if (menuItems[i].vegetarian == true) {
                vegetarian = <VegetarianStamp/>
            }

            if (menuItems[i].glutenFree == true) {
                glutenFree = <GlutenFreeStamp/>
            }

            allergy = <p>Allergies: {menuItems[i].allergy}</p>
            
            helpArr.push((
                <Col key={menuItems[i].menuItemId} xs md="auto" className="col-margins">
                    <Card className="card-menu">
                        <Card.Img src={menuItems[i].imagePath} fluid="true" />
                        <Card.Body align="center" className="btn btn-primary">
                            <Accordion className="btn btn-primary">
                                <Accordion.Item eventKey={i} >
                                    <Accordion.Header >{menuItems[i].name} ${menuItems[i].price}</Accordion.Header>
                                    <Accordion.Body className="btn btn-primary">{menuItems[i].description}<br/>
                                        {vegetarian}{glutenFree}
                                        {allergy}
                                    </Accordion.Body></Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }
        else {
            helpArr.push((<Col key={"blank" + i} xs md="auto"> </Col>))
        }
    }

    return helpArr;
}