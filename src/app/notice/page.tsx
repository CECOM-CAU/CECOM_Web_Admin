'use client';
import {useEffect} from "react";

const NoticePage = () => {
    useEffect(() => {
        if (sessionStorage.getItem('username') === null || sessionStorage.getItem('password') === null) {
            window.location.replace('/login');
        }
    }, []);
    return (
        <div>
            <h1>Notice</h1>
        </div>
    );
}

export default NoticePage;