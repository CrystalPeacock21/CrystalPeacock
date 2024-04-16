import { useState, useEffect } from 'react';

/* 
    This custom hook will allow us to handle
    real time resizing and so we can apply different styles based on current screen size
*/

const useScreenSize = () => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    function handleScreenSize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        handleScreenSize();

        window.addEventListener('resize', handleScreenSize);

        return () => window.removeEventListener('resize', handleScreenSize);
    }, []);

    return [width, height];
}

export default useScreenSize