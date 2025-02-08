import COVER_IMAGE from "../assets/test.jpg";

const Login = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="relative w-1/2 h-[90%] ml-24 hidden md:flex">
                <img src={COVER_IMAGE} className="w-full h-full object-cover rounded-l-2xl" />
            </div>

            <div className="w-full md:w-1/2 h-[90%] flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg px-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Brand</h1>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col mb-5">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Login</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <div className="w-full flex flex-col">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full text-gray-900 py-3 mb-4 bg-transparent border-b border-gray-400 outline-none focus:border-gray-800"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full text-gray-900 py-3 mb-4 bg-transparent border-b border-gray-400 outline-none focus:border-gray-800"
                        />
                    </div>

                    <div className="w-full flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <p className="text-sm text-gray-700">Remember me for 30 days</p>
                        </div>
                        <p className="text-sm font-medium text-gray-800 underline cursor-pointer">
                            Forgot Password?
                        </p>
                    </div>

                    <div className="w-full flex flex-col mb-4">
                        <button className="w-full text-white font-semibold bg-gray-900 rounded-md py-3 text-center flex items-center justify-center mb-2">
                            Login
                        </button>
                        <button className="w-full text-gray-900 font-semibold bg-white border border-gray-800 rounded-md py-3 text-center flex items-center justify-center">
                            Sign Up
                        </button>
                    </div>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-4 text-gray-600">or</span>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-4">
                    <p className="text-gray-700">
                        Don’t have an account?{" "}
                        <span className="font-semibold text-gray-900 cursor-pointer">Sign Up</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
