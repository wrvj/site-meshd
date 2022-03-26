import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect } from "react";
import useWindowDimensions from "../../Theme/WindowDimensions";
import { GalleryContainer } from "./styles";

function shuffle(array: Array<any>) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

export default function ImageGallery() {
    const { width } = useWindowDimensions();
    let galleryArray = itemData;

    useEffect(()=>{
      galleryArray = shuffle(itemData);
    }, [])
    return (
        <GalleryContainer>
            <div className="gallery-container">
                <h1>Check out some of our work!</h1>
                <ImageList
                    sx={{
                        height: "max-content",
                        overflow: "hidden",
                        padding: "30px",
                    }}
                    variant="masonry"
                    cols={width > 768 ? 2 : 1}
                    gap={15}
                >
                    {galleryArray.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                style={{ borderRadius: "8px" }}
                                src={`${item.img}`}
                                srcSet={`${item.img}`}
                                alt={item.title}
                                loading="eager"
                            />
                            {/* <ImageListItemBar position="below" title={item.title} /> */}
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </GalleryContainer>
    );
}

const itemData = [
    {
        img: "/images/gallery/cabinet_thumb.PNG",
        title: "Cabinet",
    },
    {
        img: "/images/gallery/sofa.jpg",
        title: "Sofa",
    },
    {
        img: "/images/gallery/web_1.jpg",
        title: "Car",
    },
    {
        img: "/images/gallery/pause_chair.jpg",
        title: "Car",
    },
    {
        img: "/images/gallery/casa_exterior1.jpg",
        title: "House 1",
    },
    {
        img: "/images/gallery/casa_exterior2.jpg",
        title: "House 2",
    },
    {
        img: "/images/gallery/casa_exterior3.jpg",
        title: "House 3",
    },
    {
        img: "/images/gallery/pontiac1.jpg",
        title: "Pontiac",
    },
    {
        img: "/images/gallery/pontiac2.jpg",
        title: "Pontiac",
    },
    {
        img: "/images/gallery/pontiac3.jpg",
        title: "Pontiac",
    },
    {
        img: "/images/gallery/pontiac4.jpg",
        title: "Pontiac",
    },
    {
        img: "/images/gallery/caloi1.jpg",
        title: "Bicycle",
    },
    {
        img: "/images/gallery/caloi2.jpg",
        title: "Bicycle",
    },
    {
        img: "/images/gallery/caloi3.jpg",
        title: "Bicycle",
    },
    {
        img: "/images/gallery/caloi4.jpg",
        title: "Bicycle",
    },
    {
        img: "/images/gallery/caloi5.jpg",
        title: "Bicycle",
    },
    {
        img: "/images/gallery/caloi6.jpg",
        title: "Bicycle",
    },
    {
        img: "/images/gallery/sink1.jpg",
        title: "Sink",
    },
    {
        img: "/images/gallery/sink2.jpg",
        title: "Sink",
    },
    {
        img: "/images/gallery/sink3.jpg",
        title: "Sink",
    },
    {
        img: "/images/gallery/granola01.jpg",
        title: "Granola",
    },
    {
        img: "/images/gallery/granola02.jpg",
        title: "Granola",
    },
    {
        img: "/images/gallery/ratazima1.png",
        title: "Ratazima",
    },
    {
        img: "/images/gallery/ratazima2.png",
        title: "Ratazima",
    },
    {
        img: "/images/gallery/nebula4k.jpg",
        title: "Nebula",
    },
    {
        img: "/images/gallery/gallery.jpg",
        title: "Gallery",
    },
    {
        img: "/images/gallery/interior01.jpg",
        title: "Gallery",
    },
    {
        img: "/images/gallery/interior02.jpg",
        title: "Gallery",
    },
    {
        img: "/images/gallery/interior03.jpg",
        title: "Gallery",
    },
    {
        img: "/images/gallery/interior04.jpg",
        title: "Gallery",
    },
];
