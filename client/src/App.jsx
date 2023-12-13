import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './user/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './user/Login';
import Home from './user/Home';
import Admin from './admin/Admin';
import Password from './user/Password';
import ChangePassword from './user/ChangePassword';
import UsersDetail from './admin/usersDetail';
import Organization_Signup from './organization/Organization_Signup';
import Organization_login from './organization/Organization_login';
import Home1 from './home1';
import OrganizationAdmin from './admin/OrganizationAdmin';
import Organization_success from './organization/Organization_success';
import AddScholarship from './Scholarships/addScholarship';
import UpdateOrgan from './admin/UpdateOrgan';
import UpdateUser from './admin/UpdateUser';
import CheckScholarships from './admin/CheckScholarships';
import MyInfo from './user/MyInfo';
import ShowSc from './Scholarships/showScholarship';
function App() {

    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home1/>}></Route>
            <Route path='/register' element={<Signup/>}></Route>
            <Route path='/showSc/:email' element={<ShowSc/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home/:email' element={<Home/>} />
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/ForgetPassword' element={<Password/>} ></Route>
            <Route path="/ChangePassword/:email" element={<ChangePassword />} />
            <Route path='/usersDetail' element={<UsersDetail/>} ></Route>
            <Route path='/organization_register' element={<Organization_Signup/>} ></Route>
            <Route path='/Organization_login' element={<Organization_login/>} ></Route>
            <Route path='/organization' element={<OrganizationAdmin/>} ></Route>
            <Route path='/Organization_success/:email' element={<Organization_success/>} ></Route>
            <Route path='/addScholarship/:email' element={<AddScholarship/>} ></Route>
            <Route path='/UpdateOrgan/:id' element={<UpdateOrgan/>} ></Route>
            <Route path='/UpdateUser/:id' element={<UpdateUser/>} ></Route>
            <Route path='/CheckScholarships/:email' element={<CheckScholarships/>} ></Route>
            <Route path='/Myinfo/:_id' element={<MyInfo/>} ></Route>
        </Routes>
      </BrowserRouter>
    )
  }

  export default App;
