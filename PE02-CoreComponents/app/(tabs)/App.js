import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      <View>
        <Image
        source={require('/workspaces/CS451_PE_Joel/PE02-CoreComponents/assets/images/icon.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text></Text>
      </View>
      <Text>Which Course did you like?</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="ex. CS451"
      />
      <Text></Text>
        <Text 
        style={styles.title}>
            Core Requirements (24 Credits)
        </Text>
                <Text>IS302 Human Computer Interaction</Text>
                <Text>CS 330 Network Communications</Text>
                <Text>CS351 Discrete Mathematics in Computing</Text>
                <Text>CS 340 Operating Systems</Text>
                <Text>IS 345 Cybersecurity</Text>
                <Text>IS 350 Systems Analytics and Design</Text>
                <Text>IS 360 Database Technologies</Text>
                <Text>IS471 Cyber Ethics</Text>
        <Text/>
        <Text 
        style={styles.title}>
            Depth of Study (6 Credits)
        </Text>
                <Text>CS 475 Artificial Intelligence</Text>
                <Text>CS 452 Backend Web Development</Text>
        <Text/>
                <Text 
        style={styles.title}>
            Electives (6 Credits)
        </Text>
                <Text>DS 479 Data Mining and Machine Learning</Text>
        <Text/>
                <Text 
        style={styles.title}>
            Capstone (3 Credits)
        </Text>
                <Text>CS 497 Technology and Computing Capstone</Text>
        <Text/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
    },
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>PE02-CoreComponents</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff00',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



