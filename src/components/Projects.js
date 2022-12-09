import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/drum.png";
import projImg3 from "../assets/img/banner.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Capture.png";
import projImg4 from "../assets/img/white.png";
import projImg5 from "../assets/img/keeper.png";
import projImg6 from "../assets/img/portf.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce website",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://comfyzone.netlify.app",
    },
    {
      title: "Drumkit Sound Game",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://drumkt.netlify.app/",
    },
    {
      title: "Mine Sweeper Game",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://t5i9f.csb.app/",
    },
    {
      title: "White Board",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "https://k5c8x.csb.app/",
    },
  ];

  const ReactProject = [
    {
      title: "Keeper",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "https://hfycx0.csb.app/",
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://hfycx0.csb.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <div>
          <Col size={4}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">React Js</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Backend</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <div className="card-container">
                      {projects.map((project, index) => {
                        return (
                          <a
                            href={project.url}
                            target="_blank"
                            style={{ color: "white" }}
                          >
                            <ProjectCard key={index} {...project} />
                          </a>
                        );
                      })}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="card-container">
                      {ReactProject.map((project, index) => {
                        return (
                          <a
                            href={project.url}
                            target="_blank"
                            style={{ color: "white" }}
                          >
                            <ProjectCard key={index} {...project} />
                          </a>
                        );
                      })}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
