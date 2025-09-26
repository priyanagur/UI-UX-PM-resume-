// src/routes.js
import AnalyticDashBoard from '../pages/AnalyticsDashBoard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import InternshipAllocationDashboard from '../pages/Oraganisation'
import InternshipMatchmaking from '../pages/InternshipMatchmaking'
import Allocation from '../pages/Allocation'
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
    path: "/allocation",
    element: <Allocation/> ,
    name: "Allocation",
  },

];

export default routes;
