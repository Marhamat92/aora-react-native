import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import React from "react";

export default function App() {
  return (
    <View>
      <Text className='text-3xl'>
        Open up App.tsx to start working on your app!
      </Text>

      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: "red" }}>
        Go to Profile
      </Link>
    </View>
  );
}
