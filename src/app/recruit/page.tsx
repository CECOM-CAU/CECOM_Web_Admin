'use client'
import DataTable from "@/app/_component/DataTable";
import {useState} from "react";
import ApplicationModal from "@/app/recruit/_component/ApplicationModal";

const RecruitPage = () => {
    const header = ['name', 'email', 'phone'];
    const data = [{name: 'a', email: 'ddd', phone: '01086537020'}, {name: 'b', email: 'eee', phone: '456'}]
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [index,setIndex] = useState<number>(0);
    return (
        <>
            <div className='flex flex-col w-full items-center mt-[70px]'>
                <div className='text-[30px] my-[20px]'>Recruit</div>
                <table>
                    <thead>
                    <tr>
                        {
                            header.map((h, index) => (
                                <th className=' text-start pl-[5px] pr-[20px] border-[1px]' key={index}>{h}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((d, index) => (
                        <tr className='' key={index}>
                            {Object.keys(d).map((key, index) => (
                                <td className='text-start pl-[5px] pr-[20px] border-[1px]' key={index} onClick={()=>setIsOpen(true)}>{d[key]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>
            {isOpen ? (
                <ApplicationModal setOpen={setIsOpen}></ApplicationModal>) : (<></>)
            }
        </>
    );
}

export default RecruitPage;