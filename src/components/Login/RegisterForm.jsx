import '../Login/RegisterForm.css'

export default function RegisterForm({ 
    email, 
    setEmail, 
    password, 
    setPassword,
    confirmPassword,
    setConfirm,
    errors, 
    handleSubmit,
    touched 
}) {
    return (
        <form className='form-register' onSubmit={handleSubmit}>
            <div className='cont-form'>

                <label>Name:</label>
                <input 
                    placeholder='Enter your name' 
                    type="text" 
                />

                <label>Email:</label>
                <input 
                    placeholder='Enter your email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {touched && errors.email && <p className="error">{errors.email}</p>}

                <label>Password:</label>
                <input 
                    placeholder='Create your password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {touched && errors.password && <p className="error">{errors.password}</p>}

                <label>Confirm password:</label>
                <input 
                    placeholder='Confirm your password'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirm(e.target.value)}
                />
                {touched && errors.confirm && <p className="error">{errors.confirm}</p>}

            </div>

            <button type="submit">Sign Up</button>
        </form>
    )
}