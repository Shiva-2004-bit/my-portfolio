import './Navbar.css'; // Yeh CSS file same folder me hai
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <a href="/shiv_professional_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="resume-btn">Download Resume</button>
                    </a>

                </li>
            </ul>
        </nav>
        // <nav className="navbar">
        //   <ul className="nav-list">
        //     <li><a href="#about">About</a></li>
        //     <li><a href="#projects">Projects</a></li>
        //     <li><a href="#skills">Skills</a></li>
        //     <li><a href="#contact">Contact</a></li>
        //   </ul>
        // </nav>
    );
}

export default Navbar;
