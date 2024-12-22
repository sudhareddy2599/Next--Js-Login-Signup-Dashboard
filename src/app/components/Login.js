"use client";

import { useRouter } from "next/navigation";
import style from "../page.module.css";
import { useState } from "react";

const Login = () => {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const router = useRouter();

console.log(userName);
console.log(password);

  const handleLogin = () => {
   const storedUserData = localStorage.getItem("userData");
   const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  if (
      parsedUserData &&
      userName === parsedUserData.userName &&
      password === parsedUserData.password
    ) {

    alert("Login succesful")
    router.push("/Dashboard")
    setUserName("");
    setPassword("")
  }else{
    alert("Login Failed!!")
    alert("New User go to signup")
  }
}

  return (
    <>
      <h2 className={style.text}>This is Login page</h2>
      <br />
      <label className={style.label}>UserName</label>
      <br />
      <input
        className={style.inputfield}
        type="UserName"
        placeholder="UserName"
        value={userName}
        onChange={(e) =>setUserName(e.target.value)}

      />
      <br />
      <br />
      <label className ={style.label}>PassWord</label>
      <br />
      <input
        className={style.inputfield}
        type="PassWord"
        placeholder="Enter PassWord"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <br />
      <br />

      <button className={style.loginbutton} onClick={() =>  handleLogin()}>
        Login
      </button><br /><br />
      <button className={style.signupbutton} onClick={()=> router.push("/Signup")}>Signup</button>
    </>
  )
  
};
export default Login;
