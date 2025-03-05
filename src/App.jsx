import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatComponent from "./pages/ChatComponent";
import BookPage from "./pages/BookPage";

function Home() {
    return <h1>🏠 홈 페이지입니다!</h1>;
}

function About() {
    return <h1>ℹ️ 이건 간단한 챗봇 데모입니다.</h1>;
}

function App() {
    return (
        <Router>
            <div style={styles.navbar}>
                <Link to="/" style={styles.navLink}>홈</Link>
                <Link to="/chat" style={styles.navLink}>챗봇</Link>
                <Link to="/book" style={styles.navLink}>책 예제</Link>
                <Link to="/about" style={styles.navLink}>소개</Link>
            </div>

            <div style={styles.content}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<ChatComponent />} />
                    <Route path="/book" element={<BookPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
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
        textAlign: "center",
    },
};

export default App;
