import { useEffect, useState } from "react";

const useToken = (user) => {

    const [token, setToken] = useState('')
    const email = user?.user?.email;

    useEffect(() => {
        if (email) {
            fetch('https://mysterious-brook-87254.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken)
                })
        }
    }, [user])

    return [token];

}

export default useToken