import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

export function Add() {


	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const sendDataToAPI = () => {
		axios.post(`https://employee-crudapi.herokuapp.com/employee/saveemployee`, {

			name,
			age,
			country,
			email,
			mobile
		}).then(() => {
			Swal.fire({
				icon: 'success',
				title: 'Added!',
				text: `data has been Addedd.`,
				showConfirmButton: false,
				timer: 1500

			});

		})
	}


	return (

		<>
			<div className=" bg-slate-200   ">

				<div className="flex bg-slate-500  w-screen p-6 text-white ">


					<button className="text-xl   md:text-4xl font-bold    whitespace-nowrap"><Link to="/dashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link> </button>
					<div className="px-36 font-serif text-xl   md:text-4xl font-bold ">
						<h1 className="">Add Employee Details  </h1>
					</div>
				</div>




				<form className="ml-36 py-12">

					<div class="mb-6">
						<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
						<input type="text" id="name" onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " />
					</div>
					<div class="mb-6">
						<label for="age" class="block mb-2 text-sm font-medium  ">Employee Id</label>
						<input type="number" id="age" onChange={(e) => setAge(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>
					<div class="mb-6">
						<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
						<input type="text" id="country" onChange={(e) => setCountry(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>

					<div class="mb-6">
						<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
						<input type="email" id="email" onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>

					<div class="mb-6">
						<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
						<input type="tel" id="mobile" onChange={(e) => setMobile(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>
					<div class="ml-40">
						<button type="submit" onClick={sendDataToAPI}
							class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" ><Link to="/dashboard">Submit</Link> 	</button>
					</div>
				</form>

			</div>
			<Outlet />
		</>
	)

}




export default Add;







