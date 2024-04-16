import { useState, useEffect } from "react"
import useScreenSize from "../../customHook/useScreenSize";
import { assignRootClassName } from "../customFunctions/customFunction";
import { getAvaiableServices } from "../customFunctions/customFunction";
import { IService } from "../customInterfaces/customInterfaces";
import "../../styles/Footer.scss";

const Footer = () => {
    const [rootClassName, setRootClassName] = useState<string>('');
    const [serviceList, setServiceList] = useState<IService[]>([]);

    const [width] = useScreenSize();

    useEffect(() => {
        const getRootClassName: string = assignRootClassName(width, 'footer');
        const getListOfServices: IService[] = getAvaiableServices();

        setRootClassName(getRootClassName);
        setServiceList(getListOfServices);
    }, [width])

    return (
        <footer className={`${rootClassName}`}>


            <div className="services-list-class">
                <h1 className="service-title">Услуги</h1>
                <ul className="service-ul">
                    {serviceList.map((item: any, index: number) => {
                        return <li className="list-service" key={index}>{item.serviceName}</li>
                    })}
                </ul>
            </div>

            <div className="contacts-class">
                <h1 className="contact-title">Телефони за връзка</h1>

                <span className='phone-number-span'>+359 89983 5990</span>
                <span className='phone-number-span'>+359 89914 0618</span>
            </div>
        </footer>
    )
}

export default Footer