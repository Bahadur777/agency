import Link from "next/link"
import './WorkCard.css'

const WorkCardText = ({CardTitle, CardParaText, linkText, href}) => {
  return (
    <div className='WorkCardText'>
        <div className="work-card-title">
            <h1 className="WorkCard-text">
               {CardTitle}
            </h1>
        </div>
        <div className="card-para-text">
            <p>
                {CardParaText}
            </p>
        </div>
        <div className="links">
           <Link href={'href'}>
                {linkText}
           </Link>
        </div>
    </div>
  )
}

export default WorkCardText