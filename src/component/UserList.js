import React, {useContext} from 'react';
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalState";

const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);

    return (
        <div>
            <ListGroup className="mt-4">
                {users.length > 0 ? (
                    <>
                        {users.map(user => (
                            <ListGroupItem className='d-flex justify-content-between' key={user.id}>
                                <strong>{user.name}</strong>
                                <div className='ml-auto'>
                                    <Link className='btn btn-warning' to={`/edit/${user.id}`}>Edit</Link>
                                    <Button onClick={() => removeUser(user.id)}  color='danger' style={{
                                        marginLeft: '10px'
                                    }}>Delete</Button>
                                </div>
                            </ListGroupItem>
                        ))}
                    </>
                ) : (
                    <h4 className='text-center'>No Users </h4>
                )}

            </ListGroup>
        </div>
    );
};

export default UserList;