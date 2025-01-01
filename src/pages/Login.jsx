// @ts-ignore
import COVER_IMAGE from "../assets/test.jpg";

const colors = {
    primary: "#f3c614",
    dark: "#1e1f28",
    light: "#f9f9f9",
}

const Login = () => {
    return (
        <div className="w-full h-full flex items-start">
            <div className='relative w-1/2 h-full flex flex-col'>
                {/* <div className='absolute top-[20%] left-[10%] flex flex-col'>
                    <h1 className='text-4x1 text-white font-bold my-4'>Turn Your Ideas into reality</h1>
                    <p className='text-x1 Itext-white font-normal'>Start for free and get attractive offers from the community </p> </div> */}
                <img src={COVER_IMAGE} className="w-full h-full object-cover" />
            </div>

            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
                <h1 className='text-x1 text- [#060606] font-semibold'>Interactive Brand</h1>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex flex-col mb-5'>
                        <h3 className='text-2x1 font-semibold mb-4'>Login</h3>
                        <p className='text-sm mb-2'>Welcome Back! Please enter your details.</p> </div>
                    <div className='w-full flex flex-col'>
                        <input
                            type="email"
                            placeholder="Email"
                            className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none' />
                        <input
                            type="password"
                            placeholder="Password"
                            className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none' />
                    </div>


                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <p className='text-sm'>Remember me for 30 days</p> </div>

                        <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Passowrd ?</p>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full Itext-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                            Login
                        </button>
                        <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                            Sign Up
                        </button>
                    </div>

                    <div className='w-full flex items-center justify-center relative py-2'>
                        <div className='w-full h-[1px] bg-black'></div>
                        <p className='text-x1 absolute text-black/80 bg-[]'>or</p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <p className="w-full flex items-center justify-center">Dont have an account? <span className="font-semibold text-[#060606] ml-2 cursor-pointer">Sign Up</span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;