import React, { useState } from 'react';

import { Container, Button, Form} from 'react-bootstrap';

const login = () => {
    window.location.replace("/login");
}

const Signup = () => {
    const [formInput, setFormInput] = useState('');
    const [submittingForm, setSubmittingForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmittingForm(true);
    
        if (!formInput) {
          return false;
        }
        
        //Send data to create user endpoint
        try {
          const response = await fetch(`api/users`, {
            method: 'POST',
            body: JSON.stringify({ ...formInput}),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (!response.ok) {
            console.log(response);
            throw new Error('something went wrong!');
          }
    
          setFormInput('');
        } catch (err) {
          console.error(err);
        }
      };

      const handleChange = async (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
      };

    return (
        <>
        <Container className='fluid'>
            <div>
                <h1 className='text-center'>Sign Up</h1>
                <Form onSubmit={handleSubmit} className='mx-auto'>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name ="firstname" value={formInput.firstname || ''} placeholder="First Name" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"name ="lastname" value={formInput.lastname || ''} placeholder="Last Name" onChange={handleChange}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Create a username</Form.Label>
                        <Form.Control type="text" name ="username" value={formInput.username || ''} placeholder="username" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name ="email" value={formInput.email || ''} placeholder="Enter email" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formInput.password || ''} placeholder="Password" onChange={handleChange}/>
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="primary" 
                        type="submit" 
                        className='col-sm-8 col-md-4 col-lg-2 m-2'
                        disabled={!(formInput.username)}>
                            Sign Up
                        </Button>
                    </div>
                </Form>

                <div className='text-center'>
                    <Button variant="primary"
                    className='col-sm-8 col-md-4 col-lg-2 m-2'
                    onClick={login}>
                        login instead
                    </Button>
                </div>

                    {submittingForm &&
                    <div>Submitting the form...</div>}
            </div>
        </Container>
        </>
    );
};

export default Signup;