import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mainbody">
      <div className="navbar p-4">
        <div className="logo">
          <Image
            width={32}
            height={32}
            src="https://iconape.com/wp-content/png_logo_vector/google-forms.png"
            alt="forms icon"
          />{" "}
          <span className="form">Forms </span>&nbsp;Hub
        </div>
        <ul className="nav-links">
          {/* <button className="button button1">Sign In</button> */}
          <button className="button" href="forms">
            Go to Forms
          </button>
        </ul>
      </div>
      <div className="main">
        <div className="mainleft">
          <div className="maintext">Get insights quickly, with Forms Hub</div>
          <div>
            Easily create and share online forms and surveys, and analyze
            responses in real-time.
            <div>
              {/* <button className="button button2">Sign In</button> */}
              <Link className="button" href="forms">
                Go to Forms
              </Link>
            </div>
            <div>
              Dont have an account ?{" "}
              <span>
                <a href="https://google.com"> Sign up for free</a>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="mainright">
          <Image
            width={480}
            height={480}
            src="https://lh3.googleusercontent.com/DdO4EtwzMPrHk1_ICy2CUuJp_flijkJ0VEJ1GAyXUHW-s7qHKTIy3AxiwyYdN42p7HVVi3AxOK6qWG5ABrtTm-8D9w_9yoE4w8wM0SSpmJXYwxmmN_A=s0"
            alt="forms icon"
          />
        </div>
      </div>
    </div>
  );
}
