import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

export default function Nav() {
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{top: 0, left: 0, right: 0, position: "fixed"}}>
		  <Link className="navbar-brand" to="/">Maxim Theater</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <Link className="nav-link" to="/">Home</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/movies">Movies</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/signup">Sign up</Link>
		      </li>
		    </ul>
		    <Link style={{color: "#bbb", marginRight: 100, textDecoration: "none"}} to="/account">
		    	<PersonOutlineOutlinedIcon style={{fontSize: 30}}/>
		    	<span>Account</span>
		    </Link>
		    <form className="form-inline my-2 my-lg-0">
		      <input className="form-control mr-sm-2" type="search" placeholder="Search movies" aria-label="Search" />
		      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchOutlinedIcon /></button>
		    </form>
		  </div>
		</nav>
	)
}