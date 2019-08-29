import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
  },
});

export default function CoupleCard(props) {
  const classes = useStyles();

  return (
    <Grid item>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="260"
          image={props.pic}
          title={props.couple_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.couple_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Theme: {props.wedding_theme}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Married on {props.wedding_date} in {props.wedding_location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}


// const CoupleCard = props => (
//   <Grid spacing={5} container>
//     <Card>
//       <Image src={props.pic} wrapped ui={false} />
//       <Card.Content>
//         <Card.Header>{props.couple_name}</Card.Header>
//         <Card.Meta>
//           <span className="date">Married on {props.wedding_date}</span>
//         </Card.Meta>
//         <Card.Description>{props.wedding_theme}</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div>
//           <Icon name="globe" />
//           Location: {props.wedding_location}
//         </div>
//       </Card.Content>
//     </Card>
//   </Grid>
// );

// export default CoupleCard;
