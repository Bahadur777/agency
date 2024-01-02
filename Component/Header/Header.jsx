import './header.css';
import NavLinks from '../Header/NavLinks';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Bahadur.png'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="logo-section">
           <div className="logo">
           <Link href="#/">
             <Image src={Logo} className='Logo-img'></Image>
            </Link>
           </div>
          </div>
          <div className="navbar">
            {NavLinks.map(({ id, href, title }) => (
              <div key={id}>
                <Link href={href}>
                 {title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
