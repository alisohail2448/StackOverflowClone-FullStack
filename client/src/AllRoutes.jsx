import React from "react";
import { Routes, Route } from "react-router-dom";
import AskQuestion from "./components/pages/AskQuestion/AskQuestion";
import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import PaymentSuccess from "./components/pages/PaymentSuccess/PaymentSuccess";
import PriceCard from "./components/pages/PriceCards/PriceCard";
import DisplayQuestion from "./components/pages/Questions/DisplayQuestion";
import Questions from "./components/pages/Questions/Questions";
import Tags from "./components/pages/Tags/Tags";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Users from "./components/pages/Users/Users";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/Price" element={<PriceCard />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    </Routes>
  );
};

export default AllRoutes;
