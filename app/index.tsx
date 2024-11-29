import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import React from "react";

export default function App() {
  return (
    <View>
      <Text className='text-3xl font-pthin'>
        Open up App.tsx to start working on your app!
      </Text>

      <StatusBar style='auto' />
      <Link href='/home' style={{ color: "red" }}>
        Go to Home
      </Link>
    </View>
  );
}
