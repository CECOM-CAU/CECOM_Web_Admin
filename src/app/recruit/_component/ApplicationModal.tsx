import Item from "@/app/recruit/_component/Item";
import LongItem from "@/app/recruit/_component/LongItem";

interface Props {
    modalHandler: (e: any) => void;
    index: number;
    setIndex: (idx: number) => void;
    modalRef: React.ForwardedRef<HTMLDivElement>;
    setOpen: (isOpen: boolean) => void;
}

const ApplicationModal = ({modalHandler, setOpen, index, setIndex, modalRef}: Props) => {
    const list = [{
        name: '김상윤',
        depart: '소프트웨어',
        college: '창의ICT공과대학',
        id: '20201234',
        phone: '01012345678',
        age: '2020',
        grade: '2학년 (3,4차 학기)'
    }, {
        name: '나상윤',
        depart: '전기전자',
        college: '자연과학대학',
        id: '20201234',
        phone: '01012345678',
        age: '2020',
        grade: '1학년 (1,2차 학기)'
    }]


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

                        <div className='ml-[5px] md:text-[30px] text-[20px] font-gmarket-m'>[{list[index]['depart']}]
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
                    <LongItem question={'정말 긴 질문 1'}
                              answer={'아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다.\\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 메모리 공간을 공유하여 디스크 접근을 감소시켰다. \\n매 반복마다 메모리 영역을 접근하며 가장 처음에 한번, 마지막에 한번 디스크를 접근하는 방식으로 디스크 접근을 최소화 하여 성능을 향상(In Memory 방식임)시켰다. 대부분의 Hadoop Application에서의 주요 bottleneck은 Disk Read/Write임을 기억. \\n 하지않음)아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다. \\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 '}/>
                    <LongItem question={'정말 긴 질문 1'}
                              answer={'아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다.\\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 메모리 공간을 공유하여 디스크 접근을 감소시켰다. \\n매 반복마다 메모리 영역을 접근하며 가장 처음에 한번, 마지막에 한번 디스크를 접근하는 방식으로 디스크 접근을 최소화 하여 성능을 향상(In Memory 방식임)시켰다. 대부분의 Hadoop Application에서의 주요 bottleneck은 Disk Read/Write임을 기억. \\n 하지않음)아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다. \\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 '}/>

                </div>

                <button className='border-2 rounded-[10px] px-[20px] py-[10px] my-[20px]'
                        onClick={() => setOpen(false)}>닫기
                </button>
            </div>

        </div>

    )
}

export default ApplicationModal;
