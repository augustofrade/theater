import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import FooterSocial from "./FooterSocial";
import "./Footer.css";

export default function Footer() {
	
	return (
		<footer>
			<div className="footer-social-cntr">
				<FooterSocial icon={<FacebookIcon />} text="/movietheater" />
				<FooterSocial icon={<InstagramIcon />} text="/movietheater" />
				<FooterSocial icon={<TwitterIcon />} text="/movietheater" />
				<FooterSocial icon={<RedditIcon />} text="/movietheater" />
			</div>
			<div className="footer-content">
				<p className="lead"><b>Maxim Movie Theater</b> is a to-be fully-functional movie theater application made with React</p>
				<p className="lead">Author: <a href="https:/github.com/augustofrade">Augusto Frade</a></p>
			</div>
		</footer>
	)
}