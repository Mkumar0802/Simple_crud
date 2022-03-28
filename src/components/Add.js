import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Swal from 'sweetalert2';

export function Add() {
	const [user, setUser] = React.useState({
	
		name: "",
		age: "",
		country: "",
		email: "",
		mobile: "",
	})
	const handleChange = (prop) => (event) => {
		setUser({ ...user, [prop]: event.target.value });
	};

	const submit = async (e) => {
		e.preventDefault()

		


		try {
			var response = await axios.post(`http://localhost:8080/employee/saveemployee`, user)
			console.log(response)

			Swal.fire({
				icon: 'success',
				title: 'Added!!!',
				text: ' Data has been Added.',
				showConfirmButton: false,
				timer: 1500
			  })

		}
		catch (err) {
			
			// alert("Invalid error ")
			console.log(user.name)
			console.log(user.age)
			console.log(user.country)
			console.log(user.email)
			console.log(user.mobile)

		}

		

	}


	return (
		<div className=" bg-slate-200 p-24">

<h2 className=" text-xl   md:text-2xl font-bold  "><Link to="/dashboard">Dashboard</Link></h2>
			<form>
				<div class="mb-6">
					<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
					<input type="text" id="name"  value={user.name} onChange={handleChange('name')} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
				</div>
				<div class="mb-6">
					<label for="age" class="block mb-2 text-sm font-medium  ">Your age</label>
					<input type="number" id="age"  value={user.age} onChange={handleChange('age')}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
				</div>
				<div class="mb-6">
					<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
					<input type="text" id="country"  value={user.country} onChange={handleChange('country')} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
				</div>

				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
					<input type="email" id="email" value={user.email} onChange={handleChange('email')}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
				</div>

				<div class="mb-6">
					<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
					<input type="number" id="mobile"  value={user.mobile} onChange={handleChange('mobile')}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
				</div>

				<button type="submit" onClick={submit}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/dashboard">Submit</Link><Outlet/></button>
			</form>

		</div>
	)

}




export default Add;







