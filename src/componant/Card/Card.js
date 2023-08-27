import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './card.css'
function KitchenSinkExample(props) {
    return (
        <Card style={{ width: '18rem' }} className='card'>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{}</Card.Subtitle>
            <Card.Text>
              {props.discription}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default KitchenSinkExample;