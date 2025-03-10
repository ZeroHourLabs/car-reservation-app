import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ChatComponent from "./pages/ChatComponent";
import BookPage from "./pages/BookPage";
import SearchPage from "./pages/SearchPage";
import ChatPage from "./pages/chat/ChatPage";


function About() {
    return <h1>ℹ️ 이건 간단한 챗봇 데모입니다.</h1>;
}

function App() {
    return (
        <Router>
            {/* <div style={styles.navbar}>
                <Link to="/" style={styles.navLink}>홈</Link>
                <Link to="/chat" style={styles.navLink}>챗봇</Link>
                <Link to="/book" style={styles.navLink}>책 예제</Link>
                <Link to="/about" style={styles.navLink}>소개</Link>
            </div> */}
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<SearchPage />} />
                    <Route path="/chatComponent" element={<ChatComponent />} />
                    <Route path="/book" element={<BookPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/chat" element={<ChatPage />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        backgroundColor: "#007bff",
        marginBottom: "20px",
    },
    navLink: {
        color: "white",
        textDecoration: "none",
        margin: "0 10px",
        padding: "5px 10px",
        borderRadius: "5px",
        backgroundColor: "#0056b3",
    },
    content: {
        padding: "20px",
    },
};

export default App;
