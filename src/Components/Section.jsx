import React, { useEffect, useState, useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from "./Section.module.css";
import CarouselView from "./CarouselView";
import GridView from "./GridView";
export default function Section({ title, topAlbum, showFilter = false, filters = [], type = "album" }) {
    const [carouselView, setCarouselView] = useState(true);
    const [filter, setFilter] = useState('All')
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        setFilteredData(topAlbum);
    }, [topAlbum]);
    const handleTabChange = (e, newValue) => {
        setFilter(newValue);
        if (newValue === "All") {
            setFilteredData(topAlbum);
        }
        else {
            const newFilteredDataData = topAlbum.filter((song) => (song.genre.label === newValue))
            setFilteredData(newFilteredDataData);
        }
    }
    return (
        <Box className={styles.section}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography className={styles.sectionHeader} sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                {!showFilter &&
                    <Button className={styles.sectionButton}
                        onClick={(prev) => {
                            const value = carouselView ? false : true;
                            setCarouselView(value)
                        }}>
                        {carouselView ? "Show all" : "Collapse"}
                    </Button>
                }
            </Stack>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                {showFilter &&
                    <TabContext value={filter} sx={{ marginBottom: '100px' }} >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className={styles.tabBoxParent} onChange={handleTabChange}
                                aria-label="lab API tabs example"
                                sx={{
                                    "& .Mui-selected": {
                                        color: "#34c94b !important",       // active tab color
                                        fontWeight: 600,
                                    },
                                    "& .MuiTabs-indicator": {
                                        backgroundColor: "#34c94b", // bottom indicator color
                                    }
                                }}>
                                <Tab label="All" value="All" sx={{ color: "#fff" }} />
                                {filters.length > 0 &&
                                    filters.map((filterItem) => (
                                        <Tab label={filterItem.label} value={filterItem.label}
                                            key={filterItem.key} sx={{ color: "#fff" }} />
                                    ))
                                }
                            </TabList>
                        </Box>
                    </TabContext>
                }
            </Box>
            {
                filteredData.length > 0 && carouselView ?
                    <CarouselView data={filteredData} type={type} /> :
                    <GridView data={filteredData} type={type} />
            }
        </Box >
    );
}