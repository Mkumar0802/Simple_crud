import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Link, Outlet} from "react-router-dom";

import Swal from 'sweetalert2';

export function Edit() {
	
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [id, setID] = useState(null);
	const sendDataToAPI = () => {

		// if (!name || !age || !country || !email || !mobile) {
		// 	return Swal.fire({
		// 		icon: 'error',
		// 		title: 'Error!',
		// 		text: 'All fields are required.',
		// 		showConfirmButton: true
		// 	});
		// }

		axios.put(`https://6242b6dfb6734894c154f2f6.mockapi.io/a1/employee/${id}`, {

			name,
			age,
			country,
			email,
			mobile
		}).then(() => {
			
			Swal.fire({
				icon: 'success',
				title: 'Updated!',
				text: `data has been updated.`,
				showConfirmButton: false,
				timer: 1500
				
			});

		})
	}

	useEffect(() => {
		setID(localStorage.getItem('id'))
		setName(localStorage.getItem('name'));
		setAge(localStorage.getItem('age'));
		setCountry(localStorage.getItem('country'));
		setEmail(localStorage.getItem('email'));
		setMobile(localStorage.getItem('mobile'));
		
	}, [])


	return (
		<div className=" bg-slate-200 p-24">

			<form>
				<div class="mb-6">
					<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
					<input type="text" id="name" value={name}
						onChange={(e) => setName(e.target.name)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
				</div>
				<div class="mb-6">
					<label for="age" class="block mb-2 text-sm font-medium  ">Your age</label>
					<input type="number" id="age" value={age} onChange={(e) => setAge(e.target.age)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>
				<div class="mb-6">
					<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
					<input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.country)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
					<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.email)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<div class="mb-6">
					<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
					<input type="number" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.mobile)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<button type="submit" onClick={sendDataToAPI} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/dashboard">Update</Link><Outlet /></button>
			</form>

		</div>
	)

}




export default Edit;