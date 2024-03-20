import { Component } from 'react';
import "./sidebar-style.css"
import logo from './ylogo.png'
class Sidebar extends Component {
    render() {
        return(
            <div id="sidebar">
            <img src={logo}></img>
            <p>Hello there</p>
            <button>Launch a rocket</button>
            <button>Home</button>
            <button>Explore</button>
            </div>
        );
    }
}

export default Sidebar