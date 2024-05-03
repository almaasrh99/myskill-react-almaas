import { Component } from "react";
import Slide from "react-awesome-reveal";

class Resume extends Component {
    getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        if (!this.props.data) return null;

        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.resume && this.props.data.resume.education
  ? this.props.data.resume.education.map(function(education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    })
  : null;

  const work = this.props.data.resume && this.props.data.resume.work
  ? this.props.data.resume.work.map(function(work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    })
  : null;

  const skills = this.props.data.resume && this.props.data.resume.skills
  ? this.props.data.resume.skills.map((skills) => {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level, backgroundColor: this.getRandomColor() }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    })
  : null;

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <Slide direction="up" triggerOnce>
                            <h1>
                                <span>Education</span>
                            </h1>
                        </Slide>
                    </div>
                    <div className="nine columns main-col">
                        <Slide direction="up" triggerOnce>
                            <div className="row item">
                                <div className="twelve columns">{education}</div>
                            </div>
                        </Slide>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <Slide direction="up" triggerOnce>
                            <h1>
                                <span>Work</span>
                            </h1>
                        </Slide>
                    </div>
                    <div className="nine columns main-col">
                        <Slide direction="up" triggerOnce>
                            {work}
                        </Slide>
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <Slide direction="up" triggerOnce>
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </Slide>
                    </div>
                    <div className="nine columns main-col">
                        <Slide direction="up" triggerOnce>
                            <p>{skillmessage}</p>
                            <div className="bars">
                                <ul className="skills">{skills}</ul>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
        );
    }
       
}

export default Resume;