import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FilmsList from "../components/FilmsList";
import ToastManager, { Toast } from "toastify-react-native";

const Search = () => {
  const [searchText, setSearchText] = useState();
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

  const handleText = (text) => {
    setSearchText(text);
  };

  const handleData = (data) => {
    const items = data.data.map((item) => ({
      id: item.id ?? "",
      title: item.title ?? "",
      plot: item.plot ?? "",
      image: item.image ?? "",
      year: item.year ?? "",
      isFilm: item.qid === "tvSeries" ? false : true ?? "",
    }));
    setData(items);
    showToast();
  };

  const showToast = () => {
    let cont = 0;
    data.forEach(() => {
      cont++;
    });
    Toast.success(cont + " Películas y series encontradas");
  };

  const getFilms = async () => {
    const query = searchText.trim().replace(/\s+/g, "");
    const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${query}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e5680cce59msh32d15e37dbff499p18227fjsn22d5f397500e",
        "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
      },
    };
    try {
      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => handleData(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Ej: Star Wars"
        value={searchText}
        onChangeText={(text) => handleText(text)}
      />
      <TouchableOpacity
        style={styles.searchButton}
        title="Buscar"
        onPress={() => getFilms()}
      >
        <Text style={styles.search}>Buscar</Text>
      </TouchableOpacity>
      <View>
        <ToastManager durationShort={3000} positionValue={200} />
      </View>
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
  searchBar: {
    backgroundColor: "#ECEFF4",
    marginLeft: "5%",
    marginRight: "5%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    textAlign: "center",
    marginTop: "15%",
    paddingTop: "2%",
    paddingBottom: "2%",
    fontSize: 16,
  },
  searchButton: {
    marginLeft: "5%",
    marginRight: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#52092a",
    alignItems: "center",
  },
  search: {
    color: "#ECEFF4",
    fontSize: 16,
  },
});

export default Search;
