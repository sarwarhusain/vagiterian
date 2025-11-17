import { Parallax } from "react-parallax";
import { Link } from "react-router";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="The Menu"
      strength={-200}
    >
      <div className="hero sm:min-h[50px] md:min-h[200px] lg:min-h-[400px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <Link to={"/"}>Home / </Link>
            <Link to={"shop"}>Pages</Link>
          </div>
        </div>
      </div>
      <div style={{ height: "50px", maxWidth: "75px", opacity: ".5" }} />
    </Parallax>
  );
};

export default Cover;
