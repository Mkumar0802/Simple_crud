import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../Helper/Url";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(10)
      .required(),
    country: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter Alphapet")
      .max(10)
      .required(),
    email: yup
      .string()
      .email("That doesn't look like a valid email")
      .required("This field is required."),
    phonenumber: yup
      .string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    employeeid: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits"),
  })
  .required();

export function Edit() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setCountry(localStorage.getItem("country"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
  }, []);

  function getUsers() {
    fetch(`${URL}`).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        setUser(resp);
        setName(resp[0].name);
        setEmail(resp[0].email);
        setCountry(resp[0].country);
        setAge(resp[0].age);
        setMobile(resp[0].mobile);
        setId(resp[0].id);
      });
    });
  }

  function selectUser() {
    let item = users;
    setId(item.id);
    setName(item.name);
    setAge(item.age);
    setEmail(item.email);
    setCountry(item.country);
    setMobile(item.mobile);
  }

  const updateUser = async () => {

    if (!name || !age || !country || !email || !mobile) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    await axios.put(`${URL}` + id, {
      name,
      age,
      email,
      country,
      mobile,
    });
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${name}   data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/dashboard");
    getUsers();
  };

  return (
    <>
      <div className=" bg-slate-400  ">
        <div className="flex bg-slate-600  w-auto  text-white p-6 ">
          <button
            onClick={selectUser}
            className="text-xl   md:text-4xl font-bold    whitespace-nowrap"
          >
            <Link to="/dashboard">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </Link>{" "}
          </button>
          <div className="px-36 font-serif text-xl   md:text-4xl font-bold ">
            <h1 className="">Edit Employee Details </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit(updateUser)} className="ml-36 py-12 ">
          <div class="mb-6">
            <label for="Name" class="block mb-2 text-sm font-medium  ">
              Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 "
            />
            <p className="text-red-700">{errors.firstName?.message}</p>
          </div>
          <div class="mb-6">
            <label for="age" class="block mb-2 text-sm font-medium  ">
              Employee Id
            </label>
            <input
              {...register("employeeid")}
              type="tel"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 "
            />
            <p className="text-red-700">{errors.employeeid?.message}</p>
          </div>
          <div class="mb-6">
            <label for="country" class="block mb-2 text-sm font-medium  ">
              country
            </label>
            <input
              {...register("country")}
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 "
            />
            <p className="text-red-700">{errors.country?.message}</p>
          </div>

          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium  ">
              Your email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 "
            />
            <p className="text-red-700">{errors.email?.message}</p>
          </div>

          <div class="mb-6">
            <label for="mobile" class="block mb-2 text-sm font-medium  ">
              Your mobile
            </label>
            <input
              {...register("phonenumber")}
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12  p-2.5 "
            />
            <p className="text-red-700">{errors.phonenumber?.message}</p>
          </div>
          <div class="ml-40">
            
              <button
                type="submit"
                class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Submit
              </button>
           
          </div>
        </form>
      </div>
    </>
  );
}

export default Edit;
