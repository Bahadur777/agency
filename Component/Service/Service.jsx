import './service.css'
import BgButton from '../Button/BgButton'
import Image from 'next/image'
import Poster from '../../public/people.jpg'

const Service = () => {
  return (
    <div className='service' >
        <div className="service-section">
            <div className="service-container">
                <div className="service-left">
                    <div className="service-text">
                        <h1 className="service-title-text">
                            Get the <span>best service</span> for you <span>business</span> from the <span>person</span> you don't even know !
                        </h1>
                       
                    </div>
                    <div className="service-pera">
                    <p className="service-pera-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, laboriosam? Voluptatibus iste, natus quae porro suscipit quia sequi deserunt maiores!
                        </p>
                    </div>
                    <div className="service-button-section">
                        <BgButton btnText='Contact Us'/>
                    </div>
                </div>
                <div className="service-right">
                 <Image src={Poster} className='poster'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service