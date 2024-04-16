import { useState, useEffect } from 'react';
import useScreenSize from '../../customHook/useScreenSize';
import { assignRootClassName, getAvaiableServices } from '../customFunctions/customFunction';
import { IService } from '../customInterfaces/customInterfaces';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import "../../styles/ServiceListAndPrices.scss";

const ServiceListAndPrice = () => {
    const [rootClassName, setRootClassName] = useState<string>("");
    const [allServices, setAllServices] = useState<IService[]>([]);
    const [moreInformation, setMoreInformation] = useState<boolean>(false);

    const [width] = useScreenSize();

    useEffect(() => {
        const getRootClassName: string = assignRootClassName(width, 'service-list');
        const getAllAvaiableServices: IService[] = getAvaiableServices();

        setRootClassName(getRootClassName);
        setAllServices(getAllAvaiableServices);
    }, [width]);

    return (
        <div className={`${rootClassName}`}>
            <Header />

            <div className='service-list-wrapper'>
                {allServices.map((item: any, index: number) => {
                    return <div className='service-list-card' key={index}>
                        
                        <h3 className='sub-service-title'>{item.serviceName}</h3>

                        <div className='sub-service-and-price-class'>
                            <ul className='sub-services-class'>
                                {item.serviceSubCategories.map((service: string, index: number) => {
                                    return <li className='sub-category-li' key={index}>
                                        {service}
                                    </li>
                                })}
                            </ul>

                            <ul className='service-price-class'>
                                {item.prices.map((price: any, index: number) => {
                                    return <li className='price-li' key={index}>{price} лева</li>
                                })}
                            </ul>
                        </div>
                    </div>
                })}
            </div>

            {moreInformation === true ?
                <ul className='more-information-class'>
                    <li className='more-info-li'>Цената за транспорт се таксува по 1.20лв на километър за обекти, които не се намират в София.</li>
                    <li className='more-info-li'>Ако даден обект няма асансьор се доплаща по 3лв на етаж</li>
                    <li className='more-info-li'>Ако няма подсигурен паркинг се доплаща по 2 лева на час</li>
                    <li className='more-info-li'>Минимална поръчка от 150 лева</li>
                    <li className='more-info-li'>Работа след 20:00ч се заплаща с 50% оскъпяване</li>
                    <li className='more-info-li'>Височина над 3 метра се заплаща с 50% оскъпяване</li>

                </ul>
                : <div className='more-information-button-class'>
                    <button className='more-information-button' onClick={() => setMoreInformation(true)}>Допълнителна информация</button>
                </div>}

              <Footer />
        </div>
    )
}

export default ServiceListAndPrice