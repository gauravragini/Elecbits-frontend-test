import React, { Component } from 'react';
import Header from './HeaderComponent';
import Navigation from'./NavComponent';
import Content from './ContentComponent';


class Main extends Component {  

  render(){
    
    return (
    <div>
      <Header />
      <div className="container-fluid">
       <div className="row ">
           <div className="col-md-2 leftnav" style={{backgroundColor:"white"}}>
               <Navigation />
           </div>
           <div className="col-md-10">
                <Content />
            </div>
       </div>
   
      </div>
    </div>);
  }
 }


 export default Main;
