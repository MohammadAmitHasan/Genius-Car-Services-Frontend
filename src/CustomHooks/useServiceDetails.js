import { useEffect, useState } from "react";

const useServiceDetails = id => {
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return { service }
}

export default useServiceDetails;