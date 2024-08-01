// Modal.jsx

import React from "react";

const modal = {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
};

const close = {
    position: "absolute",
    top: 30,
    right: 35,
    color: "#f1f1f1",
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer"
};

const modalContent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: "92vh",
    margin: "0 auto",
    marginTop:"80px",
    position: "relative"
};

const button = {
    fontSize: 40,
    color: "#f1f1f1",
    cursor: "pointer",
    userSelect: "none"
};

export const Modal = ({ onOpen, children }) => {
    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
            onOpen();
        }
    };

    return <div style={modal} onClick={handleClick}>{children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
    return (
        <div style={modalContent}>
            <span style={close} onClick={onClose}>&times;</span>
            {children}
        </div>
    );
};
