// Assuming emailRegex, passwordRegex, and nameRegex are correctly defined in '../services/RegEx'

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { Form, Button, Input, Card } from 'antd';
import { emailRegex, passwordRegex } from '../../services/RegEx';
import "./style.scss";


const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!emailRegex.test(email) && !passwordRegex.test(password)) {
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });
            navigate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <div className='background'>
            <Form name='sign-up' autoComplete="on">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: false, message: 'Please input your name' },
                        {
                            pattern: /^[A-Za-z]{2,}(?:\s[A-Za-z]+)*$/,
                            message: 'Please input correct name!',
                        },
                    ]}
                >
                    <Input onInput={(e) => setName(e.target.value)} value={name} />
                </Form.Item>

                <Form.Item
                    label="E-mail"
                    name="email"
                    className='input'
                    rules={[
                        { required: true, message: 'Please input your e-mail!' },
                        {
                            pattern: emailRegex,
                            message: 'Please input correct your e-mail!',
                        },
                    ]}
                >
                    <Input onInput={(e) => setEmail(e.target.value)} value={email} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        {
                            pattern: passwordRegex,
                            message: 'Password must contain at least 8 characters, one uppercase letter!',
                        },
                    ]}
                >
                    <Input.Password onInput={(e) => setPassword(e.target.value)} value={password} />
                </Form.Item>

                <Button
                    className='btn-submit'
                    type="primary"
                    size='large'
                    onClick={onSubmit}
                >
                    Sign up
                </Button>
                <Card className='sign-in'>
                    Already have an account ?
                    <br />
                    <NavLink to="/log-in">Sign in</NavLink>
                </Card>
            </Form>
        </div>
    );
};

export default Signup;
