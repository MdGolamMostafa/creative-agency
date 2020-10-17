import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const ClientFeedback = () => {

    // const feedbackAdded = () => {
    //     fetch("http://localhost:5000/", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify(ClientFeedbackInfo)
    //     })
    // }

    const [feedback ,setFeedback] = useState([]);

            useEffect(() => {
                fetch('http://localhost:5000/feedback')
                .then(response => response.json())
                .then(response =>{
                    console.log(response);
                    setFeedback(response)
                })
            },[])


    return (

        <div className ='container mt-5 mb-5'>
            {/* <button onClick={feedbackAdded}>feedbackAdded</button> */}
                <h2 className ='text-center'><span style = {{color: '#171B4E'}}>Clients</span> <span style = {{color: '#7AB259'}}>Feedback</span></h2>
                <div className = 'row d-flex justify-content-center mt-5'>
                    {
                        feedback.map((feedback) => <FeedbackCard key = {feedback.image} feedback = {feedback}></FeedbackCard>)
                    }
                </div>
        </div>
    );
};

export default ClientFeedback;