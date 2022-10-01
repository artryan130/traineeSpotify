import React from "react";
import "./MusicList.css";
import SideBar from "./SideBar.tsx";
import MusicList from "./MusicList.tsx";
import ArtistPage from "./ArtistsPage.tsx";
import LoginPage from "./LoginPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./SignUpPage.tsx";
import UserAccountPage from "./UserAccountPage.tsx";

export default function Navigation() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route
            path="/curtidas"
            index
            element={
              <>
                <MusicList />
                <SideBar />
              </>
            }
          />
          <Route
            path="/artists"
            element={
              <>
                <ArtistPage />
                <SideBar />
              </>
            }
          />
          <Route
            path="/useraccount"
            element={
              <>
                <UserAccountPage />
                <SideBar />
              </>
            }
          />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
