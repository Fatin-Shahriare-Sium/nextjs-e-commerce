import React, { useEffect, useState } from 'react'
import star from '../assets/star.svg'
import usericon from '../assets/user.svg'
import starfill from '../assets/star-fill.svg'
import { useData } from '../store'
import useUrl from './hooks/useUrl'
const ReviewComponent = ({ staticx, ratingObj, productId }) => {
    let [starx, setStarx] = useState(new Array(5).fill(false))
    let [comment, setComment] = useState('')
    let [reviewUser, setReviewUser] = useState({ name: '', time: '' })
    let { auth } = useData()
    let { url } = useUrl()
    useEffect(() => {
        if (staticx) {
            console.log('ratingObj', ratingObj);
            setComment(ratingObj.reviewText)
            setReviewUser({ name: ratingObj.user.name, time: ratingObj.createdAt })
            //ratings star 
            let newStarx = new Array(5).fill(false)
            for (let i = 0; i <= ratingObj.ratings; i++) {
                newStarx[i] = true
            }
            setStarx([...newStarx])
        }

    }, [])
    function handleStar(index) {
        let newStarx = new Array(5).fill(false)
        for (let i = 0; i <= index; i++) {
            newStarx[i] = true
        }

        setStarx([...newStarx])
    }

    let handleReview = (rate, comment, id) => {

        let ratingLength = rate.filter((sig, index) => sig).length

        fetch(`${url}/review/create`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: ratingLength,
                comment,
                userId: auth.user._id,
                productId: id

            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='review-wrapper'>

            <div className='review-user'>
                <img src={auth.user.profilePic == '' ? usericon : auth.user.profilePi} alt="" />
            </div>
            <div className='review-box ms-3'>
                {
                    staticx && <div className="review-user__info">
                        <p>{reviewUser.name}. {reviewUser.time}</p>
                    </div>
                }
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', width: '213px' }} className='star-container'>
                    {starx.map((sig, index) => <div>
                        <img onClick={() => handleStar(index)} style={{ width: '20px', height: '30px' }} src={starx[index] ? starfill : star} alt='' />
                    </div>)}
                </div>
                <div className="comment-box mt-3">
                    {
                        staticx ? <p>{comment}</p> : <input onChange={(event) => setComment(event.target.value)} value={comment} placeholder='write your review' style={{ width: '100%' }} />
                    }
                </div>
                {
                    !staticx && <div className='mt-3'>
                        <button onClick={() => handleReview(starx, comment, productId)} className='btn btn-outline-success'>Done</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ReviewComponent;
