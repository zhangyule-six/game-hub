import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" colSpan={4}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" colSpan={4}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="mian">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
