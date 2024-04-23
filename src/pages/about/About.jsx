import "./About.css";

const AboutPage = () => {
return (
    <main>
      <div className="about-head">
        <h2 className="about-heading">About US</h2>
        {/* <hr/> */}

      </div>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className=" about-head about-mission">Our Mission</h1>
          <div className="about-body">
            <p className="about-us-para">We aim to provide a common platform for both user and customer that can help in mutual fulfillment.Any owner of Paying Guest and Bike Rental  across India can register and add there PGs and Bikes on our user friendly system.Where any customer who wish to <b>find a home far from home</b>and <b>need a bike ride</b> can get access to best options in just one click.</p>
            <img src="image/scooty2.jpg" className="about-image scooty-image"/>
          </div>
        </div>

        <div className="about-us-content">
          <h1 className="about-head about-story">Our Story</h1>
          <div className="about-body">
            <img src="image/pg3.jpg" className="about-image"/>
            <p className="about-us-para">As MCA students, we are developing a website to address the common challenges faced by fellow students. Among these challenges are finding appropriate accommodation and reliable transportation options. Our platform aims to provide solutions and support to simplify student life and enhance their overall experience.</p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default AboutPage