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
justify-content: baseline;
`

const DivCard = styled.div`
margin: 2rem;
`

export default function CouplesList() {
    
const [couple, addCouple] = useState([]);

useEffect(()=>{
    axios.get("../../dummydata.json")
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
        pic={couple.pic}
        spouse1={couple.spouse1}
        spouse2={couple.spouse2}
        date={couple.date}
        desc={couple.desc}
        planner={couple.planner}
    />
    </DivCard>)})}
      </DivWed>
)};
