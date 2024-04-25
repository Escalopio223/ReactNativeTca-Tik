import { Text, View, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import FilmsList from "../components/FilmsList";

const Home = () => {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      plot: "",
      image: "",
      year: "",
      isFilm: "",
    },
  ]);

  useEffect(() => {
    getFilms();
  }, []);

  const handleData = (data) => {
    const items = data.map((item) => ({
      id: item.id,
      title: item.originalTitleText.text,
      plot: item.plot.plotText.plainText,
      image: item.primaryImage.imageUrl,
      year: item.releaseDate.year,
      isFilm: item.titleType.id === "tvSeries" ? false : true,
    }));
    setData(items);
  };

  const getFilms = async () => {
    const url = `https://imdb188.p.rapidapi.com/api/v1/getWeekTop10`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e5680cce59msh32d15e37dbff499p18227fjsn22d5f397500e",
        "x-rapidapi-host": "imdb188.p.rapidapi.com",
      },
    };
    try {
      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => handleData(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.top10}>Top 10 Semanal</Text>
      <ScrollView>
        <FilmsList items={data} style={styles.filmList} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201424",
    height: "100%",
  },
  top10: {
    padding: 38,
    color: "#ECEFF4",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Home;
