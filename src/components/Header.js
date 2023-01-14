import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import "./Header.css";

const Header = () => {
    return (
        <Box className="header" bgcolor="background.paper">
            <Typography>
                Socikal
            </Typography>
            <Box>
                <Button color="secondary">Login</Button>
                <Button>Signup</Button>
            </Box>
        </Box >
    )
};

export default Header;