import React from 'react';
import useServices from '../../CustomHooks/useServices'
const Manage = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const confirmation = confirm('Are You sure, You want to delete.?');
        if (confirmation) {
            fetch(`http://localhost:5000/manage/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary'>Manage Services</h1>

            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    services.map(service => <div className='col border p-3 border-2 rounded' key={service._id}>
                        <h3>{service.name}</h3>
                        <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manage;