import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="container">
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#education">Resume</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#process">Process of Works</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#blogs">Blogs</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
