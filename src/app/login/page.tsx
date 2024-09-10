'use client';
import {useState} from "react";
import axios from "axios";
import {LoginUser} from "@/util/Interface";
import {jack} from "jackspeak";
import {headers} from "next/headers";

const login = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('');
    const loginHandler = () => {
        const user: LoginUser = {password: password, username: username};
        axios.post('/api/login/tryLogin', JSON.stringify(user), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async (r) => {
                await window.sessionStorage.setItem("username", username);
                await window.sessionStorage.setItem("password", password);
                window.location.replace(`/`);
                console.log(r);
            })
            .catch((err) => {
                setMessage(err.value);
            })
    }

    return (
        <div className='flex flex-col mt-[50px] w-full items-center text-[20px]'>
            <div className='text-[30px] font-gmarket-m text-primary-cecom_blue'>CECOM ADMIN</div>
            <form className='flex flex-col'>
                <input className='my-[5px] border-[1px] border-black rounded-[5px] px-[2px] py-[2px]' type="text"
                       placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <input className='my-[5px] border-[1px] border-black rounded-[5px] px-[2px] py-[2px]' type="password"
                       placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                {message ? <div className='text-[#d1180b]'>message</div> : <></>}
                <button className='my-[10px]' onClick={() => loginHandler()} type="button" >Login</button>
            </form>
        </div>
    );
}

export default login;