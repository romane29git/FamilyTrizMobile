import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import studentItem from "./studentItem";

const studentList = ( students ) => {
      
    return (
    <View style={styles.container}>
        <FlatList
            data={students}
            renderItem={({ item }) => {
                return <studentItem stud={item}></studentItem>;
              }}
            keyExtractor={(item) => item.id.toString()}
        >
        </FlatList>
    </View>
    );
      };

export default studentList;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    }
  });