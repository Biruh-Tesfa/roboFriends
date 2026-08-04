import React from 'react';
import CardList from './cardList';


const CardListpo=({RobotList})=> {
  return (
   <div className="scroll">
      {
         RobotList.map((value,i)=>{
         return (<CardList 
            key={i} 
            name={RobotList[i].name} 
            email={RobotList[i].email} 
            id={RobotList[i].id}
            />)
          })
      }
  </div>
  );

}
export default CardListpo;