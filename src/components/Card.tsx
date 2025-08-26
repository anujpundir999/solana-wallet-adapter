import React from "react";

const cardStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "2rem",
    color: "#fff",
    maxWidth: "350px",
    margin: "2rem auto",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
};


export const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
}) => (
    <div style={cardStyle} className="w-full max-w-8xl mx-auto">
        <h2 style={{ marginBottom: "1rem", fontWeight: 700 }} className="text-xl text-white font-semibold after:content-['_↗']  font-mono">{title}</h2>
        <div>{children}</div>
    </div>
);