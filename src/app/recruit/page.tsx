'use client'
import {useEffect, useRef, useState} from "react";
import ApplicationModal from "@/app/recruit/_component/ApplicationModal";
import axios from "axios";

const RecruitPage = () => {
    const header = ['번호', '이름', '학과', '학년', '나이', '학번', '전화번호', '단과대'];
    const data = [{index:1,name: '김상윤', department: '전자전기',age:'2005',id:'1',college:'소프트웨어대학',grade:'1,2차 학기 ', phone: '01000000000'},
        {index:2,name: '유용민', department: '소프트웨어',age:'2005',id:'1',college:'소프트웨어대학',grade:'1,2차 학기 ', phone: '01000000000'}]
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const modalRef = useRef<HTMLDivElement>(null);
    const [list, setList] = useState<any[]>([]);
    const modalOpen = (index: number) => {
        setIsOpen(true);
        setCurrentIndex(index);
    }

    useEffect(() => {
        axios.get("https://cecom.dev/api/recruit/getSubmissionList")
            .then(
                (res) => {
                    console.log(res.data);
                }
            ).catch((err) => {
            console.log(err);
        })
    }, []);
    const modalOutsideClick = (e: any) => {
        if (modalRef.current === e.target) {
            setIsOpen(false);
        }
    }
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
                        <tr className='' key={index} onClick={() => modalOpen(index)}>

                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{index}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['name']}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['department']}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['grade']}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['age']}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['id']}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['phone']}</td>
                            <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{d['college']}</td>


                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>
            {isOpen ? (
                <ApplicationModal setOpen={setIsOpen} modalRef={modalRef} modalHandler={modalOutsideClick}
                                  index={currentIndex}
                                  setIndex={setCurrentIndex}></ApplicationModal>) : (<></>)
            }
        </>
    );
}

export default RecruitPage;