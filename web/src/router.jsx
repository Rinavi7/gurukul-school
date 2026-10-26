import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout/PublicLayout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Academics from './pages/Academics/Academics.jsx';
import Notices from './pages/Notices/Notices.jsx';
import Events from './pages/Events/Events.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Admissions from './pages/Admissions/Admissions.jsx';
import Login from './pages/Login/Login.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/academics', element: <Academics /> },
      { path: '/notices', element: <Notices /> },
      { path: '/events', element: <Events /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/contact', element: <Contact /> },
      { path: '/admissions', element: <Admissions /> },
      { path: '/login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
