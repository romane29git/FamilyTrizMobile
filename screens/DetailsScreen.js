import React from "react";
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator } from "react-native";
import FamilyDescription from "../components/familyDescription";
import { useState } from "react";
import { useEffect } from "react";
// import styles from "../theme/styles";

const DetailsScreen = (color) => {

  const [loading, setLoading] = useState(true);
  const [family, setFamily] = useState([]);

  async function fetchData() {
    const fetchedFamilies = await familyService.fetchFamilies();
    setFamily(fetchedFamilies);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(loading){
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <FamilyDescription color="Bleu"/>
  );
};

export default DetailsScreen;
