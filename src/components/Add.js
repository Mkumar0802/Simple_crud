import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// import Swal from 'sweetalert2';

export function Add() {
	
	
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [mobile,setMobile] = useState('');
	const [email,setEmail] = useState('');
	const sendDataToAPI = () => {
	  axios.post(`https://6242b6dfb6734894c154f2f6.mockapi.io/a1/employee`, {
		name,
		age,
		country,
		email,
		mobile
	  }).then(() => {
		
	  })
	}


	return (
		<div className=" bg-slate-200 p-24">

			<h2 className=" text-xl   md:text-2xl font-bold  "><Link to="/dashboard">Dashboard</Link></h2>
			<form>
				<div class="mb-6">
					<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
					<input type="text" id="name" onChange={(e) => setName(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
				</div>
				<div class="mb-6">
					<label for="age" class="block mb-2 text-sm font-medium  ">Your age</label>
					<input type="number" id="age" onChange={(e) => setAge(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
				</div>
				<div class="mb-6">
					<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
					<input type="text" id="country" onChange={(e) => setCountry(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
				</div>

				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
					<input type="email" id="email" onChange={(e) => setEmail(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
				</div>

				<div class="mb-6">
					<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
					<input type="number" id="mobile" onChange={(e) => setMobile(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
				</div>

				<button type="submit" onClick={sendDataToAPI } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/dashboard">Submit</Link></button>
			</form>
			<Outlet />
		</div>

	)

}




export default Add;







