import './newsLetter.css'

const NewsLetter = () => {
  return (
   <div className="newsLetter">
    <div className="newsLetter-section">
        <div className="newsletter-title">
            <h1 className="letter-title-text">
                 get <span>connect</span> with us!
            </h1>
            <h1 className="letter-sub-text">
                Give you update all time
            </h1>
        </div>
        <div className="news-form">
            <form action="">
                <input type="text" placeholder='Your Email address' className='new-input' />
                <button className='news-btn'>subscribe</button>
            </form>
        </div>
    </div>
   </div>
  )
}

export default NewsLetter