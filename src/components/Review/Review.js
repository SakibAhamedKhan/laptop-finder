import React from 'react';
import './Review.css'

const Review = (props) => {
	const {name, review, ratings, img} = props.reviews;
	return (
		<div className='review'>
			<img src={img} alt="" />
			<p>{name}</p>
			<p><small>Ratings: {ratings}</small></p>
			<p>{review}</p>
		</div>
	);
};

export default Review;