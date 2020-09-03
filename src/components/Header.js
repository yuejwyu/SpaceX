import React, {Component} from 'react';
import StarlinkLogo from "../assets/images/Starlink_Logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={StarlinkLogo} className="App-logo" alt="logo" />
                <p className="title">
                    StarLink Tracker
                </p>
            </header>
        );
    }
}

export default Header;