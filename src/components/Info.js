import React from "react";
import memoji from "../images/Memoji.png";
import { Mail } from "react-feather";

function Info() {
	return (
		<section>
			<img src={memoji} alt="Header Image" width="250px"/>
			<h1>Jennings Fairchild</h1>
			<h3>Software Engineer</h3>
			<button className="Button">
				<Mail />
				<span>Email</span>
			</button>
		</section>
	);
}

export default Info;
