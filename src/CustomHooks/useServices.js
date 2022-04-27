import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-brook-87254.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
}

export default useServices;