import React from 'react';
import { Row } from 'react-bootstrap';

import expert1 from '../../../image/experts/expert-1.jpg'
import expert2 from '../../../image/experts/expert-2.jpg'
import expert3 from '../../../image/experts/expert-3.jpg'
import expert4 from '../../../image/experts/expert-4.jpg'
import expert5 from '../../../image/experts/expert-5.jpg'
import expert6 from '../../../image/experts/expert-6.png'
import Expert from './Expert/Expert';

const experts = [
    { id: 1, name: 'Abul Hasem', img: expert1 },
    { id: 2, name: 'Babul Ahmed', img: expert2 },
    { id: 3, name: 'Karim Seikh', img: expert3 },
    { id: 4, name: 'Robi Jordan', img: expert4 },
    { id: 5, name: 'Hasin Ur Rasid', img: expert5 },
    { id: 6, name: 'Jenny Toos', img: expert6 },
]

const Experts = () => {
    return (
        <div className='container my-5'>
            <h1 id='experts' className='text-center text-primary mb-4'>Meet Our Experts</h1>

            <Row xs={1} sm={2} lg={3} className="g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </Row>
        </div>
    );
};

export default Experts;