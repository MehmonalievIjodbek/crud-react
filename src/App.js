import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router';
import Home from "./component/Home";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import React from "react";
import {GlobalProvider} from "./context/GlobalState";

function App() {
    return (
        <div style={{maxWidth: '36rem', margin: '4rem auto'}}>
            <GlobalProvider>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/add' element={<AddUser/>}/>
                    <Route exact path='/edit/:id' element={<EditUser/>}/>
                </Routes>
            </GlobalProvider>
        </div>
    );
}

export default App;
