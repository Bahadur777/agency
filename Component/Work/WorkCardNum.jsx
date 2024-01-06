import './WorkCard.css'

const WorkCardNum = ({Number, workImg}) => {
  return (
    <div className='WorkCardNum'>
        <div className="workNum">
            <h1>{Number}</h1>
        </div>
        <div className="workImg">
            {workImg}
        </div>
    </div>
  )
}

export default WorkCardNum