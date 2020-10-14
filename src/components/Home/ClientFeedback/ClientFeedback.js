import React from 'react';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const ClientFeedbackInfo = [
    {
        image: 'https://i.ibb.co/60dLxrf/customer-first.png',
        title: 'CEO, Manpol',
        name: 'Nash Patrik'
    },
    {
        image: 'https://i.ibb.co/RHBH1wp/customer-second.png',
        title: 'CEO, Manpol',
        name: 'Miriam Barron'
    },
    {
        image: 'https://i.ibb.co/TT34PtG/customer-third.png',
        title: 'CEO, Manpol',
        name: 'Bria Malone'
    }
]

const ClientFeedback = () => {
    return (
        <div className ='container mt-5 mb-5'>
                <h2 className ='text-center'><span style = {{color: '#171B4E'}}>Clients</span> <span style = {{color: '#7AB259'}}>Feedback</span></h2>
                <div className = 'row d-flex justify-content-center mt-5'>
                    {
                        ClientFeedbackInfo.map((feedback) => <FeedbackCard key = {feedback.image} feedback = {feedback}></FeedbackCard>)
                    }
                </div>
        </div>
    );
};

export default ClientFeedback;