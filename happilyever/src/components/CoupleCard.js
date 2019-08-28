import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CoupleCard = (props) => (
  <Card>
    <Image src={props.pic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.spouse1} and {props.spouse2}</Card.Header>
      <Card.Meta>
        <span className='date'>Married on {props.date}</span>
      </Card.Meta>  
      <Card.Description>
        {props.desc}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='bell outline' />
        Planner: {props.planner}
      </a>
    </Card.Content>
  </Card>
)

export default CoupleCard;