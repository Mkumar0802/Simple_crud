import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';




const Main = () => {
    const [dashboard, setDashboard] = useState([]);
    console.log(dashboard);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                `http://localhost:3000/employee/getemployee`
            );
            setDashboard(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (

        <div className="w-auto h-auto bg-slate-700  ">
            <div>
                <h2 className="px-16 pt-5  text-xl   md:text-2xl font-bold text-white  ">Dashboard</h2>
            </div>
            <div>
                <table>
                    <thead>
                        <tr class="border-collapse border border-slate-500 " >
                            <th class="border-3 border-slate-700 ... " >id</th>
                            <th class="border-3 border-slate-700 ...">Name</th>
                            <th class="border-3 border-slate-700 ...">Age</th>
                            <th class="border-3 border-slate-700 ...">Country</th>
                            <th class="border-3 border-slate-700 ...">Email</th>
                            <th class="border-3 border-slate-700 ...">Mobile</th>
                            <th class="border-3 border-slate-700 ... self-center text-center" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className=" pr-10  mx-10   sm:grid-flow-grid-cols-2   md:grid-cols-3 gap-5      lg:grid grid-cols-5 ">
                
                    
                        <div className="p-1 mr-2  m-5  bg-white  rounded-lg  max-w-sm  sm:rounded-lg  " >

                            <table>


                                <tbody>
                                    <tr >
                                    <td onClick={() => setDashboard(id)}  class="border-3 border-slate-700 ..."></td>
                                        <td onClick={() => setDashboard(name)}  class="border-3 border-slate-700 " > </td>
                                        <td onClick={() => setDashboard(age)}  class="border-3 border-slate-700 ..."></td>
                                        <td onClick={() => setDashboard(country)}   class="border-3 border-slate-700 ..."></td>
                                        <td onClick={() => setDashboard(email)}   class="border-3 border-slate-700 ..."></td>
                                        
                                        <td onClick={() => setDashboard(mobile)}  class="border-3 border-slate-700 ..."></td>
                                        <td class="border-3 border-slate-700 ... ">
                                            <button className="Edit-button"  >
                                                Edit
                                            </button>
                                        </td>
                                        <td class="border-2 border-slate-700 ... flex justify-center ..." >
                                            <button >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>


                            </table>


                        </div>


                    );
               
            </div>

        </div>




    );
};

export default Main;