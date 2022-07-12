import axios from 'axios'
import React, { useState } from 'react'

export default function Drug() {
	const [dob, setdob] = useState()
	const [age, setage] = useState()
	const [height, setheight] = useState()
	const [weight, setweight] = useState()
	const [sex, setsex] = useState()
	const [bmi, setbmi] = useState()
	const handlePatience = async(e)=>{
		e.preventDefault()
		const {data} = await axios.post("http://localhost:5000/patients",{dob,age,height,weight,sex,bmi})
		e.target.reset()
	}
	return (
		<div className='container'>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="card mt-4">
						<div className="card-header text-center">Add Patient</div>
						<div className="card-body">
							<form onSubmit={handlePatience}>
									<label htmlFor="dob">Date of Birth</label>
									<input onChange={e=> setdob(e.target.value)} type="date" className="form-control" placeholder='select Your Date of birth' />
								<br />
									<label htmlFor="dob">Age</label>
									<input onChange={e=> setage(e.target.value)} type="number" className="form-control" placeholder='Enter Your Age' />
								<br />
									<label htmlFor="dob">Sex</label>
									<select onChange={e=> setsex(e.target.value)} name="" id="" className="form-select">
										<option selected hidden disabled>Choose your sex</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								<br />
									<label htmlFor="dob">Height</label>
									<input onChange={e=> setheight(e.target.value)} type="text" className="form-control" placeholder='Enter Your Height' />
									
								<br />
									<label htmlFor="dob">Weight</label>
									<input onChange={e=> setweight(e.target.value)} type="number" className="form-control" placeholder='Enter Your Weight' />
								<br />
									<label htmlFor="dob">BMI</label>
									<input onChange={e=> setbmi(e.target.value)} type="number" className="form-control" placeholder='Enter MBI' />
								<br />
								<button className="btn btn-success w-100">Add Patience</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
