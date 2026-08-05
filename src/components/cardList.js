import React from 'react';

import '../container/index.css';

// const CardList=({name,username,id})  THIS ALSO POSSIBLE AND PROPS AVOIDED
const CardList=(props)=> {
 
  return (
     <div className='bg-light-green dib br3 f7 fw6 ma2 grow  pa3   shadow-5 css cs'>
        <img src= {`https:robohash.org/${props.id}`} alt="card"  width="200px" height="200px" />
        <div className='desc'>
           <h2 className="f5">{props.name}</h2>
           <h4>{props.email}</h4>
        </div>
    </div>
  );

}
export default CardList;