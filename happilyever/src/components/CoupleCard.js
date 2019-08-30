import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { deleteWedding, weddingToEdit } from "../actions";

const useStyles = makeStyles({
  card: {
    maxWidth: 245
  }
});

function CoupleCard(props) {
  console.log("PROPS IN COUPLE CARD", props);
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
          <Link to={`/edit/${props.id}`}>
            <Button
              onClick={() => props.weddingToEdit(props.id)}
              size="small"
              color="primary"
            >
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => props.deleteWedding(props.id)}
            size="small"
            color="primary"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default connect(
  null,
  {
    deleteWedding,
    weddingToEdit
  }
)(CoupleCard);
