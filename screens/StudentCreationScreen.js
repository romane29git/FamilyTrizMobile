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
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const StudentCreationScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [promotion, setPromotion] = useState(0);
    const [family, setFamily] = useState(null);
    const [parrainId, setParrainId] = useState(null)
    const [godFather, setGodFather] = useState(null);
    const [families, setFamilies] = useState([]);
    const [studentsPicker, setStudentsPicker] = useState([])

  
    async function fetchData() {
      const fetchedFamilies = await familyService.fetchFamilies();
      setFamilies(fetchedFamilies);
      setLoading(false);
    }
  
    useEffect(() => {
      if(families.length == 0)
        fetchData();
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

    const handleAddStudent = async () => {
      fetch("https://familytriz.azurewebsites.net/api/StudentApi", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: lastName,
          prenom: firstName,
          promotion: promotion,
          familleId: family.id,
          parrainId: parrainId,
          famille: family,
          parrain: godFather
        }),
      })
      .then((response) => response.json())
      .catch((error) => {
        // handle error from API here
        console.error("Error sending data:", error);
      });
      navigation.replace('listeEleve');
    };
  
  
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.icon}>
              <Ionicons name="person-add" size={30} color="#FFFFFF"/>
          </View>
          <TextInput
            style={styles.text}
            placeholder="Entrez le nom"
            onChangeText={(text) => {
            // Update lastName after input changes
            setLastName(text);
            }}
          />
          <TextInput
            style={styles.text}
            placeholder="Entrez le prénom"
            onChangeText={(text) => {
            // Update firstName after input changes
            setFirstName(text);
            }}
          />
          <TextInput
            style={styles.text}
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
            onPress={handleAddStudent}
          >
            <Text style={styles.buttonText}>Ajouter l'élève</Text>
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
  });

export default StudentCreationScreen;