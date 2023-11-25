import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { useGetHello, useUpdateHello } from '@/lib/user-api-hooks';

export default function App() {
  const { data, error, mutate } = useGetHello({});
  const { trigger } = useUpdateHello()

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={[styles.container]}>
          <StatusBar style="auto" />
          <Text>{data?.result}</Text>
          <Text style={styles.error}>{error?.message}</Text>
          <Pressable style={styles.button} onPress={async () => {
            await trigger({ payload: 'Hello tsdk! ' + Math.random() });
            mutate();
          }}>
            <Text style={styles.buttonText}>Update to `Hello tsdk!`</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6466f1',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  error: {
    color: 'red'
  }
});
