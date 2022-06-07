import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';


const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate()



    if (error || gError) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading || gLoading) {
        return <p>Loading...</p>;
      }
      if (user || gUser) {
        navigate('/');
      }

      const handleRegister = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });
          console.log('Updated profile');
      }


    return (
        <div className='container mt-5 mb-5'>
        <div className='row justify-content-md-center'>
            
        <div className='col-md-4 col-offset-4'>
        <h1 className='mb-3'>Register</h1>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
         
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an account? please, <Link to='/login'>Login</Link> here</p>
            <div className='mt-5'>
            <Button 
            className='w-100'
            onClick={() => signInWithGoogle()} 
            variant="primary" 
            type="submit">
                    sign in with Google
                </Button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Register;