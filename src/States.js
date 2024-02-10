import { ArrowRightOutlined } from "@mui/icons-material";
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

const COUNTRIES_API = "https://countriesnow.space/api/v0.1/countries";

const statesAPI = (country) =>
  `https://countriesnow.space/api/v0.1/countries/states/q?country=${country}`;

const citiesAPI = (country, state) =>
  `https://countriesnow.space/api/v0.1/countries/state/cities/q?country=${country}&state=${state}`;

function Card(props) {
  const { name, caption, action, selected } = props;
  return (
    <ListItem
      style={{ backgroundColor: selected === name ? "yellow" : "white" }}
    >
      {action && (
        <ListItemSecondaryAction>
          <IconButton onClick={() => action(name)}>
            <ArrowRightOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      )}
      <ListItemText primary={name} secondary={caption} />
    </ListItem>
  );
}

export default function States() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();

  useEffect(() => {
    fetch(COUNTRIES_API)
      .then((res) => res.json())
      .then((countries) => {
        console.log(countries);
        setCountries(countries.data ?? []);
      })
      .catch((err) => {
        console.log("ERROR", err);
      })
      .finally(() => {
        console.log("Finished");
      });
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;
    fetch(statesAPI(selectedCountry))
      .then((res) => res.json())
      .then((states) => {
        console.log(states);
        setStates(states?.data?.states ?? []);
      })
      .catch((err) => {
        console.log("ERROR", err);
      })
      .finally(() => {
        console.log("Finished");
      });
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      fetch(citiesAPI(selectedCountry, selectedState))
        .then((res) => res.json())
        .then((cities) => {
          console.log(cities);
          setCities(cities?.data ?? []);
        })
        .catch((err) => {
          console.log("ERROR", err);
        })
        .finally(() => {
          console.log("Finished");
        });
    }
  }, [selectedCountry, selectedState]);

  useEffect(() => {
    document.body.scrollIntoView(
      {
        behavior: "smooth",
      },
      200
    );
  }, [selectedCountry, selectedState]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <List>
          {countries.map((country) => (
            <Fragment key={country.name}>
              <Card
                name={country.country}
                caption={country.iso3}
                action={setSelectedCountry}
                selected={selectedCountry}
              />
              <Divider />
            </Fragment>
          ))}
        </List>
      </Grid>
      <Grid item xs={4}>
        <List>
          {states.map((state) => (
            <Fragment key={state.name}>
              <Card
                name={state.name}
                caption={state.state_code}
                action={setSelectedState}
                selected={selectedState}
              />
              <Divider />
            </Fragment>
          ))}
        </List>
      </Grid>
      <Grid item xs={4}>
        <List>
          {cities.map((city) => (
            <Fragment key={city}>
              <Card name={city} />
              <Divider />
            </Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
