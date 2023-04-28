import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import familyService from "../api/familyService";
import studentService from "../api/studentService";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const StudentUpdateScreen = ({ navigation, route }) => {

    const { student } = route.params;

    const [loading, setLoading] = useState(true);
    const [lastName, setLastName] = useState(student.nom);
    const [firstName, setFirstName] = useState(student.prenom);
    const [promotion, setPromotion] = useState(student.promotion);
    const [family, setFamily] = useState(student.family);
    const [parrainId, setParrainId] = useState(student.parrainId)
    const [godFather, setGodFather] = useState(student.parrain);
    const [families, setFamilies] = useState([]);
    const [studentsPicker, setStudentsPicker] = useState([])

  
    async function fetchData() {
      const fetchedFamilies = await familyService.fetchFamilies();
      setFamilies(fetchedFamilies);
      setLoading(false);
    }
  
    useEffect(() => {
      if(families.length == 0){
        fetchData();
      }
      else{
        const items = family.eleves.map(item => (
          <Picker.Item key={item.id} label={item.prenom + ' ' + item.nom} value={item} />
        ));
        setStudentsPicker(items);
      }
    }, [family]);

    const familiesPicker = families.map(item => (
      <Picker.Item key={item.id} label={item.couleur} value={item} />
    ));

    const updateStudent = async () => {
      try{
        await studentService.handleUpdateStudent(student.id, lastName, firstName, promotion, family, parrainId, godFather);
        navigation.replace('listeEleve');
      }
      catch (e) {
        console.log(e);
      }
    }
  
  
    if (loading) {
      return (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.icon}>
              <Ionicons name="create" size={30} color="#FFFFFF"/>
          </View>
          <TextInput
            style={styles.text}
            placeholder="Entrez le nom"
            value={lastName}
            onChangeText={(text) => {
            // Update lastName after input changes
            setLastName(text);
            }}
          />
          <TextInput
            style={styles.text}
            placeholder="Entrez le prénom"
            value={firstName}
            onChangeText={(text) => {
            // Update firstName after input changes
            setFirstName(text);
            }}
          />
          <TextInput
            style={styles.text}
            value={promotion.toString()}
            placeholder="Entrez la promotion"
            onChangeText={(text) => {
            // Update promotion after input changes
            setPromotion(text);
            }}
          />
          <Picker
            selectedValue={family}
            style={styles.text}
            onValueChange={(itemValue, itemIndex) => setFamily(itemValue)}
          >
            <Picker.Item label="Sélectionnez une famille" enabled={false} value={null} />
            {familiesPicker}
          </Picker>
          <Picker 
            selectedValue={godFather}
            style={styles.text}
            onValueChange={(itemValue, itemIndex) => setGodFather(itemValue) && setParrainId(itemValue.id)}
          >
            <Picker.Item label="Sélectionnez un parrain" enabled={false} value={null} />
            {studentsPicker}
          </Picker>
          <TouchableOpacity
            style={styles.button}
            onPress={updateStudent}
          >
            <Text style={styles.buttonText}>Modifier l'élève</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center", //horizontal
      justifyContent: "center"
    },
    box: {
      fontSize: 30,
      fontFamily: "monospace",
      textAlignVertical: "center",
      width: "100%",
      textAlign: "center",
      height: "20%",
    },
    icon: {
        backgroundColor: '#AC6DF4',
        padding: 10,
        borderRadius: 30,
        width: 50,
        marginBottom: 20
    },
    text: {
      backgroundColor: 'white',
      width: 200,
      height: 40,
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 20,
      padding: 10
    },
    buttonText: {
      fontSize: 20,
      color: 'white'
    },
    button: {
      backgroundColor: '#AC6DF4',
      marginTop: 10,
      borderRadius: 10,
      padding: 20
    },
    spinnerContainer: {
      flex: 1,
      justifyContent: "center",
    }
  });

export default StudentUpdateScreen;
