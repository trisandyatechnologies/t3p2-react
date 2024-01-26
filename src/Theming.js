import { createContext, useContext, useState } from "react";

const lightTheme = {
  id: "light",
  background: "white",
  color: "black",
};

const darkTheme = {
  id: "dark",
  background: "#333",
  color: "white",
};

const ThemeContext = createContext(lightTheme);

export default function Theming() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider>
      <div>
        <ThemeContext.Provider value={theme}>
          <button
            style={{
              ...theme,
              margin: 8,
              marginLeft: "auto",
              display: "block",
            }}
            onClick={() =>
              setTheme(theme.id === "light" ? darkTheme : lightTheme)
            }
          >
            {theme.id === "light" ? "Dark" : "Light"}
          </button>
          <Header />
          <Content />
        </ThemeContext.Provider>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h1>Title 1</h1>
      <h3>Title 3</h3>
    </div>
  );
}

function Content() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <p>
        Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron
        and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan
        or a large, deep skillet over medium-high heat. Add chicken, shrimp and
        chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
        minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
        onion, salt and pepper, and cook, stirring often until thickened and
        fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
        chicken broth; bring to a boil. Add rice and stir very gently to
        distribute. Top with artichokes and peppers, and cook without stirring,
        until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the
        rice, and cook again without stirring, until mussels have opened and
        rice is just tender, 5 to 7 minutes more. (Discard any mussels that
        don't open.) Set aside off of the heat to let rest for 10 minutes, and
        then serve.
      </p>
    </div>
  );
}
