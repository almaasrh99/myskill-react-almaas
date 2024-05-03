import React, { Component } from 'react';
import {Fade} from 'react-awesome-reveal';

class About extends Component{
    render(){
        if (!this.props.data) return null;

        const name = this.props.data.name;
        const profilepic = "images/" + this.props.data.image;
        const bio = this.props.data.bio;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const phone= this.props.data.phone;
        const email = this.props.data.email;
        const resumeDownload = this.props.data.resumedownload;

        return (
            <section id="about">
                <div className="row">
                    <div className="twelve columns">
                        <Fade direction="left" triggerOnce>
                        <img className="profile-pic" src={profilepic} alt="Profile Pic"/>
                        </Fade>
                    </div>
                    <div className="twelve columns main-col">
                        <Fade direction="right" triggerOnce>
                        <h2>About Me</h2>
                        <p className='bioku'>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span><i className='fa fa-map-marker'></i> {city} {state}, {zip}
                                    </span><br />
                                    <span><i className='fa fa-book'></i> {phone}</span><br />
                                    <span><i className='fa fa-envelope'></i> {email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    }

}

export default About;