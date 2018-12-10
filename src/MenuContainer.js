import React, { Component } from "react";
import Menu from "./Menu";
 
class MenuContainer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      visible: false,
    };
 
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
 
  handleMenuOpen(e) {
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

 handleClick(e){
   this.setState(
     {
       visible: false,
     }
   )
 }
 
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }


  render() {
    return (
        <div id="home"  onClick={this.handleClick} >
           <h1>Home</h1>
          <button type="button"
              onClick={this.handleMenuOpen}>Menu</button>
          <Menu  menuVisibility={this.state.visible}/>
      </div>
    );
  }
}
 
export default MenuContainer;