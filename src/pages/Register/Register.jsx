import { useEffect } from "react";
import {
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
} from "react-simple-captcha";

const Register = () => {
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
  };
  const handleCaptcha = () => {};
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Enter Your Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Your Password"
              />
              <label className="label">Photo</label>
              <input
                type="photo"
                name="photo"
                className="input"
                placeholder="Give Your Avater"
              />
              <div>
                <LoadCanvasTemplate />
              </div>
              <input
                type="captcha"
                name="captcha"
                className="input"
                placeholder="Generate the Code"
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Generate Code
              </button>
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Register"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
