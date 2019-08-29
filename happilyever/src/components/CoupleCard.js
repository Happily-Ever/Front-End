import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Grid from "@material-ui/core/Grid";

const CoupleCard = props => (
  <Grid spacing={5} container>
    <Card>
      <Image src={props.pic} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.couple_name}</Card.Header>
        <Card.Meta>
          <span className="date">Married on {props.wedding_date}</span>
        </Card.Meta>
        <Card.Description>{props.wedding_theme}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name="globe" />
          Location: {props.wedding_location}
        </div>
      </Card.Content>
    </Card>
  </Grid>
);

export default CoupleCard;
