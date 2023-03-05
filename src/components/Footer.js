import React from "react";
import { Linkedin } from "react-feather";
import { Twitter } from "react-feather";
import { GitHub } from "react-feather";

function Footer() {
	return (
		<section className="Footer">
			<a className="Social-icon"
				href="https://www.linkedin.com/in/jenningsf/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Linkedin />
			</a>
			<a className="Social-icon"
				href="https://www.twitter.com/jenningsf_dev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Twitter />
			</a>
			<a className="Social-icon"
				href="https://www.github.com/jenningsf/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHub />
			</a>
		</section>
	);
}

export default Footer;
