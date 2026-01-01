import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import styles from "./Section.module.css";
import CarouselView from "./CarouselView";
import GridView from "./GridView";
export default function Section({ title,topAlbum }) {
    const [carouselView, setCarouselView] = useState(true);
    return (
        <Box className={styles.section}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography className={styles.sectionHeader} sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                <Button className={styles.sectionButton}
                    onClick={(prev) => {
                        const value = carouselView ? false : true;
                        setCarouselView(value)
                    }}>{carouselView ? "Show all" : "Collapse"}</Button>
            </Stack>
            {topAlbum.length>0 && carouselView ?
                <CarouselView data={topAlbum} /> :
                <GridView data={topAlbum}  />
            }
        </Box>
    );
}