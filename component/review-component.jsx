import React, { useEffect, useState } from 'react'
import star from '../assets/star.svg'
import usericon from '../assets/user.svg'
import starfill from '../assets/star-fill.svg'
import { useData } from '../store'
import useUrl from './hooks/useUrl'
import moment from 'moment'
const ReviewComponent = ({ staticx, ratingObj, productId, autoRefresher }) => {
    let [starx, setStarx] = useState(new Array(5).fill(false))
    let [comment, setComment] = useState('')
    let [reviewUser, setReviewUser] = useState({ name: '', time: '', profilePic: '' })
    let { auth } = useData()
    let { url } = useUrl()
    useEffect(() => {
        if (staticx) {
            console.log('ratingObj', ratingObj);
            setComment(ratingObj.reviewText)
            setReviewUser({ name: ratingObj.user.name, time: ratingObj.createdAt, profilePic: ratingObj.user.profilePic })
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
                autoRefresher()
                setStarx(new Array(5).fill(false))
                setComment('')
            })
    }
    let REVIEW_WRAPPER_STYLE = {
        display: 'flex',
        alignItems: 'center',

    }
    return (
        <div style={staticx ? { ...REVIEW_WRAPPER_STYLE, boxShadow: 'rgb(0 0 0 / 10%) -1px 4px 20px 20px' } : REVIEW_WRAPPER_STYLE} className='review-wrapper'>

            <div className='review-user'>
                {
                    staticx ? <img style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} src={reviewUser.profilePic} alt="" /> :
                        <img style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} src={auth.user.profilePic == '' ? usericon : auth.user.profilePic} alt="" />
                }
            </div>
            <div className='review-box ms-5'>
                {
                    staticx && <div className="review-user__info">
                        <p style={{ fontSize: '1.3rem', fontWeight: '700' }}>{reviewUser.name}. {moment(reviewUser.time).fromNow()}</p>
                    </div>
                }
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', width: '213px' }} className='star-container'>
                    {starx.map((sig, index) => <div>
                        <img onClick={staticx ? () => { } : () => handleStar(index)} style={{ width: '20px', height: '30px', objectFit: 'contain' }} src={starx[index] ? starfill : star} alt='' />
                    </div>)}
                </div>
                <div style={{ width: '97%' }} className="comment-box mt-3 ">
                    {
                        staticx ? <p style={{ fontSize: '1.5rem', fontWeight: '500', wordBreak: 'break-word' }}>{comment}</p> : <input onChange={(event) => setComment(event.target.value)} value={comment} placeholder='write your review' style={{ width: '100%', fontSize: '1.3rem' }} />
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
