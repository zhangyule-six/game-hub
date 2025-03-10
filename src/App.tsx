import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" colSpan={4}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" colSpan={1} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" colSpan={3}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
