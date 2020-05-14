import React, { Component } from 'react';

class Header extends Component {
   
  render(){ 
    return (

          <div className="header">  
                  <span>SACHAIT</span>
                  <div class="has-search">
                     <input type="text" className="form-control" placeholder="Search"/>
                     <span className="fa fa-search form-control-feedback"></span>
                  </div>
                  <img src="assets/images/6.png"  className="profile" height="29" width="29"/>
                  <span className="fa fa-cog setting"></span>
           </div>
    
    );
  }
}
 


 export default Header;
