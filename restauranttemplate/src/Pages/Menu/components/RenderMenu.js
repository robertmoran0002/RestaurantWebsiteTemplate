import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function RenderMenu(menu) {

    return (
            <Col key={menu.menuItemId} xs lg="2" className="col-margins">
                <Card className="card-menu">
                    <Card.Img src={menu.imagePath} fluid="true" />
                    <Card.Body align="center" className="btn btn-primary">
                        <Accordion className="btn btn-primary">
                            <Accordion.Item eventKey={menu.menuItemId} >
                                <Accordion.Header >{menu.name} ${menu.price}</Accordion.Header>
                                <Accordion.Body className="btn btn-primary">{menu.description}</Accordion.Body></Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col>
        )
}

export default RenderMenu;