// "use client";

// import { useState, useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// // import { AiFillGithub } from "react-icons/ai";
// import { useRouter } from "next/navigation";
// import { FaFacebook } from "react-icons/fa6";
// import { FaApple } from "react-icons/fa6";

// const AuthWrapper = ({ closeModal, setModalVisible, loginModalOpen }) => {
//   const router = useRouter();
//   const [registerModalOpen, setRegisterModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const [localLoginModalOpen, setLocalLoginModalOpen] =
//     useState(loginModalOpen);

//   //LOGIN
//   const {
//     register: registerLogin,
//     handleSubmit: handleSubmitLogin,
//     formState: { errors: errorsLogin },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmitLogin = (data) => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       if (data.email === "test@test.com" && data.password === "password") {
//         toast.success("Logged In");
//         setLoggedIn(true);
//         closeLoginModal();
//         router.push("/");
//       } else {
//         toast.error("Invalid Credentials");
//       }
//     }, 1000);
//   };

//   const openLoginModal = () => setLocalLoginModalOpen(true);
//   const closeLoginModal = () => {
//     setLocalLoginModalOpen(false);
//     closeModal();
//   };

//   const toggleLoginModal = useCallback(() => {
//     closeLoginModal();
//     openRegisterModal();
//   }, []);

//   //REGISTER
//   const {
//     register: registerRegister,
//     handleSubmit: handleSubmitRegister,
//     formState: { errors: errorsRegister },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmitRegister = (data) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       toast.success("Account created!");
//       closeRegisterModal();
//       openLoginModal();
//       router.push("/");
//     }, 1000);
//   };

//   const openRegisterModal = () => setRegisterModalOpen(true);
//   const closeRegisterModal = () => {
//     setRegisterModalOpen(false);
//     closeModal();
//   };

//   const toggleRegisterModal = useCallback(() => {
//     closeRegisterModal();
//     openLoginModal();
//   }, []);

//   return (
//     <>
//       {localLoginModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
//             <p className="text-gray-600 mb-6">Login to your account!</p>

//             <form
//               onSubmit={handleSubmitLogin(onSubmitLogin)}
//               className="space-y-4"
//             >
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   disabled={isLoading}
//                   {...registerLogin("email", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsLogin.email && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   disabled={isLoading}
//                   {...registerLogin("password", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsLogin.password && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
//               >
//                 {isLoading ? "Loading..." : "Continue"}
//               </button>
//               <hr className="my-4" />
//               <div className="flex flex-col gap-4 mt-3">
//                 <button
//                   onClick={() => alert("In Test Mode!")}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FaApple size={24} className="min-w-fit" />
//                   Continue with Apple
//                 </button>
//                 <button
//                   onClick={() => alert("In Test Mode!")}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </button>
//                 <button
//                   onClick={() => alert("In Test Mode!")}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FaFacebook size={24} className="min-w-fit" />
//                   Continue with Facebook
//                 </button>
//               </div>

//               <div className="text-center mt-4">
//                 <p>
//                   First time using Adulis?{" "}
//                   <span
//                     onClick={() => {
//                       closeLoginModal();
//                       openRegisterModal();
//                     }}
//                     className="text-blue-500 cursor-pointer hover:underline"
//                   >
//                     Create account
//                   </span>
//                 </p>
//               </div>
//             </form>

//             <button
//               onClick={closeLoginModal}
//               className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {registerModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">
//               Welcome to Adulis Ethiopian Art
//             </h2>
//             <p className="text-gray-600 mb-6">Create an account</p>

//             <form
//               onSubmit={handleSubmitRegister(onSubmitRegister)}
//               className="space-y-4"
//             >
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   disabled={isLoading}
//                   {...registerRegister("name", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsRegister.name && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   disabled={isLoading}
//                   {...registerRegister("email", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsRegister.email && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   disabled={isLoading}
//                   {...registerRegister("password", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsRegister.password && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
//               >
//                 {isLoading ? "Loading..." : "Continue"}
//               </button>
//               <hr className="my-4" />
//               <div className="flex flex-col gap-4 mt-3">
//                 <button
//                   onClick={() => alert("Google Sign In")}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </button>
//                 <button
//                   onClick={() => alert("Facebook Sign In")}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FaFacebook size={24} className="min-w-fit" /> Continue with
//                   Facebook
//                 </button>
//               </div>

//               <div className="text-center mt-4">
//                 <p>
//                   Already have an account?{" "}
//                   <span
//                     onClick={() => {
//                       closeRegisterModal();
//                       openLoginModal();
//                     }}
//                     className="text-blue-500 cursor-pointer
//
// hover:underline"
//                   >
//                     Log in
//                   </span>
//                 </p>
//               </div>
//             </form>

//             <button
//               onClick={closeRegisterModal}
//               className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AuthWrapper;
"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
// import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";

const AuthWrapper = ({ closeModal, setModalVisible, loginModalOpen }) => {
  const router = useRouter();
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [localLoginModalOpen, setLocalLoginModalOpen] =
    useState(loginModalOpen);

  //LOGIN
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (data.email === "test@test.com" && data.password === "password") {
        toast.success("Logged In");
        setLoggedIn(true);
        closeLoginModal(true); // Pass true to prevent modal close
        router.push("/");
      } else {
        toast.error("Invalid Credentials");
      }
    }, 1000);
  };

  const openLoginModal = () => setLocalLoginModalOpen(true);
  const closeLoginModal = (preventModalClose) => {
    setLocalLoginModalOpen(false);
    if (!preventModalClose) {
      closeModal();
    }
  };

  const toggleLoginModal = useCallback(() => {
    closeLoginModal(true); // Prevent initial modal close
    openRegisterModal();
  }, []);

  //REGISTER
  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegister },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitRegister = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created!");
      closeRegisterModal();
      openLoginModal();
      router.push("/");
    }, 1000);
  };

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
    closeModal();
  };

  const toggleRegisterModal = useCallback(() => {
    closeRegisterModal();
    openLoginModal();
  }, []);

  return (
    <>
      {localLoginModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">
              Welcome Back!
            </h2>
            <p className="text-gray-600 mb-6">Login to your account</p>

            <form
              onSubmit={handleSubmitLogin(onSubmitLogin)}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  disabled={isLoading}
                  {...registerLogin("email", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorsLogin.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  disabled={isLoading}
                  {...registerLogin("password", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorsLogin.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
              <hr className="my-4" />
              <div className="flex flex-col gap-4 mt-3">
                {/* <button
                  // onClick={() => alert("In Test Mode!")}
                  className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
                >
                
                  <FaApple size={24} className="min-w-fit" />
                  Continue with Apple
                </button> */}
                {/* <button
                  // onClick={() => alert("In Test Mode!")}
                  className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
                >
                  <FcGoogle /> 
                  Continue with Google
                </button> */}
                {/* <button
                  // onClick={() => alert("In Test Mode!")}
                  className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
                > 
                  <FaFacebook size={24} className="min-w-fit" />
                  Continue with Facebook
                </button> */}
              </div>

              <div className="text-center mt-4">
                <p>
                  First time using Adulis?{" "}
                  <span
                    onClick={toggleLoginModal} // Use the toggle function
                    className="relative text-orange-500 cursor-pointer hover:underline"
                  >
                    Create account
                  </span>
                </p>
              </div>
            </form>

            <button
              onClick={() =>
                // @ts--ignore
                closeLoginModal(false)
              }
              className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {registerModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">
              Welcome to Adulis Ethiopian Art
            </h2>
            <p className="text-gray-600 mb-6">Create an account</p>

            <form
              onSubmit={handleSubmitRegister(onSubmitRegister)}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={isLoading}
                  {...registerRegister("name", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorsRegister.name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  disabled={isLoading}
                  {...registerRegister("email", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorsRegister.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  disabled={isLoading}
                  {...registerRegister("password", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorsRegister.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
              <hr className="my-4" />
              <div className="flex flex-col gap-4 mt-3">
                {/* <button 
                  onClick={() => alert("Google Sign In")}
                  className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
                >  
                  <FcGoogle />
                  Continue with Google
                </button> */}
                {/* <button
                  onClick={() => alert("Facebook Sign In")}
                  className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
                >
                  <FaFacebook size={24} className="min-w-fit" /> Continue with
                  Facebook
                </button> */}
              </div>

              <div className="text-center mt-4">
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={toggleRegisterModal} // Use the toggle function
                    // className="text-blue-500 cursor-pointer hover:underline"
                    className="relative text-orange-500 cursor-pointer hover:underline"
                  >
                    Log in
                  </span>
                </p>
              </div>
            </form>

            <button
              onClick={closeRegisterModal}
              className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthWrapper;
