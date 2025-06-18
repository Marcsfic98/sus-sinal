import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Data } from './src/pages/Data';
import { useState } from 'react';



export default function App() {

  const [page ,setPage] = useState(true)
console.log(page)
  return (
    <View style={styles.container}>
      {
        page === true && (
              <Home page={page} setpage={setPage}  />
        )
      }

       {
        page === false && (
              <Data page={page} setpage={setPage}  />
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
