import Item from "@/app/recruit/_component/Item";
import LongItem from "@/app/recruit/_component/LongItem";

interface Props {
    setOpen: () => void;
}

const ApplicationModal = ({setOpen}: Props) => {
    const name = '김세콤';
    const depart = '소프트웨어';
    const college = '창의ICT공과대학';
    const student_id = '20200000';
    const phone = '01000000000';
    const year = '2020';
    const grade = '1학년 (1,2차 학기)'

    return (
        <div className='flex fixed bg-[#d9d9d990] w-full h-full justify-center z-50'>
            <div
                className='flex flex-col items-center w-full md:my-[50px] md:mx-[50px] lg:w-[800px] text-[20px] py-[20px] my-[10px] mx-[10px] bg-[#ffffff] rounded-[10px] overflow-scroll'>

                <div className='flex flex-row justify-between md:w-[700px] px-[30px] mb-[20px]'>
                    <button className=''>이전</button>
                    <div className='flex flex-row '>
                    <div className='mr-[10px] md:text-[30px] text-[25px] font-gmarket-m'>{1} {name} -</div>

                    <div className='ml-[5px] md:text-[30px] text-[25px] font-gmarket-m'>[{depart}]</div>
                    </div>
                        <button>다음</button>
                </div>

                <div className='flex flex-col items-start w-full px-[20px] md:px-[50px]'>
                    <Item question={'단과대'} answer={college}/>
                    <Item question={'나이'} answer={year}/>
                    <Item question={'학년'} answer={grade}/>
                    <Item question={'학번'} answer={student_id}/>
                    <Item question={'전화번호'} answer={phone}/>
                    <LongItem question={'정말 긴 질문 1'}
                              answer={'아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다.\\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 메모리 공간을 공유하여 디스크 접근을 감소시켰다. \\n매 반복마다 메모리 영역을 접근하며 가장 처음에 한번, 마지막에 한번 디스크를 접근하는 방식으로 디스크 접근을 최소화 하여 성능을 향상(In Memory 방식임)시켰다. 대부분의 Hadoop Application에서의 주요 bottleneck은 Disk Read/Write임을 기억. \\n 하지않음)아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다. \\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 '}/>
                    <LongItem question={'정말 긴 질문 1'}
                              answer={'아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다.\\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 메모리 공간을 공유하여 디스크 접근을 감소시켰다. \\n매 반복마다 메모리 영역을 접근하며 가장 처음에 한번, 마지막에 한번 디스크를 접근하는 방식으로 디스크 접근을 최소화 하여 성능을 향상(In Memory 방식임)시켰다. 대부분의 Hadoop Application에서의 주요 bottleneck은 Disk Read/Write임을 기억. \\n 하지않음)아래 그림을 보면, 반복적인 작업(Iteration-1,Iteration2)에서 기존 Map Reduce는 반복해서 Disk에서 Read/Write 연산을 수행하는 것을 볼 수 있다. \\n반면 Spark를 보면, Distributed Dataset(RDD)이라는 '}/>

                </div>

                <button className='border-2 rounded-[10px] px-[20px] py-[10px] my-[20px]' onClick={() => setOpen(false)}>닫기</button>
            </div>

        </div>

    )
}

export default ApplicationModal;
