interface Props {
    question: string;
    answer: string;
}

const LongItem = ({question, answer}: Props) => {
    return (
        <div className='flex flex-col text-[18px] md:text-[20px]'>
        <span className=' font-gmarket-m pr-[20px] my-[3px] text-[20px]'>
            {question}
        </span>
            <span className='my-[5px] text-[18px] md:text-[20px]'>
            {answer.split('\\n').map(
                (line, index) => (
                    <div key={index}>{line}</div>
                )
            )
            }
        </span>
        </div>
    )
}

export default LongItem;