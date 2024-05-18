interface Props{
    text: string,
    habib: string
}

function SliderCard({text, habib} : Props) {
  return (
    <>
    <div className="flex flex-col gap-12 dark:text-white font-Quisand">
        <p className="text-center text-2xl leading-relaxed tracking-wide">{text}</p>
        <p className="flex justify-center">~ {habib}</p>
    </div>
    </>
  )
}

export default SliderCard