import Link from "next/link";

interface Props {
    id: number;
    title: string;
    majelis: string;
}

const CardContent= (props: Props) => {
    const {id, title, majelis} = props;

  return (
    <>
        <Link href={`/sholawat/${majelis}/${id}`} key={id} className='bg-transparent border border-secondary text-white overflow-hidden rounded-lg py-2 px-4 cursor-pointer relative hover:bg-secondary hover:text-white anim'>
            <p>{title}</p>
        </Link>
    </>
  )
}

export default CardContent