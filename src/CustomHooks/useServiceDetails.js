import { useEffect, useState } from "react";

const useServiceDetails = id => {
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://mysterious-brook-87254.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return { service }
}

export default useServiceDetails;