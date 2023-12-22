import react, { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;
    const res = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
        window.alert('Invalid Registration');
        console.log('Invalid Registration');
    } else {
        window.alert('Registration Successful');
        console.log('Registration Successful');
    }
};

return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <form method="POST">
                        <div className="card-header">
                            <h4>Register</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleInput}
                                    value={user.name}
                                    className="form-control"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    value={user.email}
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInput}
                                    value={user.password}
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleInput}
                                    value={user.confirmPassword}
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="btn btn-primary"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;