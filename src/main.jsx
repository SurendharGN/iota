import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Extension from '../extension/extension.jsx';
import CuratedFindings from '../components/CuratedFindings.jsx';
import Token from '../components/token.jsx';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

const router=createBrowserRouter([{
  path:'/',
  element:<App/>
},{
  path:'/downloadExtension',
  element:<Extension/>
},{
  path:'/token',
  element:<Token/>
},
{path:'/curated-findings',
element:<CuratedFindings/>}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
