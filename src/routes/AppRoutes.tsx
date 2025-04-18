import { Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import MedicalTeamLocal from "../pages/MedicalTeamLocal";
import MyProfile from "../pages/MyProfile";
import Patients from "../pages/Patients";
import Appointments from "../pages/Appointments";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "doctor", "guest"]}>
                                <Home />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/medicalteam"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <MedicalTeamLocal />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/patients"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "doctor"]}>
                                <Patients />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/appointments"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <Appointments />
                            </ProtectedRoute>
                        }
                    />


                    <Route
                        path="/myprofile"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <MyProfile />
                            </ProtectedRoute>
                        }
                    />

                </Routes>
            </HashRouter>
        </AuthProvider>
    );
};

export default AppRoutes;
