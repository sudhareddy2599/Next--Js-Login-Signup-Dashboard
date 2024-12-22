"use client";
import { useRouter } from "next/navigation";
import style from "../page.module.css";
import { use, useState } from "react";

const Signup = () => {
  const [userName,setUserName]= useState("")
  const [password,setPassword]= useState("")

  const router = useRouter();


  const handleSignUp = () => {
    const userData = { userName, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    //For Send data to local Stroage

    alert("SignUp Sucessfull")
    router.push("/")
  }

  return (
    <>
      <h2 className={style.text}>Sign Up Page</h2>
      <br />

      <label className={style.label}>First Name </label>
      <br />
      <input
        className={style.inputfield}
        type="text"
        placeholder="Enter First Name"
        
      />
      <br />
      <br />
      <label className={style.label}>Last Name</label>
      <br />
      <input
        className={style.inputfield}
        type="text"
        placeholder="Enter Last Name"
      />
      <br />
      <br />
      <label className={style.label}>UserName</label>
      <br />
      <input
        className={style.inputfield}
        type="UserName"
        placeholder="UserName"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
      />
      <br />
      <br />
      <label className={style.label}>PassWord</label>
      <br />
      <input
        className={style.inputfield}
        type="PassWord"
        placeholder=" PassWord"
        value={password}
        onChange={(e) =>setPassword(e.target.value) }
      />
      <br />
      <br />

      <button
        className={style.signupbutton}
        onClick={() => handleSignUp()}>
        SignUp
      </button>
    </>
  );
};

export default Signup;
