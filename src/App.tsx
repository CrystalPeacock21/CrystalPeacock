import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import ServiceListAndPrice from './components/ServiceListAndPrices/ServiceListAndPrice';

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/services/serviceList' element={<ServiceListAndPrice />} />
            </Routes>
        </div>
    )
}

export default App
