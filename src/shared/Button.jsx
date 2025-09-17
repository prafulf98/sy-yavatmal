import { useNavigate } from "react-router-dom"

const Button = ({ btnName, customStyle, route }) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (route) navigate(route)
    }
    return (
        <>
            <button
                type="button"
                onClick={handleNavigate}
                className={`${customStyle} cursor-pointer text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none `}>
                {btnName}
            </button>
        </>
    )
}

export default Button
