import Link from "next/link";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="home">
          <Link href="/">DC</Link>
        </li>
        <li>
          <Link href="#experince">Experince</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="curriculum-vitae">Curriculum Vitae</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
