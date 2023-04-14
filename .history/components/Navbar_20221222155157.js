import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../redux/themeSlice";
import Image from "next/image";

export default function Navbar() {
  return <div><Image src="/profile.jpeg" alt="" width={'200'} height={'200'}/></div>;
}
