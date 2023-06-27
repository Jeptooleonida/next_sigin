import React, { useEffect } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import signInPopup from "@/firebase/auth/signinwithgoogle";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter();

    useEffect(() => {
        signInPopup()
    }, [])
    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return
        // return router.push("/admin")
    }
    return (
        <div className="w-3/5 mx-auto min-h-screen flex justify-center items-center ">
            <div className="form-wrapper text-navyblue border-4 px-40 py-10 rounded-xl">
                <h1 className="mb-30 text-center text-4xl font-bold  text-royalblue">Sign In</h1>
                <form onSubmit={handleForm} className="flex flex-col justify-around items-center h-80">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="border-2 border-bluegrotto px-4 py-2 rounded " />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="border-2 border-bluegrotto px-4 py-2 rounded " />
                    </label>
                    <button type="submit" className="bg-bluegrotto font-bold text- px-11 py-3 text-white rounded-xl hover:text-navyblue">Sign In</button>
                    <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    onClick={signInPopup()}>
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
