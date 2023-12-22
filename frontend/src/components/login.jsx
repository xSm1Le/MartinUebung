import react, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
    });

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = user;
    const res = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
        window.alert('Invalid Login');
        console.log('Invalid Login');
    } else {
        window.alert('Login Successful');
        console.log('Login Successful');
    }
};

return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <form method="POST">
                        <div className="card-header">
                            <h4>Login</h4>
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
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="btn btn-primary"
                                >
                                    Login
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

export default Login;