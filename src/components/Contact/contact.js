import './contact.css'
const Contact = () => {
  return(
    <div>
      <section>
        <div class="contact-main" id="section2">
          <div><h1 className='contacts-header'>Contacts</h1></div>
          <div class="contact-content">
            <h3>PraNi Trading Co.</h3>
            <h4>Email: nitish@PraNi.co</h4>
            <h4>Phone: 7992328850</h4>
            <h4>Address: Chanakya Nagar Kaliasthan Road Begusarai, Bihar, 851101</h4>
            <h4><a href='https://www.google.co.in/maps/dir//25.41375,86.144785/@25.4135566,86.0745144,12z' target='blank'>Get Directions</a></h4>
          </div>
        </div>
      </section>
      <div class="disclaimer">
        <p>Disclaimer: Health information and advice is provided solely as a general educational aid. It is not intended as medical or healthcare advice, or to be used for medical diagnosis or treatment, for any individual problem. It is also not intended as a substitute for professional advice and services from a qualified healthcare provider familiar with your unique facts. Always seek the advice of your physician or other qualified healthcare provider regarding any medical condition and before starting any new treatment.</p>
      </div>
      <hr></hr>
      <hr></hr>
      
      <footer>
        <div>
          <span><sup>©</sup> PraNi Trading Co. 2018-21.</span>
        <p>This site is published by PraNi Trading Co. which is solely responsible for its content.</p>
        <p>It is intended for visitors from India. This site may contain links to websites to which our Privacy Policy do not apply.</p>
        <p>We encourage you to read the Terms of Use and Privacy Policy of every website you visit. Site Last Updated: June 12, 2021</p>
        </div>
      </footer>
    </div>
  )

}

export default Contact