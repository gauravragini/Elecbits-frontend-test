import React, { Component } from 'react';
import { Nav, Navbar,NavLink, Collapse, NavItem} from 'reactstrap';
class Navigation extends Component {

    constructor(props){

        super(props);
    
        this.state = {
            isNavOpen: true,
            isInnerNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleInnerNav = this.toggleInnerNav.bind(this);
      }
    
      toggleNav(){
          this.setState({
                isNavOpen: !this.state.isNavOpen
          });
      }
      toggleInnerNav(){
        this.setState({
              isInnerNavOpen: !this.state.isInnerNavOpen
        });
    }
   
  render(){

    const navstyle = {
        color: "grey",
        backgroundColor: "white",
        fontFamily: "Arial",
      };
    
    return (

        <Navbar className="navgation" style={navstyle}>
           
                    <NavLink onClick={this.toggleNav} style={{marginRight:"20px"}} >Navigation</NavLink>
                    <Collapse isOpen={this.state.isNavOpen} vertical>
                    <Nav vertical  >
                    <NavItem>
                        <NavLink className="nav-link" onClick={this.toggleInnerNav} to="/">
                            <span className="fa fa-home fa-lg"></span> Dashboard
                            <Collapse isOpen={this.state.isInnerNavOpen} x>
                            <Nav x>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"> Dashboard 1</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"> Dashboard 2</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"> Dashboard 3</NavLink>
                                </NavItem>
                            </Nav> 
                          </Collapse>
                        </NavLink>
                    </NavItem>                 
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            <span className="fa fa-flask fa-lg"></span> UI Kit
                        </NavLink>
                    </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/">
                            <span className="fa fa-bullseye fa-lg"></span> Components
                        </NavLink>
                    </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/">
                            <span className="fa fa-wrench fa-lg"></span> Icons
                        </NavLink>
                    </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/">
                            <span className="fa fa-edit fa-lg"></span> Forms
                        </NavLink>
                    </NavItem>
                    </Nav> 
                    </Collapse>
              
        </Navbar>
    );
  }
 }


 export default Navigation;
