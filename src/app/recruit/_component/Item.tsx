interface Props {
    question: string;
    answer: string;
}

const Item = ({question, answer}: Props) => {
    return (
        <div className='flex flex-row text-[18px] md:text-[20px] my-[3px] '>
        <span className=' font-gmarket-m pr-[20px]'>
            {question}
        </span>
            <span className=''>
            {answer}
        </span>
        </div>
    )
}
export default Item;