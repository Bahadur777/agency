import "./service.css"


const ServiceCard = ({title,icons,cardText}) => {
  return (
    <div className="ServiceCard">
         <div className="card">
                <div className="card-top">
                    <div className="card-icons">
                    {icons}
                    </div>
                    <div className="cart-title">
                        <h1>{title}</h1>
                    </div>
                   
                </div>
                <div className="card-text">
                  <p>{cardText}</p>
                    </div>
            </div>
    </div>
  )
}

export default ServiceCard