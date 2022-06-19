
import { useEffect, useState } from 'react';



function Single() {


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







    return (

        <div className='bg-slate-500'>
            <div className="flex  p-8 space-x-12 justify-center">
                <h2 className="  text-xl   md:text-2xl font-bold text-white  ">Employee</h2>
                <div class="flex justify-center">

                </div>
            </div>

            <div class="flex flex-col  p-5">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-gray-100 ">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Id
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Name
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Employee Id
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Country
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Email
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Mobile
                                        </th>



                                    </tr>
                                </thead>

                                <tbody >


                                    <tr className="border-b odd:bg-white even:bg-gray-50  " key={id}>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap  "  >{id}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap " >{name}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{age}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{country}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{email}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{mobile}</td>

                                    </tr>






                                </tbody>

                            </table>
                        </div>

                    </div>






                </div>
            </div>
        </div>
    )
}

export default Single