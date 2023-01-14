import React from "react";
import { Box } from "@mui/system";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Post from "./Post";

const Dashboard = () => {
    return (
        <Box>
            <Header />
            <Box display={"flex"}>
                <Sidebar />
                <Post />
            </Box>
        </Box>
    )
}

export default Dashboard;