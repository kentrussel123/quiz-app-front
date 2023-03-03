import { useState } from "react";
import { api } from "../../webServices/webapi";

function SignupPage(){

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        password:'',
        confirmPassword:'',
        gender:'male',
        userType:'student',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const payload = {
            firstName:formData.firstName,
            lastName:formData.lastName,
            email:formData.email,
            password:formData.password,
            gender:formData.gender,
            userType:formData.userType
        }
        let res = await api.users.post(payload)
        console.log(res)
    }
    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

  return (
    <div className="min-h-screen py-40 " style={{ backgroundImage: 'linear-gradient(115deg,#9F7AEA, #FEE2FE)' }}>
        <div className="container mx-auto">
            <div className="flex flex-col w-full lg:flex-row lg:w-8/12 bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center " style={{backgroundImage: "url('src/assets/Register-Background.png')"}}>
                    <h1 className="text-white text-3xl mb-3">Welcome</h1>
                    <div>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis animi repudiandae reprehenderit! Distinctio fuga ullam exercitationem hic ratione alias odit esse blanditiis, eaque architecto impedit velit voluptatibus assumenda fugit.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-4">Register</h2>
                    <p className="mb-4">
                        Create your account. It's Free and only take a minute
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <input type="text" name="firstName" placeholder="Firstname" className="border border-gray-400 py-1 px-2" value={formData.firstName} onChange={handleInputChange}/> 
                            <input type="text" name="lastName" placeholder="Lastname" className="border border-gray-400 py-1 px-2" value={formData.lastName} onChange={handleInputChange} />
                        </div>
                        <div className="mt-5">
                            <input type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" value={formData.email} onChange={handleInputChange}/>
                        </div>
                        <div className="mt-5">
                            <input type="password" name="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" value={formData.password} onChange={handleInputChange}/>
                        </div>
                        <div className="mt-5">
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" value={formData.confirmPassword} onChange={handleInputChange} />
                        </div>
                        <div className="mt-5">
                            <select className="border border-gray-400 py-1 px-2 w-full" name="gender" value={formData.gender} onChange={handleInputChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <select className="border border-gray-400 py-1 px-2 w-full" name="userType" value={formData.userType} onChange={handleInputChange}>
                                <option value="student">Student</option>
                                <option value="professor">Professor</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <input type="checkbox" className="border border-gray-400"/>
                            <span>
                            &nbsp; I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
                            </span>
                        </div>
                        <div className="mt-5">
                            <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SignupPage;
