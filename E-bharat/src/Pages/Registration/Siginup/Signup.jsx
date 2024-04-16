import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../../Components/Layout/Layout";
import MyContext from "../../../Contxet/data/MyContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import Loader from '../../../Components/Loader/Loader'
// import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import {auth ,db} from '../../../firebase/FirebaseConfig'
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate()

  const signup = async () => {
    if (name == "" || email == "" || password == "") {
      toast.error("Please fill all the fields");
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      let user = {
        uid: users.user.uid,
        name: name,
        email: email,
        password:password,
      };

      const userRef = collection(db,'user')
      await addDoc(userRef,user)
      setName('')
      setEmail('')
      setPassword('')
      toast.success('Signup Sucessfully')
      setLoading(false)
      navigate('/login')
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  return (
    <Layout>
      <div className=" flex justify-center items-center h-screen">
        {loading && <Loader/>}
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
         <div className=" flex justify-center mb-3">
            <button
              onClick={signup}
              className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            >
              Signup
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Have an account{" "}
              <Link className=" text-red-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
