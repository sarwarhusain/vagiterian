import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { user, createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); //react hook form

  const onSubmit = (data) => {
    console.log(data); //ract hok form
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUser(data.name, data.photoURL)
        .then(() => {
          console.log("userUpdated successefully");
          reset();

          Swal.fire({
            position: "top-end",
            icon: "user updated success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>SignUp</Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp!</h1>
            <p className="py-6">-</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  {...register("name", { required: true })} //register korte hobe ki name diye take daka hobe.
                  className="input"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <span className="text-red-600"> Name is required</span>
                )}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="input"
                  placeholder="Enter Your Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    maxLength: 8,
                    minLength: 5,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
                  })}
                  className="input"
                  placeholder="Enter Your Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 Char</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    password must have one number ,one upperCase,one
                    LowerCase,one special char,and also a number
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less then 8 Char
                  </p>
                )}

                <label className="label">Photo Url</label>
                <input
                  type="photo"
                  name="photoURL"
                  className="input"
                  {...register("photoURL", {
                    required: true,
                  })}
                  placeholder="Give Your Avater"
                />
                {errors.photoURL?.type === "required" && (
                  <p className="text-red-600">Photo is required</p>
                )}

                {user ? (
                  <>
                    <button className="btn btn-neutral mt-4">
                      <Link to={"/login"}>Back To Home</Link>
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      className="btn btn-neutral mt-4"
                      type="submit"
                      value="siginup"
                    />
                  </>
                )}
              </fieldset>
            </form>
            <div>
              <p className=" text-sm text-right mr-2 text-gray-500 font-semibold">
                <Link to={"/login"}>Already Have an Account?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
