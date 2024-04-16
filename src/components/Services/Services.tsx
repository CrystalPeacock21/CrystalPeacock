import { useState, useEffect } from 'react';
import { assignRootClassName } from '../customFunctions/customFunction';
import useScreenSize from '../../customHook/useScreenSize';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { getAvaiableServices, } from '../customFunctions/customFunction';
import { IService } from '../customInterfaces/customInterfaces';

import HomeCleaning from '../../images/home.jpg';
import OfficeCleaning from '../../images/office.jpg';

import "../../styles/Services.scss";

const Services = () => {
    const [rootClassName, setRootClassName] = useState<string>("");
    const [services, setServices] = useState<IService[]>([]);

    const [width] = useScreenSize();

    useEffect(() => {
        const getRootNameClass = assignRootClassName(width, 'services');
        const getAllServices: IService[] = getAvaiableServices();

        setServices(getAllServices);
        setRootClassName(getRootNameClass);
    }, [width]);

    return (
        <div className={`${rootClassName}`}>
            <Header />

            <div className='service-wrapper-class'>
                <h1 className='service-title'>Довери се за здраве и красота на дома или офиса си</h1>

                <div className='office-home-wrapper'>
                    <div className='home-cleaning-class'>
                        <div className='card-home-image-class'>
                            <img src={HomeCleaning} className='house-cleaning-image' loading='lazy' alt="House Cleaning Image" />
                        </div>

                        <div className='service-data-class'>
                            <div className='details-class'>
                                <h1 className='home-cleaning-title'>Почистване на домове</h1>

                            </div>

                            <div className='details-button-class'>
                                <Link to="/services/serviceList" className='home-details-link'>Научи повече</Link>
                            </div>
                        </div>
                    </div>

                    <div className='office-cleaning-class'>
                        <div className='card-office-image-class'>
                            <img src={OfficeCleaning} className='office-cleaning-image' loading='lazy' alt="House Cleaning Image" />
                        </div>

                        <div className='details-office-class'>
                            <div className='details-class'>
                                <h1 className='office-cleaning-title'>Почистване на офиси</h1>
                            </div>

                            <div className='details-button-class'>
                                <Link to="/services/serviceList" className='office-details-link'>Научи повече</Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='avaiable-services-class'>
                    <h1 className='avaiable-services-title'>Услугите, които ще откриеш при нас</h1>
                    
                    <div className='services-wrapper-class'>
                        {services.map((item: any, index: number) => {
                            return <div className='service-card-class' key={index}>
                                <span className='service-title-span'>{item.serviceName}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services