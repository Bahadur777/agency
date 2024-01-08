import './work.css'
import WorkCardText from './WorkCardText'
import WorkCardNum from './WorkCardNum'
import { TiMessages } from "react-icons/ti";
const Work = () => {
  return (
    <div className='work-section'>
        <div className="work-container">
            <div className="work-top">
                <div className="work-s-text">
                    <span>How we work</span>
                </div>
                <div className="work-title">
                    <h1 className="workTitle-text">
                       We Have some <span>easy steps</span> to process
                    </h1>
                </div>
                <div className="work-sub-title">
                    <p className="workSub-text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis?    
                    </p>
                </div>
            </div>
            <div className="Work-card-section">
                <div className="work-card-row">
                    <div className="card-row-left">
                        <WorkCardText CardTitle="Sent us message" CardParaText="some text" linkText="Sent message"/>
                    </div>
                    <div className="card-row-right">
                        <WorkCardNum Number="1" workImg={<TiMessages />} />
                    </div>
                </div>
                <div className="work-card-row">
                    <div className="card-row-left">
                    <WorkCardNum Number="1" workImg={<TiMessages />} />
                        
                    </div>
                    <div className="card-row-right">
                    <WorkCardText CardTitle="Sent us message" CardParaText="some text" linkText="Sent message"/>
                    </div>
                </div>
                <div className="work-card-row">
                    <div className="card-row-left">
                        <WorkCardText CardTitle="Sent us message" CardParaText="some text" linkText="Sent message"/>
                    </div>
                    <div className="card-row-right">
                        <WorkCardNum Number="1" workImg={<TiMessages />} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work