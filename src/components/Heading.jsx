const Heading = ({ headingName }) => {
    return (
        <h1 className="
            self-center 
            text-shadow-2xs 
            whitespace-nowrap 
            uppercase 
            font-bold 
            text-xl 
            sm:text-2xl 
            md:text-3xl
            text-wrap
            md:text-nowrap
        ">
            {headingName ? headingName : 'Yavatmal Sahajyoga'}
        </h1>
    )
}

export default Heading;
