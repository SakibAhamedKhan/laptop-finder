import React from 'react';
import './Blogs.css'

const Blogs = () => {
	return (
		<div className='blogs'>
			<h1>Blogs</h1>
			<div className='question'>
				<h3>Q:1. What is the purpose of Context API?</h3>
				<p><strong>Ans: </strong>When the component needs to send props to his many child components and the child needs to send the same props to his child then we can use Context API. Context API makes it easier to send props from parent to his child to child. You can send Array, object, and function by Context API. Context API reduces to write send data from parent to child.</p>
			</div>
			<div className='question'>
				<h3>Q:2.  What is a Semantic tag?</h3>
				<p><strong>Ans: </strong>Semantic tag improves the HTML tag to human and machine-readable. The search engine can find content more accurately. The human who is not able to read the site can easily read with the help of a browser. Semantic tags help the developer find the content. SEO is improved by using the semantic tag.</p>
			</div>
			<div className='question'>
				<h3>Q:3. Difference between Inline and Inline-block elements?</h3>
				<div className='question-3'>
					<div className='part'>
						<div className='table title'>Inline Element</div>
						<div className='table'>1. You can not set the height and width for the inline element</div>
						<div className='table'>2. Some tag like strong, em , b , i , q, mark are inline elements</div>
					</div>
					<div className='part'>
						<div className='table title'>Inline-block Element</div>
						<div className='table'>1. You can set the height and width for the inline-block element</div>
						<div className='table'>2. There is no inline-block element tag in Html but you can set the specific tag in inline-block.</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;