import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { DomainAPI } from "../../helpers/globVars";

import { container } from "../index";

import { GameContext } from "../../context/game";

const GameDetail = () => {
  const { app } = useParams();
  const history = useHistory();
  const { value, setGameDetails, clearGameDetails } = useContext(GameContext);
  const { gameDetails } = value;

  const getGameDetail = async () => {
    try {
      const response = await axios.get(
        `${DomainAPI}/api/games/getDetails/${app}`
      );
      const { data } = response;
      setGameDetails(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (app) getGameDetail();
  }, [app]);

  return (
    <div className={container}>
      <img src={gameDetails && gameDetails.image} alt="Game Image" />
      <p>Title: {gameDetails && gameDetails.title}</p>
      <p>
        Steam Link:{" "}
        <a href={gameDetails && gameDetails.steamLink}>
          {gameDetails && gameDetails.steamLink}
        </a>
      </p>
      <p>Description: {gameDetails && gameDetails.description}</p>
      <p>
        Genres:{" "}
        {gameDetails &&
          gameDetails.genres.map((v) => (
            <>
              <span>{v},</span>
            </>
          ))}
      </p>
      <p>Developer: {gameDetails && gameDetails.developer}</p>
      <p>MetaScore: {gameDetails && gameDetails.metaScore}</p>
      <p>Overall Review: {gameDetails && gameDetails.overallReview}</p>
      <p>Prize: {gameDetails && gameDetails.prize}</p>
      <p>Release Date: {gameDetails && gameDetails.releaseDate}</p>
      <br />
      <strong
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/");
          clearGameDetails();
        }}
      >
        get back
      </strong>
    </div>
  );
};

export default GameDetail;
