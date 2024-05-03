import React, {Component} from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

let id = 0;
class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.portfolio && this.props.data.portfolio.projects
        ? this.props.data.portfolio.projects.map(function(projects){
            let projectImage = "images/portfolio/" + projects.image;

            return (
                <div key={id++} className="columns portfolio-item">
                        <div className="item-wrap">
                            <Zmage alt={projects.title} src={projectImage} />
                            <div style={{textAlign: "center"}}>{projects.title}</div>
                            <a href={projects.url}>
                                <div className="overlay">
                                    <li>
                                        <a href={projects.url} target="_blank">
                                            <div className="portfolio-item-meta">
                                                <h5>{projects.category}</h5>
                                            </div>
                                        </a>
                                    </li>
                                </div>
                            </a>
                        </div>
                    </div>
            );
        })
        :null;

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out some of my works</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Portfolio;