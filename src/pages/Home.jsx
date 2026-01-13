import React, { useEffect, useState }  from "react";
import Hero from "../Components/Hero";
import Section from "../Components/Section";
import SongCard from "../Components/SongCard";
import styles from "./Home.module.css"
import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
function Home() {
    const [topAlbum, setTopAlbum] = useState([]);
    const [topAlbumLoader, setTopAlbumLoader] = useState(false);    
    const [newAlbum, setNewAlbum] = useState([]);
    const [newAlbumLoader, setNewAlbumLoader] = useState(false);  
    const [songs, setSongs] = useState([]);
    const [songLoader, setSongLoader] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const getTopAlbum = async () => {
        try {
            setTopAlbumLoader(true);
            const resp = await axios.get(`https://qtify-backend.labs.crio.do/albums/top`);
            setTopAlbum(resp.data);
        }
        catch (e) {
            console.log(e.response);
        }
        finally {
            setTopAlbumLoader(false);
        }
    }
    const getNewAlbum = async () => {
        try {
            setNewAlbumLoader(true);
            const resp = await axios.get(`https://qtify-backend.labs.crio.do/albums/new`);
            setNewAlbum(resp.data);
        }
        catch (e) {
            console.log(e.response);
        }
        finally {
            setNewAlbumLoader(false);
        }
    }
    
    const getSongs = async () => {
        try {
            setSongLoader(true);
            const resp = await axios.get(`https://qtify-backend.labs.crio.do/songs`);
            setSongs(resp.data);
        }
        catch (e) {
            console.log(e.response);
        }
        finally {
            setSongLoader(false);
        }
    }
    const getFilters = async () => {
        try {
            const resp = await axios.get(`https://qtify-backend.labs.crio.do/genres`);
            setFilterData(resp.data.data);
        }
        catch (e) {
            console.log(e.response);
        }
    }
    useEffect(() => {
        getTopAlbum();
        getNewAlbum();
        getSongs();
        getFilters();
    }, [])
    return (
        <div>
            <Hero />
            <Box m={2}>
                <Section title="Top Albums" topAlbum={topAlbum} />
            </Box>
            <Box m={2}>
                <Section title="New Albums" topAlbum={newAlbum} />
            </Box>
            <Box m={2}>
                <Section title="Songs" topAlbum={songs} showFilter={true} filters={filterData} type="song" />
            </Box>
        </div>
    )
}
export default Home;