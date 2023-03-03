import { useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom, User } from "../../state/auth";
import { api } from "../../webServices/webapi";

function LoginPage(){

    const [user, setUser] = useRecoilState(userAtom);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        console.log()

        const res = await api.users.postCall('http://localhost:3000/users/login',user)
        if(res.error){
            setError(res.error.message)
            return
        }
        localStorage.setItem('user',res.user)
        setUser(res.user)
    }
    const handleInputChange = (event:any) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

  return (
    <div className="min-h-screen py-52 " style={{ backgroundImage: 'linear-gradient(115deg,#9F7AEA, #FEE2FE)' }}>
        <div className="container mx-auto">
            <div className="flex flex-col w-full lg:flex-row lg:w-8/12 bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
                <div className="w-full lg:w-2/3 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center " style={{backgroundImage: "url('src/assets/Register-Background.png')"}}>
                    <h1 className="text-white text-3xl mb-3">Welcome</h1>
                    <div>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis animi repudiandae reprehenderit! Distinctio fuga ullam exercitationem hic ratione alias odit esse blanditiis, eaque architecto impedit velit voluptatibus assumenda fugit.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-4">Login</h2>
                    <p className="mb-4">
                        Please Login your existing account
                    </p>
                    <p className="text-red-700">
                        {error}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-7">
                            <input type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" value={user.email} onChange={handleInputChange}/>
                        </div>
                        <div className="mt-7">
                            <input type="password" name="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" value={user.password} onChange={handleInputChange}/>
                        </div>
                        <div className="mt-7">
                            <button className="w-full bg-purple-500 py-3 text-center text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};
//w-full lg:w-2/3 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center 
export default LoginPage;
