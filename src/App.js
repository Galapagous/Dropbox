import {Amplify, Auth} from 'aws-amplify'
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react'
import awsExport from './aws-exports'
import '@aws-amplify/ui-react/styles.css'
import awsconfig from './aws-exports'
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout'
Amplify.configure(awsconfig);
Auth.configure(awsconfig);


function App({signOut, user}) {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children: [
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/single',
          element: <Single/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default withAuthenticator(App);
