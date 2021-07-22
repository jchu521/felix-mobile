import React from "react";
import { Grid } from "@material-ui/core";

import Card from "../../components/Card/Card";

import { cards } from "../../constants";

import "./Goals.scss";

export default function Goals() {
  return (
    <div className="Goals">
      <div className="Goals__container">
        <h2 class="title">THE 17 GOALS</h2>
        <div class="content">
          <div class="headinginfo">
            <p class="headinginfo-number">169</p>
            <p class="headinginfo-text">Targets</p>
          </div>
          <div class="headinginfo">
            <p class="headinginfo-number">3079</p>
            <p class="headinginfo-text">Events</p>
          </div>
          <div class="headinginfo">
            <p class="headinginfo-number">1304</p>
            <p class="headinginfo-text">Publications</p>
          </div>
          <div class="headinginfo">
            <p class="headinginfo-number">5450</p>
            <p class="headinginfo-text">Actions</p>
          </div>
        </div>
      </div>
      <div className="cardGroup">
        <Grid container>
          {cards.map((c, i) => {
            return <Card key={i} {...c} index={i} />;
          })}
        </Grid>
      </div>
      <div className="history">
        <h2>History</h2>
        <p>
          <a href="https://sustainabledevelopment.un.org/post2015/transformingourworld">
            The 2030 Agenda for Sustainable Development,
          </a>
          &nbsp;adopted by all United Nations Member States in 2015, provides a
          shared blueprint for peace and prosperity for people and the planet,
          now and into the future. At its heart are the 17 Sustainable
          Development Goals (SDGs), which are an urgent call for action by all
          countries - developed and developing - in a global partnership. They
          recognize that ending poverty and other deprivations must go
          hand-in-hand with strategies that improve health and education, reduce
          inequality, and spur economic growth – all while tackling climate
          change and working to preserve our oceans and forests.
        </p>
      </div>
    </div>
  );
}
