
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { URL } from "../Helper/Url";

import { Link,useNavigate,Outlet } from "react-router-dom";


function Dashboard(props) {
    const navigate = useNavigate();
    const [dashboardList, setDashboardList] = useState([]);
    console.log(dashboardList);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                `${URL}`
            );
            setDashboardList(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const onDelete = async (id) => {
    await    axios.delete(  `${URL}` +id)
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                getData();
            })
    }


    const setData = ({id, name, age, country, email, mobile}) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('country', country)
        localStorage.setItem('email', email)
        localStorage.setItem('mobile', mobile)
      
        navigate('/edit');
    }
  



    return (
        <>
            <div class="bg-slate-500">
                <div className="flex  p-8 space-x-12 justify-center">
                    <h2 className="  text-xl   md:text-2xl font-bold text-white  ">Employee Dashboard</h2>

                </div>
                <div className="flex justify-center  ">
                    <button className=" text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 "><Link to="/add"><svg xmlns="http://www.w3.org/2000/svg" class=" flex h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>Add</Link> </button>
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
                                        <th scope="col" class=" py-3 px-6 col-span-2 ">Action

                                        </th>


                                    </tr>
                                </thead>

                                <tbody>
                                    {dashboardList.map((menu) => {
                                        return (
                                            <tr className="border-b odd:bg-white even:bg-gray-50  " key={menu.id}>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap  " >{menu.id}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.age}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{menu.country}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.email}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.mobile}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                                    <div className="flex justify-center   gap-3   ">
                                                        <button onClick={() => setData(menu)} className="flex text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>  Edit
                                                        </button>
                                                        <button onClick={() => onDelete(menu.id)} className=" flex text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>   Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}








export default Dashboard;