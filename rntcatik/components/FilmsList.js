import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Film from "./Film";

const FilmsList = ({ items }) => {
  const [visible, setVisible] = useState(false);
  const [film, setFilm] = useState(null);

  const handleFilm = (film) => {
    setFilm(film);
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      {visible && (
        <View>
          <Film style={styles.film} visible={visible} film={film} />
          <TouchableOpacity>
            <Text onPress={() => setVisible(false)} style={styles.close}>
              Cerrar
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={visible ? { display: "none" } : { display: "flex" }}>
        {items.map((item) => {
          return (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => handleFilm(item)}
            >
              {item.image && (
                <Image
                  source={{uri: item.image}}
                  style={styles.image}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201424",
  },
  close: {
    textAlign: "center",
    color: "#ECEFF4",
    marginTop: "10%",
    padding: 10,
    backgroundColor: "#52092a",
    fontSize: 20,
    borderRadius: 25,
    marginLeft: "5%",
    marginRight: "5%",
  },
  image: {
    width: "100%",
    height: 650,
  },
});

export default FilmsList;
