import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 15, padding: 15}}>
                <Link to={'/'}>Home</Link>
                <Link to={'/posts'}>List</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/join'}>Join</Link>
            </div>
            <div>
                <Outlet />
            </div>
            <div>footer</div>
        </div>
    )
}