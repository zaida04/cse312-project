import { useUser } from "../state"

export default function Navbar() {
    return <div className="navbar border-b mb-4 bg-base-100 w-3/5">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Y.com</a>
        </div>

        <div className="flex gap-4">
            <ul className="menu menu-horizontal px-1">
                <li><a href="/home">Home</a></li>
            </ul>
            <Profile />
        </div>
    </div>
}

function Profile() {
    const user = useUser();
    if (user === null) return <span className="loading loading-spinner loading-lg" />
    if (user === false) return <a href="/" className="btn btn-primary btn-sm">Login/Signup</a>

    return <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="/pfp.png" />
            </div>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[10rem]">
            <li><a href="/api/logout">Logout</a></li>
        </ul>
    </div>
}