import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  upperSection: {
    flex: 1,
    justifyContent: 'center',
  },
  lowerSection: {
    flex: 1,
    justifyContent: 'center',
  },
  upperText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  centerSquare: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5,
  },
  sideSquare: {
    width: 40,
    height: 40,
    backgroundColor:'blue',
    margin:5,

  },
});

export default function App() {
  return (
    <View style={styles.container}>
      {/* ust */}
      <View style={styles.upperSection}>
        
        <View style={styles.square}>
          <Text style={styles.upperText}>Merhaba</Text>
        </View>
      </View>

      {/*alt */}
      
      <View style={styles.lowerSection}>
        
        
        
        <View style={styles.squareContainer}>
          
          
          <View style={styles.sideSquare} />
          
          
          <View style={styles.sideSquare} />
          <View style={styles.centerSquare}>            
            <View style={styles.sideSquare} />
            <View style={styles.sideSquare} />
            <View style={styles.sideSquare} />
            <View style={styles.sideSquare} /> 
            <View style={styles.sideSquare} />           
          </View>
          <View style={styles.sideSquare} />
          <View style={styles.sideSquare} />             
          
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}