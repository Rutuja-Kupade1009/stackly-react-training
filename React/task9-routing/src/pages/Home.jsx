import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Welcome to React Routes.</h1>
      <p>We build modern websites and digital solutions.</p>
      <Link to="/services" className="btn">Explore Services</Link>
    </section>
  );
}