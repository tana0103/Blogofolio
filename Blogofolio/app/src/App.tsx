import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { TitlePage } from './components/TitlePage/TitlePage';
import { ShowCardSearch } from './components/ShowCardSearch/ShowCardSearch';
import { SignUp } from './components/SignUp/SignUp';
import { Post } from './components/Posts/post';
import { RegConfirm } from './components/RegConfirm/RegConfirm';
import { RequireAuth } from './Hoc/RequireAuth';
import { CreateMyPost } from './components/AddPost/CreateMyPost';
import { Activate } from './components/Activate/Activate';
import { LogOut } from './components/LogOut/LogOut';
import { PostItem } from './components/PostItem/PostItem';
import { SignInPage } from './components/SignIn/SignIn';
import { NotFound } from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<TitlePage />} />
          <Route path='search' element={<ShowCardSearch />} />
          <Route path='search/id' element={<ShowCardSearch />} />
          <Route path='user' element={<SignUp />} />
          <Route path='about-us' element={<Navigate to={'/about'} replace />} />
          <Route path='posts' element={<Post />} />
          <Route path='confirm' element={<RegConfirm />} />
          <Route path='addposts' element={
            <RequireAuth >
              <CreateMyPost />
            </RequireAuth>} />
          <Route path='activate/:uid/:token' element={<Activate />} />
          <Route path='user/logout' element={<LogOut />} />
          <Route path='posts/:id' element={<PostItem />} />
          <Route path='login' element={<SignInPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;