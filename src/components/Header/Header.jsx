import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const links = <>
        <li className="md:px-5 md:text-lg"><NavLink to="/">Home</NavLink></li>
        <li className="md:px-5 md:text-lg"><NavLink to="/donation">Donation</NavLink></li>
        <li className="md:px-5 md:text-lg"><NavLink to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div className=" bg-base-100 py-5 flex items-center bg-transparent md:max-w-screen-md lg:max-w-screen-2xl mx-auto gap-5 flex-col md:flex-row">
            <div className="flex-1">
                <Link to="/" className="w-full mx-auto">
                    <img className="lg:w-1/5 md:w-2/5" src="../images/Logo.png" alt="" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {links}
                </ul>
            </div>
        </div>
    )
}

export default Header