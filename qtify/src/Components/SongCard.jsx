import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip } from "@mui/material";
import styles from "./SongCard.module.css"
function SongCard({ album }) {
    return (
        <Box className={styles.outerCard}>
            <Card className={styles.card}>
                <CardMedia className={styles.cardImage}
                    image={album.image}
                    title={album.title}
                />
                <CardContent className={styles.cardContent}>
                    <Chip sx={{ padding: 0 }} className={styles.chip} label={album.follows + " Follows"} />
                </CardContent>
            </Card>
            <Typography className={styles.outerCardContent}>
                {album.title}
            </Typography>
        </Box>
    );
}
export default SongCard;