import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export function Edit() {
	const [name, setName] = useState('');
    const [age, setAge] = useState('');
	const [country,setCountry] = useState('');
	const [email,setEmail] = useState('');
	const [mobile,setMobile] = useState('');
	
    const [ID, setID]  = useState(null);
    const sendDataToAPI = () => {
        axios.put(`http://localhost:8080/employee/updateemployee/${ID}`, {
            name,
			age,
			country,
			email,
			mobile
        }).then(() => {
           
        })
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
		setCountry(localStorage.getItem('country'));
		setEmail(localStorage.getItem('email'));
		setMobile(localStorage.getItem('mobile'));
        setID(localStorage.getItem('ID'))
    }, [])


	return (
		<div className=" bg-slate-200 p-24">

			<form>
				<div class="mb-6">
					<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
					<input type="text" id="name"  value={name}
                        onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
				</div>
				<div class="mb-6">
					<label for="age" class="block mb-2 text-sm font-medium  ">Your age</label>
					<input type="number" id="age"  value={age} onChange={(e) => setAge(e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>
				<div class="mb-6">
					<label for="country" class="block mb-2 text-sm font-medium  ">country</label>
					<input type="text" id="country"  value={country} onChange={(e) => setCountry(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
					<input type="email" id="email" value={email} oonChange={(e) => setEmail(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<div class="mb-6">
					<label for="mobile" class="block mb-2 text-sm font-medium  ">Your mobile</label>
					<input type="number" id="mobile"  value={mobile} onChange={(e) => setMobile(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>

				<button type="submit" onClick={sendDataToAPI}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
			</form>

		</div>
	)

}




export default Edit;