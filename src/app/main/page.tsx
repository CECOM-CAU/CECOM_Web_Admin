'use client';
import {useEffect} from "react";

const MainPage = () => {
    useEffect(() => {
        if (sessionStorage.getItem('username') === null || sessionStorage.getItem('password') === null) {
            window.location.replace('/login');
        }
    }, []);
    return (
        <div>
            <h1>MainPage Editor</h1>
        </div>
    );
}

export default MainPage;