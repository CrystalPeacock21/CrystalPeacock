import { useState, useEffect } from 'react';
import useScreenSize from '../../customHook/useScreenSize';
import { assignRootClassName, getPartOfAvaiableServices, getAvaiableLocations } from '../customFunctions/customFunction';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { IService } from '../customInterfaces/customInterfaces';
import Footer from '../Footer/Footer';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import BathtubIcon from '@mui/icons-material/Bathtub';

import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import "../../styles/Home.scss";

const Home = () => {
    const [rootClassName, setRootClassName] = useState<string>("");
    const [partOfAvaiableServices, setPartOfAvaiableServices] = useState<IService[]>([]);
    const [avaiableLocations, setAvaiableLocations] = useState<string[]>([]);

    const [width] = useScreenSize();

    const iconsArray: any = [
        <CleaningServicesIcon className="services-icons" />,
        <LocalLaundryServiceIcon className="services-icons" />,
        <BathtubIcon className="services-icons" />];

    useEffect(() => {
        const getNameForRootClass: string = assignRootClassName(width, 'home');
        const getPartOfAvaiableServicesVariable: IService[] = getPartOfAvaiableServices();
        const getAvaiableLocation: string[] = getAvaiableLocations();
        

        setRootClassName(getNameForRootClass);
        setPartOfAvaiableServices(getPartOfAvaiableServicesVariable);
        setAvaiableLocations(getAvaiableLocation);
    }, [width]);

    return (
        <div className={`${rootClassName}`}>
            <Header />

            <div className='home-section-one-class'>
                <h1 className='section-one-title'>Довери се на нас и получи здраве и чистота</h1>

                <div className='services-and-location-class'>
                    <span className='services-span'>Част от услугите, които предлагаме</span>

                    <div className='services-class'>
                        {partOfAvaiableServices.map((item: any, index: number) => {
                            return <div className={`services-card-class-${index}`} key={index}>
                                {iconsArray[index]}
                                <p className='service-paragraph'>{item.serviceName}</p>
                            </div>
                        })}

                    </div>

                    <span className='more-services-span'>Виж всички услуги, които предлагаме <Link to="/services" className='more-services-links'>Тук</Link></span>
                </div>
            </div>

            <div className='work-steps-class'>
                <h2 className='work-steps-header-title'>КАК РАБОТИМ В ТРИ ЛЕСНИ СТЪПКИ:</h2>

                <div className='work-steps-wrapper'>
                    <div className='step-one-class'>
                        <h2 className='step-one-title'>Посещаваме вашият дом офис или обект и заедно уточняваме от какво се нуждаете.</h2>

                        <HomeIcon className='work-steps-icons' />
                    </div>

                    <div className='step-two-class'>
                        <h2 className='step-two-title'>Изготвяме най добрата оферта, съобразена с вашите нужди.</h2>

                        <AttachMoneyIcon className='work-steps-icons' />
                    </div>

                    <div className='step-three-class'>
                        <h2 className='step-three-title'>Насладете се на чистият си дом офис след  добре свършена работа и спестеното свободно време.</h2>

                        <SentimentSatisfiedAltIcon className='work-steps-icons' />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home