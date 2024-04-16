import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assignRootClassName } from "../customFunctions/customFunction";
import useScreenSize from "../../customHook/useScreenSize";
import WebsiteLogo from '../../images/logo2.png';
import "../../styles/Header.scss";

const Header = () => {
    const [rootClassName, setRootClassName] = useState<string>("");

    const [width] = useScreenSize();

    useEffect(() => {
        const getRootClassName: string = assignRootClassName(width, 'header');

        setRootClassName(getRootClassName);
    }, [width]);

    return (
        <header className={`${rootClassName}`}>
            <div className="logo-image-class">
                <img src={WebsiteLogo} alt="Crystal Peacock Logo" loading="lazy" className="logo-image" />
            </div>

            <div className="navigation-links-class">
                <Link className="redirection-header-link" to="/">Начало</Link>
                <Link className="redirection-header-link" to="/services">Услуги</Link>
                <Link className="redirection-header-link" to="/about">За нас</Link>
            </div>
        </header>
    )
}

export default Header