import React from "react";
import "./NavSocial.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';

export default function NavSocial() {
	
	return (
		<div className="nav-social">
			<div>
				<span>Find us in</span>
				<span className="nav-icon-group">
					<FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <RedditIcon />
				</span>
			</div>
		</div>
	)
}