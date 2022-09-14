import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const [tela,setTela] = useState("menu")
  const [jogador,setJogador] = useState("")
  const [tabuleiro,setTabuleiro] = useState("")
  
  switch (tela) {
    case 'menu':
      return getTelaMenu()
    case 'tabuleiro':
        return getTabuleiro()
    default:
      break;
  }
  function getTelaMenu(){
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Jogo da Velha</Text>
          <Text style={styles.subtitulo}>Selecione o primeiro jogador</Text>
          <View style={styles.inlineitens}>
            <TouchableOpacity style={styles.boxjogador} onPress={()=>iniciarJogo("x")}>
              <Text>x</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.boxjogador} onPress={()=>iniciarJogo("o")}>
              <Text>0</Text>
            </TouchableOpacity>
          </View>
          <Text>O Jogador {jogador} está jogando</Text>
        </View>
      );
    }

    function iniciarJogo(jogador){
        setJogador(jogador)
        setTabuleiro([
          ["","",""],
          ["","",""],
          ["","",""]
        ])
        setTela('tabuleiro')
    }
    function jogar(linha,coluna){
      tabuleiro[linha][coluna] = jogador
      setTabuleiro([...tabuleiro])
    }

    function voltarMenu(jogador){
      setJogador("")
      setTela('menu')
    }
    function getTabuleiro(){
      return(
        <View style={styles.container}>
          <Text style={styles.titulo}>Jogo da Velha</Text>
          <Text style={styles.subtitulo}>Vez do jogador - {jogador}</Text>
            {
                  tabuleiro.map((linha,nrLinha)=>{
                    return(
                      <View key={nrLinha} style={styles.inlineitens}>
                        { 
                            linha.map((coluna,nrColuna)=>{
                            return(
                              <TouchableOpacity 
                                  key={nrColuna}
                                  style={styles.boxjogador}
                                  onPress={()=>jogar(nrLinha,nrColuna)}
                              >
                                <Text>{coluna}</Text>
                              </TouchableOpacity>
                            )
                            })
                        }
      
                      </View>
                    )
                  }
              
              )
              
            }
          <TouchableOpacity onPress={()=>setTela("menu")}>
          <text>Voltar</text>
          </TouchableOpacity>

        </View>
      )
      
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight:'bold',
    color:"#333"
  },
  subtitulo: {
    fontSize: 20,
    color:"#555",
    marginTop:20
  },
  boxjogador: {
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'center',
    margin:5,
    backgroundColor:"#ddd"
  },
  inlineitens: {
    flexDirection:"row"
  },
});
