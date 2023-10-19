import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div
      className="mt-10 mb-10"
      style={{ position: "relative", textAlign: "center" }}
    >
      <img src="/member1.jpg" alt="Member" style={{ margin: "0 auto" }} />
      <img
        src="/member2.jpg"
        alt="member2"
        style={{ margin: "0 auto", width: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <h1
          className="text-lg md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "white",
          }}
        >
          Its better as a member
        </h1>
        <Link
          to="/signup"
          className="bg-slate-800 text-white text-base md:text-lg py-2 px-3 md:py-2 md:px-4 rounded-lg"
          style={{
            marginTop: "10px",
          }}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Membership;
