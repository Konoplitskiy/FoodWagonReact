import { useState } from "react"
import './Login.css'
import { useNavigate } from "react-router-dom"
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function Login() {
    const [register, setRegister] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched(true);

        const newErrors = {};

        if (!email.trim()) newErrors.email = "Введіть email";
        if (!password) newErrors.password = "Введіть пароль";

        if (register) {
            if (!confirmPassword) newErrors.confirm = "Повторіть пароль";
            if (password !== confirmPassword) {
                newErrors.confirm = "Паролі не співпадають";
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(register ? "Реєстрація успішна!" : "Ви увійшли!");
            setEmail('');
            setPassword('');
            setConfirm('');
            setErrors({});
            setTouched(false);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/')
        }
    }

    return (
        <div className="body-login">
            <div className="login-container">
                <div className="button-login">
                    <button className={!register ? 'active' : ''} onClick={() => setRegister(false)}>
                        Login
                    </button>
                    <button className={register ? 'active' : ''} onClick={() => setRegister(true)}>
                        Sign Up
                    </button>
                </div>
                <hr className="hr-login-form" />

                {register ?
                    <RegisterForm
                        email={email} setEmail={setEmail}
                        password={password} setPassword={setPassword}
                        confirmPassword={confirmPassword} setConfirm={setConfirm}
                        errors={errors} handleSubmit={handleSubmit} touched={touched}
                    />
                    :
                    <LoginForm
                        email={email} setEmail={setEmail}
                        password={password} setPassword={setPassword}
                        errors={errors} handleSubmit={handleSubmit} touched={touched}
                    />
                }
            </div>
        </div>
    )
}