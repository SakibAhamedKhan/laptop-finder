import React from 'react';
import './Home.css'

const Home = () => {
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
			</div>
		</div>
	);
};

export default Home;