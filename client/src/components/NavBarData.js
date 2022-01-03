import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonIcon from "@mui/icons-material/Person";

export const NavBarData = [
  {
    title: "profile",
    path: "/",
    icon: <PersonIcon />,
  },
  {
    title: "post",
    path: "/post",
    icon: <CloudUploadIcon />,
  },
  {
    title: "works",
    path: "/works",
    icon: <HomeIcon />,
  },
];
