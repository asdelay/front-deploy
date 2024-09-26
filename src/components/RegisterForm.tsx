import React, {FC} from 'react'
import { LoginInput } from './LoginInput.tsx'
import { Link, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks.ts'
import { logIn } from '../redux/features/users/userSlice.ts'
import axios from 'axios'

export const RegisterForm: FC= () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {loginEmail, loginPassword} = useAppSelector(state => state.users.loginInputData)

    const onClickHandler = async (e) => {
        e.preventDefault();
        try{
            const result = (await (axios.post(`https://zenbit-tech-task-3bf5c7096197.herokuapp.com/auth/registration`,{email: loginEmail, password: loginPassword}))).data
            result.token && dispatch(logIn())
            navigate('/')
        } catch (e) {
            alert(`Error! ${typeof e.response.data === 'string' ? e.response.data : ''}`)
        }

    }
return (
    <div className="text-[black] flex flex-col gap-[5px] min-w-[350px] ">
        <div><h2 className='font-bold font-serif text-[32px] md-:text-[28px] text-dark-blue leading-[34px]'>Register</h2></div>
        <LoginInput inputType="email" labelText='Email'/>
        <LoginInput inputType="password" labelText='Password'/>

        <Link to='/' onClick={onClickHandler} className='flex justify-center mt-[30px] bg-gold w-full h-[52px] md:h-[44px] rounded-[5px] font-serif text-[#FFFF] font-bold text-[20px] md:text-[16px] leading-[22px] py-[11px] '>
                        
                <button className='text-center'>
                    <p>Create Account</p>
                </button>            
            
        </Link>

    </div>
)
}