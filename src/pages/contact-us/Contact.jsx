import "./Contact.css"


const ContactPage = () => {
  return (
    <main className="contact-us">
      <div className="contact-us-heading">
        <h1>Contact Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ex iste alias adipisci esse minus? Laudantium optio dolorum distinctio porro.</p>
      </div>

      <div className="contact-us-content">
        <div className="contact-info">

          <div className="contact-us-detail">
            <i className="fa-solid fa-location-dot"></i>
            <div className="contact-us-address">
              <h3>Address</h3>
              <p>4671 Sugar Camp Road,<br/>Owatanna,Minnesota,<br/>55060</p>
            </div>
          </div>

          <div className="contact-us-detail">
            <i className="fa-solid fa-phone"></i>
            <div className="contact-us-address">
              <h3>Phone</h3>
              <p>+880 123 4567 890</p>
            </div>
          </div>

          <div className="contact-us-detail">
            <i className="fa-regular fa-envelope"></i>
            <div className="contact-us-address">
              <h3>Email</h3>
              <p>wrub7d78!0e@temporary-mail.net</p>
            </div>
          </div>

          <div className="contact-us-links">
            <h3>Follow Us</h3>
            <div className="contact-us-icon">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="contact-us-container">
          <h2>Send Message</h2>
          <form className="form">
            <input type="text" placeholder="Full Name" className="text-input"/>
            <input type="text" placeholder="Email" className="text-input"/>
            <input type="text" placeholder="Type your Message...." className="message"/>
            <button>Send</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ContactPage