import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Form, Button, Input, Card } from 'antd';
import "../LogIn/style.scss"
import "./style.scss"

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className='background'>
            <Form name='sign-up'
                autoComplete="on">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input your name" }]}>
                    <Input onInput={(e) => setName(e.target.value)} value={name} />
                </Form.Item>

                <Form.Item label="E-mail"
                    name="email"
                    className='input'
                    rules={[{ required: true, message: 'Please input correct your e-mail!' }]}>
                    <Input onInput={(e) => setEmail(e.target.value)} value={email} />
                </Form.Item>

                <Form.Item label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input correct your passsword!' }]}>
                    <Input.Password onInput={(e) => setPassword(e.target.value)} value={password} />
                </Form.Item>

                <Button
                    className='btn-submit'
                    type="primary"
                    size='large'
                    onClick={onSubmit}>
                    Sign up
                </Button>
                <Card className='sign-in'>
                    Already have an account ?
                    <br />
                    <NavLink to="/log-in">Sign in</NavLink>
                </Card>
            </Form>
        </div>
    )
}

export default Signup;