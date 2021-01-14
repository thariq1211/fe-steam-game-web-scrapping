import React from "react";
import { css } from "@emotion/css";

import GameProvider from "./context/game";

const RouterComponent = React.lazy(() => import("../src/routers"));

function App() {
  const loading = (
    <div
      className={css`
        padding: 50px;
      `}
    >
      Loading
    </div>
  );
  return (
    <React.Suspense fallback={loading}>
      <GameProvider>
        <RouterComponent />
      </GameProvider>
    </React.Suspense>
  );
}

export default App;
