import React, { useRef } from "react";
import SongCard from "./SongCard";
import styles from "./GridView.module.css"
import { Stack } from "@mui/material";
import axios from "axios";
export default function GridView({ data }) {
    return (
        <Stack direction="row" sx={{flexWrap:"wrap", gap:"1.2%"}} justifyContent="start">
            {data.map(item => (
                    <SongCard album={item} key={item.id} />
                ))}
        </Stack>
    )

}