// src/components/Projects.jsx
import './Projects.css'
function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="project-card">
        {/* <img src="/images/project1.png" alt="project" /> */}     
        <h3>Weather App</h3>
        <p>React + API</p>
        <a href="https://github.com/Shiva-2004-bit/city-react-app.git" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>

      <div className="project-card">
        {/* <img src="/images/project2.png" alt="project" /> */}
        <h3>Todo App</h3>
        <p>React + LocalStorage</p>
        <a href="https://github.com/yourusername/todo-app" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>

    </section>
  );
}

export default Projects;
