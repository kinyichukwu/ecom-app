import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Account = () => {
  // Example user data (replace with actual user data)
  const user = {
    name: "Jack Bower",
    email: "johndoe@example.com",
    avatar:
      "https://s3-alpha-sig.figma.com/img/240e/936f/bf19023ceaf3b1b53994ad27bf829c22?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irDTrhHk~YHXLP0vzhAVzjOdKmlBj816GKXKvUP94zeFZIXjjhQJjWHEgJyjWXOdb6qqMCUOrdIyjBCZOtMZ5seqBakeDFA9UjUDyAGbmJbb5izdH-E0nCyMRO7vZ-4z4MIXAIWhrTEUIR80pEyd0KoZapesLZQkvQLH9jhaO29FQ~05qeUmC1iGQ-4URRwBeJq05b~L8rNC-f~2XzCy6eK0BaBMoZ8IhaGM2QBOJN-ULqlwfDsgFwPzDQywoTXX50C4qWDs908Q7pXi2JGCw1Whpnll4-L2db8I8sAkcZEsf1pRko6VXH78o63wC8bzaA~sVnEAh33kPHkiKxJbQA__",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DB3C25",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Account;
