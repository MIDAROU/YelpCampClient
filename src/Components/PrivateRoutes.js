import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
	const Token = localStorage.getItem("Token");
	return Token ? children : <Navigate to="/Register" />;
}

export function PrivateRoutesLoggedOut({ children }) {
	const Token = localStorage.getItem("Token");
	return !Token ? children : <Navigate to="/" />;
}
