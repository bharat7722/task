import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function PatientList() {
	const [isLoading, setisLoading] = useState(true)
	const [updateId, setupdateId] = useState()
	const [patientData, setpatientData] = useState([])
	const [updatePatient, setupdatePatient] = useState({})
	const handlePatientData =async () =>{
		const {data} = await axios.get("http://localhost:5000/patients")
		setpatientData(data)
		setisLoading(false)
	}
	const handleEdit = (id)=>{
		setupdateId(id)
		const newPatient = patientData.filter(item=> item.id == id)
		setupdatePatient(newPatient[0])
	}
	const handleUpdatePatient =async (e) =>{
		e.preventDefault()
		const {data} = await axios.put(`http://localhost:5000/patients/${updateId}`,updatePatient)
		console.log(data);
		handlePatientData()
	}
	useEffect(() => {
	 handlePatientData()
	}, [])
	
  return (
	<div className='container'>
		<div className="row">
			<div className="col-sm-8 offset-sm-2">
				<h5 className="text-center">Patient List</h5>
			<div class="table-responsive">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th scope="col">Sr No</th>
									<th scope="col">Date of birth</th>
									<th scope="col">Age</th>
									<th scope="col">Sex</th>
									<th scope='col'>Height</th>
									<th scope="col">Weight</th>
									<th scope="col">BMI</th>
									<th scope="col">Read Only</th>
								</tr>
							</thead>
							<tbody>
								{
									isLoading ? <div className='spinner spinner-border'></div>
										: patientData.map((item, i) => (
											<tr>
												<th>{i + 1}</th>
												<th>{item.dob}</th>
												<th>{item.age}</th>
												<th>{item.sex}</th>
												<th>{item.height}</th>
												<th>{item.weight}</th>
												<th>{item.bmi}</th>
												<th>
													<button data-bs-target="#update" onClick={e=>handleEdit(item.id) } data-bs-toggle="modal" className='btn btn-success'><i class="bi bi-pencil-square"></i></button>
												</th>
											</tr>
										))
								}
							</tbody>
						</table>
					</div>
			</div>
		</div>

		{/* update modal start  */}

		<div class="modal fade" id="update" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="update" aria-hidden="true">
		  <div class="modal-dialog">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="staticBackdropLabel">Update</h5>
			  </div>
			  <div class="modal-body">
				<form onSubmit={handleUpdatePatient}>
				<label htmlFor="dob">Date of Birth</label>
									<input value={updatePatient.dob} onChange={e=> setupdatePatient({...updatePatient,dob:e.target.value})} type="date" className="form-control" placeholder='select Your Date of birth' />
								<br />
									<label htmlFor="dob">Age</label>
									<input value={updatePatient.age} onChange={e=> setupdatePatient({...updatePatient,age:e.target.value})} type="number" className="form-control" placeholder='Enter Your Age' />
								<br />
									<label htmlFor="dob">Sex</label>
									<select value={updatePatient.sex} onChange={e=> setupdatePatient({...updatePatient,sex:e.target.value})}name="" id="" className="form-select">
										<option selected hidden disabled>Choose your sex</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								<br />
									<label htmlFor="dob">Height</label>
									<input value={updatePatient.height} onChange={e=> setupdatePatient({...updatePatient,height:e.target.value})} type="text" className="form-control" placeholder='Enter Your Height' />
									
								<br />
									<label htmlFor="dob">Weight</label>
									<input value={updatePatient.weight} onChange={e=> setupdatePatient({...updatePatient,weight:e.target.value})} type="number" className="form-control" placeholder='Enter Your Weight' />
								<br />
									<label htmlFor="dob">BMI</label>
									<input value={updatePatient.bmi} disabled type="number" className="form-control" placeholder='Enter MBI' />
								<br />
								<button className="btn btn-success w-100">Update Patience</button>
				</form>
			  </div>
			</div>
		  </div>
		</div>
		
	</div>
  )
}
