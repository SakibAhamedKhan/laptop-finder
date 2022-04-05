import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
	const [reviews, setReviews] = useReviews();
	const review =reviews.slice(0,3);

	const navigate = useNavigate();

	const showAllReview = () =>{
		const path = '/reviews';
		navigate(path);
	}

	return (
		<div>
			<div className='home'>
				<div className='intro-container'>
					<h1>Welcome to the Laptop World</h1>
					<p>A qualityfull brand have run this store for give the customer better service</p>
				</div>
				<div className='laptop-img-container'>
					<img src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-b11mo/modern-14-b11mo-010-500x500.jpg" alt="" />
				</div>
			</div>
			<div className='review-section'>
				<h1>Customer Reviews(3)</h1>
				<div className='home-review-section'>
					{
						review.map(r=> <Review
							key={r.id}
							reviews={r}
						></Review>)
					}
				</div>
				<div className='see-all-review'>
					<button className='review-section-btn' onClick={showAllReview}>See All Review</button>
				</div>
			</div>
		</div>
	);
};

export default Home;