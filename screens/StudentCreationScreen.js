import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import studentService from "../api/studentService";
import Ionicons from "react-native-vector-icons/Ionicons";

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
            <Icon name="person-add" size={40}/>
          </View>
        </View>
      );
    }
  };

export default StudentCreationScreen;