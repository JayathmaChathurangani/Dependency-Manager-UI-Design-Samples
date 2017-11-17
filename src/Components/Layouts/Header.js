import React, { Component } from 'react';
//import WSO2_Logo from '../Images/WSO2_Logo.png';
//import Test from '../Images/Test';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                            <div className="navbar-brand col-lg-2">
                                <div><img style={{width: 50, height: 50}} src = "../Images/WSO2_Logo.png"/></div>
                                <div>WSO2</div>
                            </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;