import React, {useEffect, useState} from 'react';
import axios from "axios";
import CoupleCard from "./CoupleCard.js";
import styled from "styled-components"

const DivWed = styled.div`
margin: 1rem auto;
width: 50%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
`

const DivCard = styled.div`
margin: 2rem;
`

export default function CouplesList() {
    
const [couple, addCouple] = useState([]);

useEffect(()=>{
    axios.get("https://lambda-wedding-planner.herokuapp.com/api/posts/all")
    .then(function(response){
        addCouple(response.data);
    })}, []);
return(
    <DivWed>
    {couple.map(couple => {
      return(
<DivCard>
      <CoupleCard 
        key={couple.id}
        pic={couple.item_photo}
        couple_name={couple.couple_name}
        wedding_date={couple.wedding_date}
        wedding_theme={couple.wedding_theme}
        wedding_location={couple.wedding_location}
    />
    </DivCard>)})}
      </DivWed>
)};
