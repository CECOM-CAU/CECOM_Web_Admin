'use client';
import Item from "@/app/recruit/_component/Item";
import LongItem from "@/app/recruit/_component/LongItem";
import {RecruitSubmissionItem} from "@/util/Interface";
import {useEffect, useState} from "react";
import axios from "axios";

interface Props {
    modalHandler: (e: any) => void;
    index: number;
    setIndex: (idx: number) => void;
    modalRef: React.ForwardedRef<HTMLDivElement>;
    setOpen: (isOpen: boolean) => void;
    list: RecruitSubmissionItem[];
}

const ApplicationModal = ({modalHandler, setOpen, index, setIndex, modalRef,list}: Props) => {
    const [questionList, setQuestionList] = useState([]);
    useEffect(() => {
        axios.get(`/api/recruit/getQuestionList`)
            .then((res) => {
                    setQuestionList(res.data.RESULT_DATA.list);
                }
            )
    }, []);
    return (
        <div className='flex fixed bg-[#d9d9d930] w-full h-full justify-center z-50' ref={modalRef}
             onClick={(e) => modalHandler(e)}>
            <div
                className='flex flex-col items-center w-full md:my-[50px] md:mx-[50px] lg:w-[800px] text-[18px] py-[20px] my-[10px] mx-[10px] bg-[#ffffff] rounded-[10px] overflow-scroll'>

                <div className='flex flex-row w-full justify-between  md:w-[700px] px-[30px] mb-[20px]'>
                    {0 < index ?
                        <button className='' onClick={() => setIndex(index - 1)}>이전</button> :
                        <button className='text-[#d9d9d9]' disabled={true}>이전</button>
                    }
                    <div className='flex flex-row '>
                        <div
                            className='mr-[10px] md:text-[30px] text-[20px] font-gmarket-m'>({index+1}) {list[index]['name']} -
                        </div>

                        <div className='ml-[5px] md:text-[30px] text-[20px] font-gmarket-m'>[{list[index]['department']}]
                        </div>
                    </div>
                    {list.length - 1 > index ?
                        <button onClick={() => setIndex(index + 1)}>다음</button> :
                        <button className='text-[#d9d9d9]' disabled={true}>다음</button>
                    }
                </div>

                <div className='flex flex-col items-start w-full px-[20px] md:px-[50px]'>
                    <Item question={'단과대'} answer={list[index]['college']}/>
                    <Item question={'나이'} answer={list[index]['age']}/>
                    <Item question={'학년'} answer={list[index]['grade']}/>
                    <Item question={'학번'} answer={list[index]['id']}/>
                    <Item question={'전화번호'} answer={list[index]['phone']}/>
                    {
                        list[index]['answer'].map((ans,idx) => {
                            return (
                                <LongItem key={idx} question={(idx+1).toString() +'. '+questionList[idx]} answer={ans}/>
                            )
                        })
                    }

                </div>

                <button className='border-2 rounded-[10px] px-[20px] py-[10px] my-[20px]'
                        onClick={() => setOpen(false)}>닫기
                </button>
            </div>

        </div>

    )
}

export default ApplicationModal;
