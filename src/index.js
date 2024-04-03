import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import reportWebVitals from './reportWebVitals';
 
import Header from '../src/components/Header';
import { Outlet, createBrowserRouter,RouterProvider } from 'react-router-dom';
 
import CreateFlashCard from './components/CreateFlashCard';
import MyFlashCards from "../src/components/MyFlashCards"
import { Provider } from 'react-redux';
import store from '../src/store/store'
import FlashCardDetails from './components/FlashCardDetails';
import Body from '../src/components/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Applayout =()=>{


  return(
 
    <div>
      <Provider store={store}>
       <React.StrictMode>
        <Header/>
         <Body/>
        <Outlet/>
       </React.StrictMode>
       </Provider>
    </div>
  



  )
};

const approuter = createBrowserRouter([
  {
   path: "/",
   element: <Applayout/>,
   children:[
     {
       path:"/",
       element:< CreateFlashCard/>
     },
     {
       path: "/MyFlashCards",
       element: <MyFlashCards/>,
     },
   
    {
      path: "/FlashCardDetails/:resId",
      element: <FlashCardDetails/>
    }
    
    ]
    }
])




root.render(<RouterProvider router={approuter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

