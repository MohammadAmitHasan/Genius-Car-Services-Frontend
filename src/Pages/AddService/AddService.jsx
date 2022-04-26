import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/addservice`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Service Added');
                reset();
            })
    };
    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary'>PLease Add a service</h1>
            <form className='d-flex flex-column mx-auto py-3 px-2 border border-2 rounded' style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Service Name ' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description ' className='mb-2' {...register("description")} />
                <input placeholder='Service Price ' className='mb-2' type="number" {...register("price", { min: 5 })} />
                <input placeholder='Photo url ' className='mb-2' {...register("img")} />
                <input className='mt-2 btn btn-primary' type="submit" value={'Add Service'} />
            </form>

        </div>
    );
};

export default AddService;