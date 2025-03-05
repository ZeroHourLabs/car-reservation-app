import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';

function ChatComponent() {
    const [messages, setMessages] = useState([]);  // 대화 내역
    const [input, setInput] = useState("");        // 입력값
    const chatEndRef = useRef(null);               // 스크롤 위치

    // 메시지 전송 함수
    const sendMessage = async () => {
        if (!input.trim()) return;  // 빈 입력값 무시

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);  // 사용자 메시지 추가
        setInput("");  // 입력창 비우기

        try {
            const res = await fetch("http://127.0.0.1:8000/chat/chat/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            const botMessage = { role: "bot", content: data.reply };

            setMessages((prev) => [...prev, botMessage]);  // 챗봇 응답 추가
        } catch (error) {
            setMessages((prev) => [...prev, { role: "bot", content: "오류가 발생했습니다." }]);
        }
    };

    // 새로운 메시지가 추가될 때 자동 스크롤
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div style={styles.chatContainer}>
            <div style={styles.chatBox}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={msg.role === "user" ? styles.userMessage : styles.botMessage}
                    >
                        <ReactMarkdown>
                        {msg.content}
                        </ReactMarkdown>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    style={styles.input}
                />
                <button onClick={sendMessage} style={styles.button}>
                    전송
                </button>
            </div>
        </div>
    );
}

const styles = {
    chatContainer: {
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        width: "400px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
    },
    chatBox: {
        flex: 1,
        padding: "10px",
        overflowY: "auto",
        backgroundColor: "#f9f9f9",
    },
    userMessage: {
        textAlign: "right",
        backgroundColor: "#007bff",
        color: "white",
        padding: "8px 12px",
        borderRadius: "15px",
        margin: "5px 0",
        maxWidth: "70%",
        alignSelf: "flex-end",
    },
    botMessage: {
        textAlign: "left",
        backgroundColor: "#e5e5e5",
        padding: "8px 12px",
        borderRadius: "15px",
        margin: "5px 0",
        maxWidth: "70%",
        alignSelf: "flex-start",
    },
    inputContainer: {
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ddd",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        marginRight: "10px",
        outline: "none",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
    },
};

export default ChatComponent;
