// import { createBrowserRouter } from 'react-router-dom';
// import Main from '../Layouts/Main';
// import Home from '../Pages/Home/Home/Home'
// import Error from '../Pages/Shared/Error/Error';
// import MyComponent from '../MyComponent';
// import Login from '../Pages/Home/Login/Login';
// import SportsProgrammes from '../Pages/Home/SportsProgrammes/SportsProgrammes';
// import Facilities from '../Pages/Home/Facilities/Facilities';
// import Instructors from '../Pages/Home/Instructors/Instructors';
// import AboutUs from '../Pages/Home/AboutUs/AboutUs';
// import ContactUs from '../Pages/Home/ContactUs/ContactUs';
// import Signup from '../Pages/Home/Login/Signup';
// import ProgramDetails from '../Pages/Home/SportsProgrammes/ProgramDetails';
// import Membership from '../Pages/Home/Membership/Membership';
// import App from '../App';
// import Blogs from '../Pages/Home/Blogs/Blogs';
// import BlogDetails from '../Pages/Home/Blogs/BlogDetails';
// import Service from '../Pages/Home/Service/Service';
// import ComePlay from '../Pages/Home/comePlay/ComePlay';
// import SportsDetail from '../Pages/Home/comePlay/SportsDetail';
// import PaymentPage from '../Pages/Home/comePlay/PaymentPage';
// import ConfirmationPage from '../Pages/Home/comePlay/ConfirmationPage';
// import ChampProfile from '../Pages/Home/Login/ChampProfile';
// import Overview from '../Pages/Home/Login/ChampProfile/Overview';
// import Training from '../Pages/Home/Login/ChampProfile/Training';


// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Main/>,
//         errorElement:<Error/>,
//         children:[
//             {
//                 path:'/',
//                 element:<Home/>
//             },


// {
// path:'/comePlay',
// element:<ComePlay/>
// },

// {
//     path:'/sports/:id',
//     element:< SportsDetail/>
//     },


//     {
//         path:'/payment',
//         element:< PaymentPage />
//         },
    

//     {
//         path:'/confirmation',
//         element:< ConfirmationPage />
//         },
    


//             {
//                 path:'/login',
//                 element:<Login/>
//             },
//             {
//                 path:'/champProfile',
//                 element:<ChampProfile />
//             },


//             {
//                 path:'/overview',
//                 element:<Overview />
//             },
       
//             {
//                 path:'/training',
//                 element:<Training />
//             },

//             // {
//             //     path:'/champProfile',
//             //     element:<ChampProfile />
//             // },










//             {
//                 path:'/programmer',
//                 element:<SportsProgrammes />
//             },
//             {
//                 path:'/facilities',
//                 element:<Facilities />
//             },
//             {
//                 path:'/instructors',
//                 element:<Instructors />
//             },
//             {
//                 path:'/membership',
//                 element:<Membership />
//             },

//             {
//                 path:'/about',
//                 element:<AboutUs />
//             },

//             {
//                 path:'/blogs',
//                 element:<Blogs />
//             },

//             {
//                 path:'/blog/:id',
//                 element:<BlogDetails />
//             },


//             {
//                 path:'/service',
//                 element:<Service />
//             },



//             {
//                 path:'/contact',
//                 element:<ContactUs />
//             },

//             {
//                 path:'/signup',
//                 element:<Signup />
//             },

//             {
//                 path:'/program/:id',
//                 element:<ProgramDetails />
//             },


//             {
//                 path: '/app',
//                 element: <App />
//             }

//         ]
//     }
// ])

// export default router;



import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Error from '../Pages/Shared/Error/Error';
import MyComponent from '../MyComponent';
import Login from '../Pages/Home/Login/Login';
import SportsProgrammes from '../Pages/Home/SportsProgrammes/SportsProgrammes';
import Facilities from '../Pages/Home/Facilities/Facilities';
import Instructors from '../Pages/Home/Instructors/Instructors';
import AboutUs from '../Pages/Home/AboutUs/AboutUs';
import ContactUs from '../Pages/Home/ContactUs/ContactUs';
import Signup from '../Pages/Home/Login/Signup';
import ProgramDetails from '../Pages/Home/SportsProgrammes/ProgramDetails';
import Membership from '../Pages/Home/Membership/Membership';
import App from '../App';
import Blogs from '../Pages/Home/Blogs/Blogs';
import BlogDetails from '../Pages/Home/Blogs/BlogDetails';
import Service from '../Pages/Home/Service/Service';
import ComePlay from '../Pages/Home/comePlay/ComePlay';
import SportsDetail from '../Pages/Home/comePlay/SportsDetail';
import PaymentPage from '../Pages/Home/comePlay/PaymentPage';
import ConfirmationPage from '../Pages/Home/comePlay/ConfirmationPage';
import ChampProfile from '../Pages/Home/Login/ChampProfile';
import Overview from '../Pages/Home/Login/ChampProfile/Overview';
import Training from '../Pages/Home/Login/ChampProfile/Training';
import Feedback from '../Pages/Home/Login/ChampProfile/Feedback';
import CoachProfile from '../Pages/Home/Login/CoachProfile/CoachProfile';
import Achievements from '../Pages/Home/Login/CoachProfile/Achievements';
import Schedule from '../Pages/Home/Login/CoachProfile/Schedule';
import GymProfile from '../Pages/Home/Login/GymProfile/GymProfile';
import GymOverview from '../Pages/Home/Login/GymProfile/gymOverview';
import WorkoutPlan from '../Pages/Home/Login/GymProfile/WorkoutPlan';
import DietPlan from '../Pages/Home/Login/GymProfile/DietPlan';
import Performance from '../Pages/Home/Login/GymProfile/Performance';
import AccountSettings from '../Pages/Home/Login/GymProfile/AccountSettings';
import MembershipPayment from '../Pages/Home/Membership/MEmbershipPayment';
import CoachRegistration from '../Pages/Home/Registration/Coach/CoachRegistration';
import GymRegistration from '../Pages/Home/Registration/Gym/GymRegistration';
import ChampRegistration from '../Pages/Home/Registration/Champ/ChampRegistration';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/comePlay', element: <ComePlay /> },
      { path: '/sports/:id', element: <SportsDetail /> },
      { path: '/payment', element: <PaymentPage /> },
      { path: '/confirmation', element: <ConfirmationPage /> },
      { path: '/login', element: <Login /> },
      {
        path: '/champProfile',
        element: <ChampProfile />,
        children: [
          { path: 'overview', element: <Overview /> },
          { path: 'training', element: <Training /> },
          { path: 'feedback', element: <Feedback /> },
          {
            path: 'setting',
            element: <AccountSettings />
        },
        ],
      },

      {
        path: '/coachProfile',
        element: <CoachProfile />,
        children: [
          { path: 'overview', element: <Overview /> },
          { path: 'training', element: <Training /> },
          { path: 'feedback', element: <Feedback /> },
        { path: 'schedule', element: <Schedule /> },
          { path: 'achievements', element: <Achievements /> },
          {
            path: 'setting',
            element: <AccountSettings />
        },
        ],
      },



      {
        path:'/gymProfile',
        element:<GymProfile />,
        children: [
            {
                path: 'overview',
                element: <GymOverview />
            },
            {
                path: 'workout-plan',
                element: <WorkoutPlan />
            },
            {
                path: 'diet-plan',
                element: <DietPlan />
            },
            {
                path: 'performance',
                element: <Performance />
            },
            {
                path: 'setting',
                element: <AccountSettings />
            }
        ]
    },
    




      { path: '/programmer', element: <SportsProgrammes /> },
      { path: '/facilities', element: <Facilities /> },
      { path: '/instructors', element: <Instructors /> },
      { path: '/membership', element: <Membership /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/blog/:id', element: <BlogDetails /> },
      { path: '/service', element: <Service /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/signup', element: <Signup /> },
      { path: '/program/:id', element: <ProgramDetails /> },
      { path: '/app', element: <App /> },
      { path: '/MembershipPayment', element: <MembershipPayment /> },
      { path: '/CoachRegistration', element: <CoachRegistration /> },
      { path: '/GymRegistration', element: <GymRegistration /> },
      { path: '/ChampRegistration', element: <ChampRegistration /> },
    ],
  },
]);

export default router;
