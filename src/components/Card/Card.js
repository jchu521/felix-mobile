import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Card.scss";

export default function Card(props) {
  const {
    button,
    index,
    title,
    text,
    info,
    backgroundImage,
    logo,
    cardBodyBgColor,
  } = props;

  const [hover, setHover] = useState(false);
  const handleMouseEnter = (e) => {
    e.preventDefault();
    setHover(true);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setHover(false);
  };

  const cardStyle = hover
    ? {
        backgroundColor: cardBodyBgColor,
      }
    : {
        backgroundImage: `url(${backgroundImage})`,
      };

  return (
    <Grid items xs={12} sm={6} md={4} lg={3}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        className="card"
        style={cardStyle}
      >
        {hover && (
          <div className="card-body" style={{}}>
            <span className="goal-number">{index + 1}</span>
            <h3 className="goal-title">{title}</h3>
            <p className="goal-text">{text}</p>
            <Grid container className="goal-info" justifyContent="flex-start">
              {info.map((info, i) => (
                <Grid item key={i} xs={6} className="goal-info-content">
                  <span className="number">{info.number}</span>
                  <p className="feature">{info.feature}</p>
                </Grid>
              ))}
            </Grid>
            <Button href={button.link} className="btn btn-goal">
              {button.text}
            </Button>
          </div>
        )}

        {!hover && <img src={logo.src} alt={logo.src} className="logo" />}
      </div>
    </Grid>
  );
}
