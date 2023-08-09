import React from "react";
import { Footer, Header, MobileMenu } from "./components";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "swiper/css";
import "./style.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, CreatePost, Login, Post, Root } from "./routes";
import { AuthProvider, User } from "./firebase";

function App() {
  const initialUser = localStorage.getItem("user");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(
    initialUser ? JSON.parse(initialUser) : null
  );
  return (
    <AuthProvider.Provider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <Header setMobileMenu={setMobileMenu} />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Post />} />
            <Route path="/login" element={<Login />} />
            {user && <Route path="/create-post" element={<CreatePost />} />}
          </Routes>
          <Footer />

          <MobileMenu visible={mobileMenu} setVisible={setMobileMenu} />
        </BrowserRouter>
      </div>
    </AuthProvider.Provider>
  );
}

export default App;
