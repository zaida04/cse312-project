import { Component } from 'react';
import "./sidebar-style.css"
import logo from './ylogo.png'
class Sidebar extends Component {
    render() {
        return(
            <div id="sidebar">
            <img id="logo" src={logo}></img>
            <div id="sidebar-button-container">
            <button className="sidebar-button">Launch a rocket</button>
            &nbsp;
            <button className="sidebar-button">Home</button>
            &nbsp;
            <button className="sidebar-button">Explore</button>
            &nbsp;
            <button className="sidebar-button">Notificatiton</button>
            &nbsp;
            <button className="sidebar-button">Messages</button>
            &nbsp;
            </div>
            </div>
        );
    }
}

export default Sidebar