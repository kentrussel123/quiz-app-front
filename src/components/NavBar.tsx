import QuizLogo from '../assets/quizlogo.png'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='shadow-lg absolute top-0 right-0 bg-slate-50 rounded-2xl'>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <Link to="/">
                    <div className="flex items-center flex-shrink-0 mr-6">
                        <img src={QuizLogo} alt="" className="w-12 h-12"/>
                        <span className="font-semibold text-xl tracking-tight bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">QuizGPT</span>
                    </div>
                </Link>
                <div className="">
                    <div className="text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-600 mr-4">
                        <Link to="/signup-page">SignUp</Link>
                    </div>
                    <div className="text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-600 mr-4">
                        <Link to={"/login-page"}>Login</Link>
                    </div>
                </div>
            </nav>
        </div>
        
  );
}

export default NavBar;