import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '../components/ThemeContext';
import IndividualBlogPost from '../components/blogs/IndividualBlogPost';
import { Route, Routes } from 'react-router';
import ContactPage from '../contact/ContactPage';
import CommonLayout from '../components/layouts/CommonLayout';
import PostList from '../components/postList/PostList';
import Homepage from '../components/homepage/Homepage';

function App() {
  return (
  <ThemeProvider>
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:post_id' element={<IndividualBlogPost />} />
      </Route>
    </Routes>
  </ThemeProvider>
  );
}

export default App
