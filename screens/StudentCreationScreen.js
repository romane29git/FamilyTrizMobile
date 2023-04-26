import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import studentService from "../api/studentService";

const StudentCreationScreen = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
  
    async function fetchData() {
      const fetchedStudents = await studentService.fetchStudents();
      setStudents(fetchedStudents);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
  
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.row}>
          </View>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around", //vertical
      alignItems: "center", //horizontal
    },
    box: {
      fontSize: 30,
      fontFamily: "monospace",
      textAlignVertical: "center",
      width: "100%",
      textAlign: "center",
      height: "20%",
    },
    green: {
      backgroundColor: "#79F98E",
    },
    blue: {
      backgroundColor: "#93E2FA",
    },
    red: {
      backgroundColor: "#FC3C3C",
    },
    yellow: {
      backgroundColor: "#F9E74D",
    },
    orange: {
      backgroundColor: "#F89628",
    },
  });

export default StudentCreationScreen;