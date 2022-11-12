import { HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";
import Orders from "./pages/Orders";

const AdminDashboard = () => {
  return (
    <HStack h="full" alignContent={"flex-start"}   justifyContent={"flex-start"}  alignItems={"flex-start"}>
      <SideBar menu={sidebar_menu} />
      <Outlet />
    </HStack>
  );
};

export default AdminDashboard;
