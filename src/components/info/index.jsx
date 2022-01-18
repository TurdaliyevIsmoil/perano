import { useState, useRef } from "react";
import "./style.scss";
import Button from "../../ui/button/index";

export default function InfoSection(props) {
  return (
    <section
      className={`info ${props.data.dark ? "bg-dark" : "bg-light"}`}
      id={props.data.id}
    >
      <div className={`row ${props.data.imgStart ? "img-st" : "img-nd"}`}>
        <div className="content">
          <h3 className="topline">{props.data.topline}</h3>
          <h1 className="title">{props.data.title}</h1>
          <p>{props.data.description}</p>
          <Button
            to="home"
            classes="button"
            scroll={true}
            darkHover="true"
            big={false}
            active="active"
          >
            {props.data.btnLabel}
          </Button>
        </div>
        <div
          className={`image flex-center`}
        >
          <img src={props.data.img} />
        </div>
      </div>
    </section>
  );
}
