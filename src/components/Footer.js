import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<section>
			<a
				href="https://www.linkedin.com/in/jenningsf/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedinIn />
			</a>
			<a
				href="https://www.twitter.com/jenningsf_dev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaTwitter />
			</a>
			<a
				href="https://www.github.com/jenningsf/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub />
			</a>
		</section>
	);
}

export default Footer;
