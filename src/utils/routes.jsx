// src/routes.js
import AnalyticDashBoard from '../pages/AnalyticsDashBoard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import AdminLogin from '../pages/AdminLogin'
import InternshipAllocationDashboard from '../pages/Oraganisation'
import InternshipMatchmaking from '../pages/InternshipMatchmaking'
import Allocation from '../pages/Allocation'
import NotFound from '../pages/NotFound'
const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/user-match",
    element: <InternshipMatchmaking/>,
    name: "For User",
  },
  {
    path: "/organization-dash",
    element: <InternshipAllocationDashboard/>,
    name: "For Organisation",
  },
  {
    path: "/analysis",
    element: <AnalyticDashBoard/>,
    name: "Analysis",
  },

   {
    path: "/login",
    element: <Login/>,
    name: "login",
  },
  {
    path: "/admin-login",
    element: <AdminLogin/>,
    name: "admin-login",
  },
   {
    path: "/allocation",
    element: <Allocation/> ,
    name: "Allocation",
  },
   {
    path: "*",
    element: <NotFound />,
    name: "404",
  },

];

export default routes;
