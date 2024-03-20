import { Component } from 'react';
import "./menubar-style.css"

class Menubar extends Component {
    render() {
        return(
            <div id="menubar">
            <p>Home</p>
            <div id="user-div">
            <button id="profile-button">Zaid</button>
            </div>
            </div>
        );
    }
}

export default Menubar