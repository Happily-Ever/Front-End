import React, { useEffect } from "react";
import axios from "axios";
import CoupleCard from "./CoupleCard.js";
import styled from "styled-components";
import { connect } from "react-redux";
import { weddingsList } from "../actions";
import Grid from "@material-ui/core/Grid";
import LoadingScreen from "react-loading-screen";
import couples from "../img/couples.png";
import Container from "@material-ui/core/Container";

const DivWed = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const DivCard = styled.div`
  margin: 1rem;
`;

function CouplesList(props) {
  useEffect(() => {
    props.weddingsList();
  }, []);

  if (!props.weddings) {
    return (
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc={couples}
        text="Loading Weddings"
      />
    );
  }

  return (
    <Grid container spacing={12}>
      <Container maxWidth="lg">
        <DivWed>
          {props.weddings.map(wedding => {
            return (
              <Grid item={6}>
                <DivCard>
                  <CoupleCard
                    wedding={wedding}
                    key={wedding.id}
                    pic={wedding.item_photo}
                    couple_name={wedding.couple_name}
                    wedding_date={wedding.wedding_date}
                    wedding_theme={wedding.wedding_theme}
                    wedding_location={wedding.wedding_location}
                    id={wedding.id}
                  />
                </DivCard>
              </Grid>
            );
          })}
        </DivWed>
      </Container>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    weddings: state.weddingReducer.weddings,
    isLoading: state.weddingReducer.isLoading
  };
};

export default connect(
  mapStateToProps,
  { weddingsList }
)(CouplesList);
