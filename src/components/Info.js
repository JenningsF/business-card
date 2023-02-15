import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Info() {
	return (
		<section>
			<h1>Jennings Fairchild</h1>
			<h3>Software Engineer in Training</h3>
			<button>
				<FaEnvelope />
				<a href="mailto:jenningsf@protonmail.com">Email</a>
			</button>
		</section>
	);
}

export default Info;
