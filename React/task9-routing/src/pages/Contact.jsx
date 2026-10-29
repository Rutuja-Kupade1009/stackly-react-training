export default function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>Email: contact@devsphere.example</p>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
      }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
}