import { useState } from 'react'
import './App.css'
import IndividualBlogPost from '../components/blogs/IndividualBlogPost';
import { Route, Routes } from 'react-router';
import ContactPage from '../contact/ContactPage';
import CommonLayout from '../components/layouts/CommonLayout';
import PostList from '../components/postList/PostList';
import Homepage from '../components/homepage/Homepage';
import Login from '../components/login/Login';
import { AuthProvider } from '../components/authWrapper/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts/:post_id' element={<IndividualBlogPost />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App
