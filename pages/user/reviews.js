import React, { useEffect, useState } from 'react'
import useUrl from '../../component/hooks/useUrl'
import ReviewComponent from '../../component/review-component'
import { useData } from '../../store'
const UserReviews = () => {
    let { url } = useUrl()
    let { auth } = useData()
    let [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`${url}/user/reviews/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setReviews(data.userReviews)
            })
    }, [])
    return (<>
        <p style={{ fontSize: '2rem', fontWeight: '700', marginLeft: '1%' }}>Your Reviews</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: "100%", alignItems: 'center' }}>
            {reviews.map((sig, index) => <ReviewComponent key={index} staticx={true} ratingObj={sig} />)}
        </div>
    </>
    )
}

export default UserReviews
