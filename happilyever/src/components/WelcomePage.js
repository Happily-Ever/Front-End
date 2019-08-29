import React from "react";
// Image Imports
import hero from "../img/hero.png";
import rings from "../img/rings.png";
import couples from "../img/couples.png";
// Css Imports
import "../../src/welcomePage.css";
// Material Ui Imports
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//Material Ui UseStyles
import { connect } from "react-redux";
import { weddingsList } from "../actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: "50px",
    margin: "0 auto",
    background: "#00A3FF"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  grid: {
    marginTop: "50px"
  }
});

const WelcomePage = props => {
  const classes = useStyles();
  return (
    <>
      <Paper
        component="img"
        src={hero}
        elevation="20"
        width="100%"
        height="400px"
        square="true"
      />
      <div className="box">
        <h4>Welcome, Wedding Planner !</h4>
      </div>
      <Container>
        <Grid container spacing={1} className={classes.grid}>
          <Grid item lg={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    style={{ color: "#fff" }}
                  >
                    Add a Wedding
                  </Typography>
                  <img
                    src={rings}
                    style={{
                      marginLeft: "90px",
                      height: "125px",
                      paddingTop: "20px"
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card className={classes.card}>
              <CardActionArea onClick={props.weddingsList}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    style={{ color: "#fff" }}
                  >
                    View Couples
                  </Typography>
                  <img
                    src={couples}
                    style={{ marginLeft: "90px", paddingTop: "25px" }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    weddings: state.weddingReducer.weddings
  };
};

export default connect(
  mapStateToProps,
  { weddingsList }
)(WelcomePage);
