import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [lembrete, setLembrete] = useState("");
  const [lembretes, setLembretes] = useState([]);

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => [...lembretes, lembrete]);
    console.log(lembretes);
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.lembreteView}>
        {/**usuário irá inserir lembretes aqui */}
        <TextInput
          placeholder='Lembrar...'
          style={styles.lembreteInputText}
          onChangeText={capturarLembrete}
          value={lembrete}
        />

        <Button
          title="+"
          onPress={adicionarLembrete}
        />


      </View>

      <View>
        <ScrollView>
          {/**usuário irá visualizar a lista de lembretes aqui */}

          {
            lembretes.map((lembrete) => {
              <View key={lembrete} style={styles.itemNaLista}>
                <Text>{lembrete}</Text>
              </View>
            })
          }
        </ScrollView>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteInputText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    padding: 2
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }

});
