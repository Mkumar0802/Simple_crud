import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Swal from 'sweetalert2';




function Dashboard(props) {
    const [dashboardList, setDashboardList] = useState([]);
    console.log(dashboardList);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                `http://localhost:8080/employee/getemployee`
            );
            setDashboardList(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    function deleteUser(id) {
        fetch(`http://localhost:8080/employee/deleteemployee/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })

        })
    }





    return (
        <>
            <div class="bg-slate-500">
                <div className="flex  p-6 space-x-12">
                    <h2 className="  text-xl   md:text-2xl font-bold text-white  ">Dashboard</h2>
                    <button className=" text-xl   md:text-2xl font-bold text-white "><Link to="/add">Add</Link><Outlet /></button>
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
                                            Age
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
                            </table>
                        </div>
                        {dashboardList.map((menu) => (<MenuCard id={menu.id} name={menu.name} age={menu.age} country={menu.country} email={menu.email} mobile={menu.mobile} />))}
                    </div>
                </div>
            </div>

        </>
    )
}

function MenuCard({ id, name, age, country, email, mobile }) {
    return (
        <div class="flex flex-col  p-5">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-md sm:rounded-lg">
                        <table class="min-w-full">


                            <tbody>

                                <tr className="border-b odd:bg-white even:bg-gray-50  ">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap  " >{id}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{name}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{age}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{country}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{email}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{mobile}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex justify-center   gap-3 ">
                                            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                Edit
                                            </button>


                                            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>


                        </table>



                    </div>
                </div>
            </div>
        </div>


    )



}



export default Dashboard;