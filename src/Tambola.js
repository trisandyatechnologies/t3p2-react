import { createContext, useContext, useState } from "react";

const defaultStyles = {
  cardStyles: { maxWidth: "33.3%", border: "1px solid grey", padding: 8 },
  gridStyles: { display: "flex", flexWrap: "wrap", gap: 16 },
  buttonStyles: { minWidth: 40 },
};

const ThemeContext = createContext(defaultStyles);
const TambolaContext = createContext({ selected: [1, 2, 3, 4, 5] });

export default function Tambola() {
  const [selected, setSelected] = useState([]);

  return (
    <div style={{ padding: 16 }}>
      <h2>Tambola</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {[...new Array(99)].map((_, i) => (
          <button
            style={{ minWidth: 40 }}
            onClick={() => setSelected([...selected, i + 1])}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <hr />
      <TambolaContext.Provider value={{ selected }}>
        <ThemeContext.Provider
          value={{
            ...defaultStyles,
            cardStyles: {
              ...defaultStyles.cardStyles,
              background: "blue",
              color: "white",
            },
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            <ThemeContext.Provider
              value={{
                ...defaultStyles,
                cardStyles: {
                  ...defaultStyles.cardStyles,
                  background: "pink",
                  color: "white",
                },
              }}
            >
              <Player name="Lavanya" />
            </ThemeContext.Provider>

            <Player name="Pranav" />

            <Player name="Vinay" />
            <ThemeContext.Provider
              value={{
                ...defaultStyles,
                cardStyles: {
                  ...defaultStyles.cardStyles,
                  background: "green",
                  color: "white",
                },
              }}
            >
              <Player name="Jhansi" />
            </ThemeContext.Provider>
          </div>
        </ThemeContext.Provider>
      </TambolaContext.Provider>
    </div>
  );
}

function Player(props) {
  const { cardStyles, gridStyles, buttonStyles } = useContext(ThemeContext);
  const { selected } = useContext(TambolaContext);
  return (
    <div style={cardStyles}>
      <h3>
        Player <span style={{ textDecoration: "underline" }}>{props.name}</span>
      </h3>
      <div style={gridStyles}>
        {[...new Array(15)].map((_, i) => (
          <button style={buttonStyles}>
            <span
              style={{
                textDecoration: selected.includes(i + 1)
                  ? "line-through"
                  : "none",
              }}
            >
              {i + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
