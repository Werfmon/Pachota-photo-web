import React, {useEffect, useState} from 'react'

export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch("https://pachota-photo-backend.herokuapp.com/api/feedbacks", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        })
        .then(res => {
            if (res.status === 401) {
                throw new Error("invalid Upload");
            }
            return res.json();
        })
        .then(data => setFeedbacks(data))
        .catch(err => console.error(err));
    }, [])
    return (
        <main className='admin-main-feddback'>
            <h1 className='feedbacks-heading'>Feedbacks</h1>
            
            <ul className='feedback-list-admin'>
                {feedbacks.map(feedback => (
                    <li key={feedback.id}>
                        <p className='feedback-email'>E-mail: {feedback.email}</p>
                        <p className='feedback-subject'>Předmět: {feedback.subject}</p>
                        <p className='feedback-message' >{feedback.message}</p>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}
