import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export default function LoadingCard() {
    return(
        <div align="center">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="holder.js/300px200" />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
        </div >
    )
}