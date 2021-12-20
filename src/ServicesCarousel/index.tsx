import React, { useState } from "react";
import { CardExpansivelContainer } from "./styles";

const cards = [
  {
    imgUrl: "",
    title: "DevOps engineers",
    body: "Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust.",
  },
  {
    imgUrl: "",
    title: "Data scientists",
    body: "Business decisions are better when backed by data. Give visibility to the data that support your strategies.",
  },
  {
    imgUrl: "",
    title: "Software engineers",
    body: "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads.",
  },
  {
    imgUrl: "",
    title: "Support teams",
    body: "Level up your support by providing information to your customers using a natural interface: questions and answers.",
  },
  {
    imgUrl: "",
    title: "Engineering leaders",
    body: "Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.",
  },
];

function CardExpansivo(props: any) {
  const [open, setOpen] = useState("closed");

  return (
    <div
      className={`card-expansivel card-expansivel-${open}`}
      onClick={() => {
        //alert("Been clicked")
        setOpen(open === "closed" ? "opened" : "closed");
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
  );
}

export default function ServicesCarousel(props: any) {
  return (
    <div style={{...props.sx}}>
      <CardExpansivelContainer>
        {cards.map((e: any) => (
          <CardExpansivo title={e.title} body={e.body} />
        ))}
      </CardExpansivelContainer>
    </div>
  );
}
