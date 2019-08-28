import React, {useEffect, useState} from 'react';
import axios from "axios";
import CoupleCard from "./CouplesCard.js";

export default function CouplesList() {
    
    const [couple, addCouple] = useState([]);
useEffect(()=>{
    axios.get(/*'https://TBD'*/)
    .then(function(response){
        addCouple(response.data);
    })});
return(
    <div>
    {couple.map(couple => {
      return(
      <CoupleCard 
        key={couple.id}
        pic={couple.pic}
        spouse1={couple.spouse1}
        spouse2={couple.spouse1}
        date={couple.date}
        desc={couple.desc}
        planner={couple.planner}
    />)})}
      </div>
)};
