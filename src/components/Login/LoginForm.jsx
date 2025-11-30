import './LoginForm.css'  
import { useNavigate } from "react-router";


export default function LoginForm({ 
    email, 
    setEmail, 
    password, 
    setPassword, 
    errors, 
    handleSubmit,
    touched 
}) {
    
    return (
        <form className='form-register' onSubmit={handleSubmit}>
            <div className='cont-form'>
                <label>Email:</label>
                <input 
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {touched && errors.email && <p className="error">{errors.email}</p>}

                <label>Password:</label>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {touched && errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button type="submit">Login</button>
        </form>
    )
}