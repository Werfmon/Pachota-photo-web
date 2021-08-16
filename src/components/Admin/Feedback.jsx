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
    console.log(feedbacks);
    return (
        <main>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback.id}>{feedback.name}</li>
                ))}
            </ul>
        </main>
    )
}
