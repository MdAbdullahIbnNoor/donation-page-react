import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div className=" bg-base-100 py-5 flex items-center bg-transparent max-w-screen-2xl mx-auto">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-4/5" src="../images/Logo.png" alt="" /></Link>
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