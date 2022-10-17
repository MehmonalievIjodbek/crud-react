import React, {useContext, useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Link} from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {v4 as uuid } from 'uuid'
import {useNavigate} from "react-router";

const AddUser = () => {

    const [name, setName] = useState('')

    const { addUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        navigate("/");
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input value={name} onChange={handleChange} type="text" placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to='/' className='btn btn-danger' style={{
                marginLeft: '4px'
            }}>Cancel</Link>
        </Form>
    );
};

export default AddUser;