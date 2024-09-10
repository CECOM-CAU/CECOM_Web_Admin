'use client'
import {useEffect, useRef, useState} from "react";
import ApplicationModal from "@/app/recruit/_component/ApplicationModal";
import axios from "axios";
import {RecruitSubmissionItem, RecruitSubmissionList} from "@/util/Interface";

const RecruitPage = () => {
    const header = ['번호', '이름', '학과', '학년',  '학번'];
    const data = [{
        name: '김상윤',
        department: '전자전기',
        age: '2005',
        id: '20201234',
        college: '소프트웨어대학',
        grade: '1,2차 학기 ',
        phone: '01000000000'
    },
        {
            name: '유용민',
            department: '소프트웨어',
            age: '2001',
            id: '20191234',
            college: '소프트웨어대학',
            grade: '3,4차 학기 ',
            phone: '01000000000'
        }]
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const modalRef = useRef<HTMLDivElement>(null);
    const [recruitData, setRecruitData] = useState<RecruitSubmissionItem[]>([]);
    const modalOpen = (index: number) => {
        setIsOpen(true);
        setCurrentIndex(index);
    };

    useEffect(() => {
        if(sessionStorage.getItem('username') === null || sessionStorage.getItem('password') === null){
            window.location.replace('/login');
        }
        axios.post('/api/recruit/getSubmissionList ', {username: sessionStorage.getItem('username'), password: sessionStorage.getItem('password')})
            .then(async (r) => {
               setRecruitData(r.data.RESULT_DATA.data)
            })
            .catch((err) => {

            })


    }, []);

    const modalOutsideClick = (e: any) => {
        if (modalRef.current === e.target) {
            setIsOpen(false);
        }
    }
    return (
        <>
            <div className='flex flex-col w-full items-center mt-[20px] md:mt-[70px] mx-[5px]'>
                <div className='text-[30px] my-[10px] md:my-[20px]'>Recruit</div>
                <div className='overflow-x-auto'>
                    <table className=''>
                        <thead>
                        <tr>
                            {
                                header.map((h, index) => (
                                    <th className='text-start pl-[5px] pr-[20px] border-[1px] bg-[#d9d9d950] break-keep'
                                        key={index}>{h}</th>
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {recruitData.map((d, index) => (
                            <tr className='' key={d.timestamp} onClick={() => modalOpen(index)}>

                                <td className='text-start pl-[5px] pr-[20px] border-[1px]'>{index + 1}</td>
                                <td className='text-start pl-[5px] pr-[20px] border-[1px] break-keep'>{d['name']}</td>
                                <td className='text-start pl-[5px] pr-[20px] border-[1px] break-keep'>{d['department']}</td>
                                <td className='text-start pl-[5px] pr-[20px] border-[1px] break-keep'>{d['grade']}</td>
                                <td className='text-start pl-[5px] pr-[20px] border-[1px] break-keep'>{d['id']}</td>


                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpen ? (
                <ApplicationModal setOpen={setIsOpen} modalRef={modalRef} modalHandler={modalOutsideClick}
                                  index={currentIndex}
                                  setIndex={setCurrentIndex}
                                  list={recruitData}
                ></ApplicationModal>) : (<></>)
            }
        </>
    );
}

export default RecruitPage;