import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import {Fade} from 'react-awesome-reveal';

class Header extends Component {    
    render() {
        if (!this.props.data) return null;

        const project = this.props.data.project;
        const behance = this.props.data.behance;
        const name = this.props.data.name;
        const description = this.props.data.description;
        return (
            <header id="home">
                <ParticlesBg type="circle" bg={true} />

            <nav id="nav-wrap"> 
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                <Fade direction="down" triggerOnce>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
                </Fade>
            </nav>
            <div className='row banner'>
                {/* <Fade direction='down' triggerOnce>
                <div className='profile-picture'>
                <img src={require('./profile.png')} alt='profile' style={{width: "200px"}} />
                </div>

                    </Fade> */}
                
                <div className='banner-text'>
                    <Fade direction="up" triggerOnce>
                    <h1 className='responsive-headline mt-4'>I'm {name}.</h1>
                    </Fade>
                    <Fade direction="left" triggerOnce>
                    <h3>{description}.</h3>
                    </Fade>
                    <hr />
                    <Fade bottom duration ={2000}>
                    <ul className='social'>
                        <li><a href={project} className='button btn project-btn'><i className='fa fa-book'></i>Project</a></li>
                        <li><a href={behance} className='button btn behance-btn'><i className='fa fa-behance'></i>Behance</a></li>
                    </ul>
                    </Fade>
                    
                </div>
            </div>
            <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                    </p>  
        </header>
        );
    }
}
export default Header;