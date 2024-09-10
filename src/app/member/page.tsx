'use client';
import {useEffect} from "react";

const MemberPage = () => {
    useEffect(() => {
        if (sessionStorage.getItem('username') === null || sessionStorage.getItem('password') === null) {
            window.location.replace('/login');
        }
    }, []);
    return (
        <div>
            <h1>Member Page</h1>
        </div>
    );
}

export default MemberPage;