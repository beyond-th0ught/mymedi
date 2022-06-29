
import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js'
import './index.css';


ReactDom.render(
	<>
		<App/>
	</>,
 	document.getElementById('root')
	);

//(Q1) jsx use and what is babel and why we use babel

//1st method
// ReactDom.render(
// 	react.createElement("h1",null,"Khushboo yadav")
// 	, document.getElementById("root")
// );

//2nd method
// var h1 = document.createElement("h1");
// h1.innerHTML = "Tejas Thakare";
// document.getElementById("root").appendChild(h1);

//(Q2) how to render mumliple Elements inside ReactDom.render()?

//1st method
// ReactDom.render(
// 	[
// 	<h1>Khushboo yadav </h1>,
// 	<p>Tejas Thakare</p>
// 	], 
// document.getElementById("root")
// );

//2nd method
// ReactDom.render(
// 	<div>
// 	<h1>Khushboo yadav </h1>
// 	<p>Tejas Thakare</p>
// 	</div>, 
// document.getElementById("root")
// );

//3rd method
// ReactDom.render(
// 	<>
// 	<h1>Khushboo yadav </h1>
// 	<p>Tejas Thakare</p>
// 	</>, 
// document.getElementById("root")
// );

//(Q3) understanding  React Fragment 
// ReactDom.render(
// 	<React.Fragment>
// 	<h1>heyy its me Khushboo</h1>
// 	<p>he Khushboo how are you</p>
// 	<>
// 		<img src={ Cat } className="IMG"/>
// 	</>
// 	<>
// 		<img src={ Cat } className="IMG"/>
// 	</>
// 	</React.Fragment>,
// 	document.getElementById("root")
// );
// ReactDom.render(
// 	<div>
// 	<h1>heyy its me Khushboo</h1>
// 	<p>he Khushboo how are you!!</p>
// 	</div>,
// 	document.getElementById("root")
// );