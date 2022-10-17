import React, {useContext, useState, useEffect} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link, useParams} from "react-router-dom";
import {GlobalContext} from "../context/GlobalState";
import {useNavigate} from 'react-router';


const EditUser = (props) => {
    const {users,editUser} = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })

    const navigate = useNavigate();
    const currentUserId = useParams();


    useEffect(() => {
        const userId = currentUserId;
        console.log(typeof userId);
        const selectedUser = users.find(user => user.id === Number(userId));
        setSelectedUser(selectedUser)
    }, [currentUserId, users])


    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser)
        navigate("/");
    }

    const handleChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={selectedUser.name} onChange={handleChange} name="name" placeholder="Enter user" required></Input>
                {/*<Input type="text" name='name' value={selectedUser.name} onChange={handleChange} placeholder='Enter Name'></Input>*/}
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to='/' className='btn btn-danger' style={{
                marginLeft: '4px'
            }}>Cancel</Link>
        </Form>
    );
};

export default EditUser;