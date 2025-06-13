import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "20px" }}>
            <a href="https://github.com/Shiva-2004-bit" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/shivnarayan-ahirwar-b7402b330/" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
        </footer>
    );
}
export default Footer;
