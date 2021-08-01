import Image from "next/image";
import Logo from "../images/logo.png";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image src={Logo}
                height={100}
                width={100}
            objectFit="contain"/>
            <h1 onClick={ signIn } className="p-5 m-5 bg-blue-500 cursor-pointer rounded-full
         text-white text-center">Login using Facebook</h1>
        </div>
    )
}

export default Login
