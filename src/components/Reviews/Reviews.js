import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
	const [reviews, setReviews] = useReviews();


	return (
		<div className='reviews'>
			{
				reviews.map(r=> <Review
					key={r.id}
					reviews={r}
				></Review>)
			}		
		</div>
	);
};

export default Reviews;