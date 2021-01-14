import React, { useContext, useState } from "react";
import axios from "axios";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

import { DomainAPI } from "../../helpers/globVars";

import { GameContext } from "../../context/game";

const Home = () => {
  const { value, setResult, clearResult } = useContext(GameContext);
  const [search, setSearch] = useState();
  const history = useHistory();
  const container = css`
    padding: 50px;
  `;

  const getGame = async () => {
    clearResult();
    if (search) {
      try {
        const response = await axios.get(
          `${DomainAPI}/api/games/${search.replace(/ /g, "+")}`
        );
        const { data } = response;
        setResult(data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className={container}>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <input
        type="text"
        placeholder="search game"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={getGame}>
        search
      </button>
      <div>
        <ul>
          {value?.result &&
            value.result.map((val) => (
              <li>
                {val.title}{" "}
                <span
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() =>
                    history.push(
                      `/details/${val.link.split("/").slice(4, 5).toString()}`
                    )
                  }
                >
                  {val.link}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
