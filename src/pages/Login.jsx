import LoginImg from '../assets/KN.png';
const Login = () => {
    return (
        <div className="bg-gradient-to-r from-gray-200 to-blue-200 flex items-center justify-center min-h-screen w-screen">
            <div className="bg-white rounded-2xl shadow-lg flex w-3/4 max-w-4xl">
                <div className="w-1/2 relative flex flex-col justify-center items-center overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                    <img src={LoginImg} alt="LoginImg" className="absolute inset-0 w-full h-full" />
                    <div className="relative z-10 text-white p-12">
                        {/* <h2 className="text-3xl font-bold mb-2">Hello, Welcome!</h2> */}
                    </div>
                    <div className="absolute inset-0"></div>
                </div>
                <div className="w-1/2 p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <div className="relative">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10" id="username" type="text" placeholder="Username" />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <div className="relative">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10" id="password" type="password" placeholder="Password" />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 text-right">
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot Password?</a>
                    </div>
                    <div className="mb-4">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-blue-600 transition duration-300">Login</button>
                    </div>
                    <div className="text-center text-gray-600 mb-4">or login with social platforms</div>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white border-2 border-gray-300 text-gray-600 py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
                            <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                        </button>
                        <button className="bg-white border-2 border-gray-300 text-gray-600 py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
                            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
