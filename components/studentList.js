import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import StudentItem from "./StudentItem";

const StudentList = ({ students }) => {
  return (
    <FlatList
      style={styles.liste}
      data={students}
      renderItem={({ item }) => {
        return <StudentItem stud={item}></StudentItem>;
      }}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  liste: {
    height: 600
  },
});
