import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import { APIFetch } from '../util/fetcher';
import { IUser } from '../../server/db/models/User';

export const Route = createRootRoute({
    component: Root,
})

function Root() {
    const [user, setUser] = useState<IUser | false | null>(null);

    useEffect(() => {
        async function getCurrentUser() {
            const request = await APIFetch<{ user: IUser }>("GET", "/users/@me");
            if (request.error) {
                setUser(false);
            } else {
                setUser(request.user);
            }
        }

        getCurrentUser();
    }, []);

    return <div className='flex flex-col items-center'>
        <div className="navbar bg-base-100 w-3/5">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Y.com</a>
            </div>

            <div className="flex-none">
                {user === null ?
                    <span className="loading loading-spinner loading-lg" />
                    : user === false ?
                        <p>You are not logged in.</p>
                        : <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="/pfp.png" />
                                </div>
                            </div>
                            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href="/api/logout">Logout</a></li>
                            </ul>
                        </div>}
            </div>
        </div>
        <Outlet />
    </div>;
}