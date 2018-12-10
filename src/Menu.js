import React, { Component } from "react";
import "./Menu.css";


const MenuList = [
  {
    field: 'hurma',
    path: '/',
  },
  {
    field: 'profile',
    path: '/profile',
  },

  {
    field: 'logout',
    path: '/',
  },
];

class Menu extends Component {
     
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu" className={visibility}>
      <div id="sidebar-menu">
        <ul>
          {MenuList.map(menu => (
             <li key={menu.field}>
             <a href={menu.path}>{menu.field}</a>
           </li>
          ))}
        </ul>
      </div>
      </div>
    );
  }
}
 
export default Menu;