import React from "react";
import './App.css'
import SideBar from "./SideBar";
import MusicList from './MusicList';
import ArtistsPage from './ArtistsPage';
import LoginPage from "./LoginPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from "./SignUpPage";


export default function Navigation(){
    return (
        <div className="background">
            <BrowserRouter>
                <Routes>
                    <Route path="/curtidas" index 
                        element={
                            <>
                                <MusicList /> 
                                <SideBar/>
                            </>
                        } 
                    />
                    <Route path="/artists" 
                        element={
                            <>
                                <ArtistsPage />
                                <SideBar/>
                            </>
                        }               
                    />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
      );
}