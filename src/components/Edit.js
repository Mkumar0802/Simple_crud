
import React from "react";
import { useEffect, useState } from 'react';
import { Link, Outlet, } from "react-router-dom";

import Swal from 'sweetalert2';

export function Edit() {
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
		fetch("https://6242b6dfb6734894c154f2f6.mockapi.io/a1/employee").then((result) => {
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


	function selectUser(id) {
		let item = users;
		setId(item.id)
		setName(item.name)
		setAge(item.age)
		setEmail(item.email)
		setCountry(item.country)
		setMobile(item.mobile);


	}


	function updateUser() {
		let item = { name, mobile, email, age, country }
		console.warn("item", item)
		fetch(`https://6242b6dfb6734894c154f2f6.mockapi.io/a1/employee/${id}`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		}).then((result) => {
			result.json().then((resp) => {
				console.warn(resp)
				getUsers()
			})
		})

		Swal.fire({
			icon: 'success',
			title: 'Updated!',
			text: `data has been updated.`,
			showConfirmButton: false,
			timer: 1500

		});

	}




	return (
		<>
		<div className=" bg-slate-200 p-24" >

			<form>
				<div class="mb-6">
					<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
					<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>
				<div class="mb-6">
					<label for="age" class="block mb-2 text-sm font-medium  ">Employee Id</label>
					<input type="tel" id="age" value={age} onChange={(e) => setAge(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>
				<div class="mb-6">
					<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
					<input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
					<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<div class="mb-6">
					<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
					<input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<button onClick={updateUser} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  <Link to="/dashboard">Update</Link></button>
			</form>

		</div>
		<Outlet/>
		</>
	)

}




export default Edit;







