import './contact.css'

const Contact = () => {
  return (
    <div className="contact-section">
        <div className="contact-container">
            <div className="contact-left">
                <div className="contact-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="united-address">
                    <div className="address-title">
                        <h1>United Arab amirates</h1>
                    </div>
                    <div className="united-phone">
                        <span>+97000000000</span>
                    </div>
                    <div className="united-sub">
                        <span>Genarel inquries</span>
                    </div>
                </div>
                <div className="bd-address">
                    <div className="bd-text">
                        <h1>Bangladesh</h1>
                    </div>
                    <div className="bd-phone">
                        <span>01778736273784</span>
                    </div>
                    <div className="bd-sub">
                        <span>IT inquries</span>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form action="">
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact