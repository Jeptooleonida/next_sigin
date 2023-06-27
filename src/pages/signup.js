import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            return console.log("Passwords do not match")
        }

        const { result, error } = await signUp(email, password);

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
                <h1 className="mb-30 text-center text-4xl font-bold  text-royalblue">Sign Up</h1>
                <form onSubmit={handleForm} className="flex flex-col justify-around items-center h-80">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="border-2 border-bluegrotto px-4 py-2 rounded " />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="border-2 border-bluegrotto px-4 py-2 rounded " />
                    </label>
                    <label htmlFor="password">
                        <p>Confirm password</p>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="border-2 border-bluegrotto px-4 py-2 rounded " />
                    </label>
                    <button type="submit" className="bg-bluegrotto font-bold text- px-11 py-3 text-white rounded-xl hover:text-navyblue">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Page;
