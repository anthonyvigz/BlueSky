import React, { Component } from 'react';
import logo from '../img/whitecloud.png'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
            navClass: 'navbar'
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', () => {
            if(window.scrollY < 100) {
                this.setState({ ...this.state, navClass: 'navbar'})
            } else {
                this.setState({ ...this.state, navClass: 'movingNav'})
            }
        })

    }


    render() {
        return (
            <div className="homescreen" id="home">
                <div className={this.state.navClass}>
                        <img src={logo} alt="cloudLogo" />
                        <ul className="nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#photos">Photos</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                <div className="text-part">
                </div>
            </div>
        )
    }
}

export default Home;