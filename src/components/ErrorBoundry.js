import React from 'react'

class ErrorBoundry extends React.Component{
	constructor(props){
	super(props)
      this.state={
      	fail:false
      }
  }

componentDidCatch(error,info){
	this.setState({fail:true})
}
render(){
  if(this.state.fail){
  	return <h1>Opps check your internet</h1>;
  } 
   return this.props.children; 
  }
}
export default ErrorBoundry;