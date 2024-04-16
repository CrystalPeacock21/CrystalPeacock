import { useState, useEffect } from 'react';
import useScreenSize from '../../customHook/useScreenSize';
import { assignRootClassName } from '../customFunctions/customFunction';
import Header from '../Header/Header';
import WebsiteLogo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import "../../styles/About.scss";

const About = () => {
    const [rootClassName, setRootClassName] = useState<string>("");

    const [width] = useScreenSize();

    useEffect(() => {
        const getRootNameClass: string = assignRootClassName(width, 'about');

        setRootClassName(getRootNameClass);
    }, [width]);

    return (
        <div className={`${rootClassName}`}>
            <Header />

            <div className='about-us-wrapper'>
                <div className='website-logo-and-wrapper'>
                    <div className='website-logo-class'>
                        <img src={WebsiteLogo} className='website-image' alt="Website Logo" loading='lazy' />
                    </div>

                    <div className='social-media-class'>
                        <div className='social-media-links'>
                            <Link to="https://www.instagram.com/crystalpeacock2024/"><InstagramIcon className='about-us-icons-instagram' /></Link>
                            <span className='instagram-span'>@crystalpeacock2024</span>
                        </div>
                        <div className='social-media-links'>
                            <Link to="https://www.facebook.com/crystalpeacock2024"><FacebookIcon className='about-us-icons-facebook' /></Link>
                            <span className='facebook-span'>@crystalpeacock2024</span>
                        </div>
                        <div className='social-media-links'>
                            <PhoneIcon className='about-us-icons' />
                            <span className='phone-number-span'>+359 89983 5990</span>
                            <span className='phone-number-span'>+359 89914 0618</span>
                        </div>

                    </div>
                </div>

                <div className='about-us-paragraph-class'>
                    <p className='about-us-paragraph'>
                        Ние сме фирма "Cleaning company Crystal Peacock" посветена на осигуряването на безупречна чистота и комфорт във вашият дом и бизнес обект! С внимание към детайлите и висок стандарт на обслужване! Използваме САМО биоекологични изпитани и безопасни за здравето продукти. Стремим се не само да осигурим: чистота, уют и комфорт, но и да се погрижим за вашето здраве.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About