import React from 'react';
import CardListpo from '../components/classListpo.js';
import SearchBar from '../components/searchBar.js';
// import {RobotList} from '../components/robotList';
import Scroll from '../components/scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      RobotList:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user =>  this.setState({RobotList:user}))
   
  }
onSearchChange = (event)=>{
  this.setState({searchField:event.target.value})
  }

render(){ 
  // if(true){
  //   throw new Error('WHATTTTTTTTTTTT');
  // }
  const {RobotList,searchField}=this.state;

  const filteredRobots=RobotList.filter((eachRobot)=>{
    return eachRobot.name.toLowerCase().includes(searchField);
  })
  if(!RobotList.length){
    <h1>Loading</h1>
  } else {
  return (
    <div className="tc">
      <h1 className="f2 sega-text">Robofriends</h1>
      <SearchBar SearchChange={this.onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardListpo RobotList={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
  }
 }
}
export default App;
