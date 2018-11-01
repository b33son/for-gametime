import React from "react";
import "./App.css";
import PerformerList from "./containers/PerformerList";

import { Container } from "semantic-ui-react";

const App = () => (
  <div className="App">
    <Container>
      <PerformerList />
    </Container>
  </div>
);

export default App;
