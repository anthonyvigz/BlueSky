import React, { Component } from 'react';
import logo from '../img/suncloud1.png'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
            navClass: 'navbar',
            logoDisplay: 'none',
            navOpacity: 1
        }
    }


    componentDidMount() {

        window.addEventListener('scroll', () => {
            if(window.scrollY < 150) {
                this.setState({ ...this.state, navClass: 'navbar'})
                this.setState({ ...this.state, logoDisplay: 'none'})
                this.setState({ ...this.state, navOpacity: 1})
            } else if(window.scrollY < 450 && window.scrollY > 151) {
                this.setState({ ...this.state, navOpacity: 0})
            } else {
                this.setState({ ...this.state, navClass: 'navbar movingNav'})
                this.setState({ ...this.state, logoDisplay: 'block'})
                this.setState({ ...this.state, navOpacity: 1})
            }
        })

    }


    render() {
        return (
            <div className="homescreen" id="home">
                <div className={this.state.navClass}  style={{opacity: this.state.navOpacity}} >
                        <img src={logo} alt="cloudLogo" style={{display: `${this.state.logoDisplay}`}} />
                        <ul className="nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#photos">Photos</a></li>
                            <li><a href="#team">The Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                <div className="header">
                    <img src={logo} alt="headerImg" />
                    <h1>MERCER & PORTLAND, MAINE</h1>
                    <h2>extraction partners</h2>
                </div>
            </div>
        )
    }
}

export default Home;