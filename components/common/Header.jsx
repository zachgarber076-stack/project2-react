import { Link } from "react-router";
import { useAuth, useUsername } from "../authWrapper/AuthContext";


function Header(){
    const username = useUsername();
    const {logout} = useAuth();
    return (
        <div className="bg-gradient-to-r from-[#C9A0DC] to-[#966FD6] py-6 px-4 shadow-md text-white text-4xl font-bold">
            <h1>My Blog</h1>
            <nav >
                <ul className="flex space-x-8 justify-center text-lg text-white">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Blog posts</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        {username ? ( 
                            <p onClick={logout} className="cursor-pointer">Hi {username}, Logout</p> 
                        ) : ( 
                            <Link to='/login'>Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;