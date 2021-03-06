
import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../Helper/Url";
import Swal from 'sweetalert2';

export function Edit() {
	const navigate = useNavigate();
	const [users, setUser] = useState([]);
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [id, setId] = useState();


	useEffect(() => {
		setId(localStorage.getItem('id'))
		setName(localStorage.getItem('name'));
		setAge(localStorage.getItem('age'));
		setCountry(localStorage.getItem('country'));
		setEmail(localStorage.getItem('email'));
		setMobile(localStorage.getItem('mobile'));

	}, [])


	function getUsers() {
		fetch(`${URL}`).then((result) => {
			result.json().then((resp) => {
				console.warn(resp)
				setUser(resp)
				setName(resp[0].name)
				setEmail(resp[0].email)
				setCountry(resp[0].country)
				setAge(resp[0].age)
				setMobile(resp[0].mobile)
				setId(resp[0].id)
			})
		})
	}


	function selectUser() {
		let item = users;
		setId(item.id)
		setName(item.name)
		setAge(item.age)
		setEmail(item.email)
		setCountry(item.country)
		setMobile(item.mobile);


	}


	const updateUser = async () => {

		if (!name || !age || !country || !email || !mobile) {
			return Swal.fire({
				icon: 'error',
				title: 'Error!',
				text: 'All fields are required.',
				showConfirmButton: true
			});
		}
		await axios.put(`${URL}`+ id, {

			
			name,
			age,
			email,
			country,
			mobile

		});
		Swal.fire({
			icon: 'success',
			title: 'Updated!',
			text: `${name}   data has been updated.`,
			showConfirmButton: false,
			timer: 1500

		});
		
		navigate('/dashboard');
		getUsers();
	}

	return (
		<>


			<div className=" bg-slate-400  ">


				<div className="flex bg-slate-600  w-auto  text-white p-6 ">


					<button onClick={selectUser} className="text-xl   md:text-4xl font-bold    whitespace-nowrap"><Link to="/dashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link> </button>
					<div className="px-36 font-serif text-xl   md:text-4xl font-bold ">
						<h1 className="">Edit Employee Details  </h1>
					</div>
				</div>


				<form className="ml-36 py-12">

					<div class="mb-6">
						<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
						<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " />
					</div>
					<div class="mb-6">
						<label for="age" class="block mb-2 text-sm font-medium  ">Employee Id</label>
						<input type="tel" id="age" value={age} onChange={(e) => setAge(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>
					<div class="mb-6">
						<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
						<input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>

					<div class="mb-6">
						<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
						<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>

					<div class="mb-6">
						<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
						<input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 " />
					</div>
					<div class="ml-40">
					<Link to="/dashboard"	><button type="submit" onClick={updateUser}
							class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >Submit 	</button></Link>
					</div>
				</form>
			</div>

		</>
	)

}


export default Edit;





