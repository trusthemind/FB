import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import "./style.scss"
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <div className='background'>
            <Form name='login-form'
                autoComplete="on">

                <Form.Item label="E-mail"
                    name="email"
                    className='input'
                    rules={[{ required: true, message: 'Please input correct your e-mail!' }]}>
                    <Input onInput={(e) => setEmail(e.target.value)} value={email}/>
                </Form.Item>
                
                <Form.Item label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input correct your passsword!' }]}>
                    <Input.Password onInput={(e) => setPassword(e.target.value)} value={password}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className='btn-submit' size='large' htmlType="submit" onClick={onLogin}>
                        Submit
                    </Button>
                </Form.Item>

                <Card className="no-acc">
                    No account yet ?
                    <br/>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </Card>
               
            </Form>

        </div>
    )
}

export default Login