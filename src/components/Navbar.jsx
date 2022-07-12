import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
	<nav class="navbar navbar-expand-lg bg-dark">
	<div class="container-fluid">
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
		  <Link to="/" style={{textDecoration:"none"}} class="nav-item px-4">
			<a class="nav-link btn btn-outline-primary text-light" aria-current="page" href="#">Add Patient</a>
		  </Link>
		  <Link to="/patient-list"  style={{textDecoration:"none"}}>
		  <a className='nav-link btn btn-outline-primary text-light' href="#">Patient List</a>
		  </Link>
		</ul>
	  </div>
	</div>
  </nav>
  )
}
