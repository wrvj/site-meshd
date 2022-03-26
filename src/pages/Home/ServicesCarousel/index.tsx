import React, { useEffect, useRef, useState } from "react";
import { CardExpansivelContainer } from "./styles";
import Fade from "@mui/material/Fade";
import useOnScreen from "../../../Utils/UseOnScreen";


const cards = [
  {
    index: 1,
    imgUrl: "",
    title: "Product Rendering",
    body: "Good product visualization demands that we work as virtual photographers and light the products as if they were present in a physical studio. However, using 3D we have the liberty to bypass physical constraints when we want to go beyond the real world.",
    bgImage: "/images/gallery/PRODUCT.jpg",
  },
  {
    index: 2,
    imgUrl: "",
    title: "Architecture Vizualization",
    body: "Like any other art form, architectural visualization has the power to move your audience, whether it be the design client, potential customers, or future tenants.",
    bgImage: "/images/gallery/ARCHVIZ.jpg",
  },
  {
    index: 3,
    imgUrl: "",
    title: "Game Assets",
    body: "Creating 3D models of characters, environments, weapons, and objects is the first step in bringing any 3D game to life. We work with a wide range of the latest 3D software and use both traditional and PBR methods to achieve high-quality results for maximum appeal.",
    bgImage: "/images/gallery/GAMES.jpg",
  },
  {
    index: 4,
    imgUrl: "",
    title: "NFTs",
    body: "NFTs are essentially digital certificates that confer ownership and authenticity to a physical or digital item. Add unique experiences to the mix and you redefine ownership. At Meshd, we can help build these experiences.",
    bgImage: "/images/gallery/NFT.jpg",
  },
];

function CardExpansivo(props: any) {
  const { openedCard, cardIndex, setOpen, timeout } = props;
  const [start, setStart] = useState<boolean>(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    isVisible &&
      setTimeout(() => setStart(true), (cardIndex-1) * timeout + timeout / 2);
  }, [isVisible]);

  return (
    <Fade in={start} timeout={timeout}>
      <div
        ref={ref ? ref : null}
        className={`card-expansivel card-expansivel-${
          openedCard === cardIndex ? "opened" : "closed"
        }`}
        onClick={() => {
          if (openedCard === cardIndex) setOpen(0);
          else setOpen(cardIndex);
        }}
      >
        <div className="image-card"></div>
        <div className="title-card">
          <p>{props.title}</p>
        </div>
        <div className="body-card">
          <p>{props.body}</p>
        </div>
      </div>
    </Fade>
  );
}

export default function ServicesCarousel(props: any) {
  const [openedCard, setOpenedCard] = useState(1);

  return (
    <div style={{ ...props.sx }}>
      <CardExpansivelContainer
        bgImage={cards[openedCard > 0 ? openedCard - 1 : 0].bgImage}
      >
        {cards.map((e: any) => (
          <CardExpansivo
            title={e.title}
            body={e.body}
            cardIndex={e.index}
            openedCard={openedCard}
            setOpen={setOpenedCard}
            timeout={600}
          />
        ))}
      </CardExpansivelContainer>
    </div>
  );
}
