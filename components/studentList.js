import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import StudentItem from "./StudentItem";

const StudentList = ({ students }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => {
          return <StudentItem stud={item}></StudentItem>;
        }}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
