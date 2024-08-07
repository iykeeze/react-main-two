import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    

 function player ({player_name, player_age, player_club, player_jersey, player_image, player_country}) {
  
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={player_image} />
          <Card.Body>
            <Card.Title>{[player_name]}</Card.Title>

            <Card.Text>
              {player_club}
            </Card.Text>

            <Card.Text>
              {player_age}
            </Card.Text>

            <Card.Text>
              {player_jersey}
            </Card.Text>

<Card.Text>{player_country}</Card.Text>

            
          </Card.Body>
        </Card>
      )
    };
    
    export default player;
  

