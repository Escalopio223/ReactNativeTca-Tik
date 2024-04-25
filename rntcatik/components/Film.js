import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";

const Film = ({ film }) => {
  const [filmStars, setFilmStars] = useState();

  useEffect(() => {
    getFilm();
  }, []);

  const handleFilmStars = (filmStars) => {
    setFilmStars(filmStars);
  };

  const getFilm = async () => {
    const url = "https://imdb188.p.rapidapi.com/api/v1/searchIMDB";
    const options = {
      method: "GET",
      params: {
        query: film.id,
      },
      headers: {
        "x-rapidapi-key": "e5680cce59msh32d15e37dbff499p18227fjsn22d5f397500e",
        "x-rapidapi-host": "imdb188.p.rapidapi.com",
      },
    };
    try {
      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => handleFilmStars(data.data[0].stars ?? ""));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.year}>{film.year}</Text>
          {film.isFilm ? (
            <Text style={styles.isFilm}>Película</Text>
          ) : (
            <Text style={styles.isNotFilm}>Serie</Text>
          )}
          <Text style={styles.stars}>{filmStars}</Text>
        </View>
        <View style={styles.imageContainer}>
          {film.image ? (
            <Image source={{ uri: film.image }} style={styles.image} />
          ) : (
            <Text>Image not found</Text>
          )}
          <Text style={styles.plot}>{film.plot}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "1%",
    marginRight: "1%",
    borderRadius: 10,
    backgroundColor: "#40082b",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  infoContainer: {
    display: "flex",
    flex: 1,
    marginTop: "5%",
    marginLeft: "10%",
    marginRight: 15,
  },
  title: {
    color: "#ECEFF4",
    fontSize: 28,
    marginBottom: "2%",
  },
  year: {
    color: "#ECEFF4",
    fontSize: 18,
  },
  stars: {
    color: "#C6C9CF",
  },
  imageContainer: {
    width: "100%",
    marginLeft: "10%",
    minHeight: 1,
    marginTop: "4%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: "40%",
    height: 300,
    marginBottom: "5%",
  },
  plot: {
    fontSize: 18,
    width: "40%",
    color: "#ECEFF4",
    marginLeft: "5%",
    marginRight: "10%",
  },
  isFilm: {
    color: "#FF0059",
  },
  isNotFilm: {
    color: "#F9FF85",
  },
});

export default Film;
