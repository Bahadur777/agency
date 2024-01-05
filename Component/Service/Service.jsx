import './service.css'
import BgButton from '../Button/BgButton'
import Image from 'next/image'
import Poster from '../../public/people.jpg'
import ServiceCard from './ServiceCard'
import { FaGlobe } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsGearWideConnected } from "react-icons/bs"


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

       <div className="service-card-main">
       <div className="service-card-section">
        <div className="service-card-container">
        <ServiceCard className='card-name' title="IT Solution" icons={<FaGlobe />} cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptate, repellendus rerum accusamus minima quod!"/>

        <ServiceCard title="Hardware Repair" icons={<IoSettingsSharp />} cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptate, repellendus rerum accusamus minima quod!"/>
        <ServiceCard title="Engineering service" icons={<BsGearWideConnected />} cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptate, repellendus rerum accusamus minima quod!"/>

        <ServiceCard title="Education consultation" icons={<FaGlobe />} cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptate, repellendus rerum accusamus minima quod!"/>
        <ServiceCard title="Education consultation" icons={<FaGlobe />} cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptate, repellendus rerum accusamus minima quod!"/>

        <div className="service-platform">
        <div className="platform-text">
                <p>Our service</p>
             </div>
             <div className="platform-title">
                <h1 className='title-bold'>One platform</h1>
                <h1>All solution</h1>
             </div>
             <div className="platform-btn">
             <BgButton btnText="Learn more"/>
             </div>
        </div>
            
        </div>
       </div>
       </div>
    </div>
  )
}

export default Service