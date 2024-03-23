import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar';

export const Route = createRootRoute({
    component: Root,
})

function Root() {
    return <div className='flex flex-col items-center'>
        <Navbar />
        <Outlet />
    </div>;
}