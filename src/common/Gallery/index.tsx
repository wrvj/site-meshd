import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ImageGallery() {
  return (
    <div>
      <ImageList variant="quilted" cols={2} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{borderRadius: "8px"}}
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
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
];
