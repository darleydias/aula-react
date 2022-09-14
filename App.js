import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const [tela,setTela] = useState("menu")
  const [jogador,setJogador] = useState("")
  const [tabuleiro,setTabuleiro] = useState("")
  const [ganhador,setGanhador] = useState("")
  
  switch (tela) {
    case 'menu':
      return getTelaMenu()
    case 'tabuleiro':
        return getTabuleiro()
    case 'resultado':
        return getResultado()
    default:
      break;
  }
  function getResultado(){
    return(
    <View style={styles.container}>
          <Text style={styles.titulo}>Jogo da Velha</Text>
          <Text style={styles.subtitulo}>O ganhador foi {ganhador}</Text>
          
        </View>
    )
  }
  function getTelaMenu(){
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Jogo da Velha</Text>
          <Text style={styles.subtitulo}>Selecione o primeiro jogador</Text>
          <View style={styles.inlineitens}>
            <TouchableOpacity style={styles.boxjogador} onPress={()=>iniciarJogo("x")}>
              <Text style={styles.jogadorx}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.boxjogador} onPress={()=>iniciarJogo("o")}>
              <Text style={styles.jogadoro}>0</Text>
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
    function verificarGanhador(){

    }
    function jogar(linha,coluna){
      tabuleiro[linha][coluna] = jogador
      setTabuleiro([...tabuleiro])
      setJogador(jogador ==='x'?'o':'x')

      if(tabuleiro[0][0]!==""){
        if(tabuleiro[0][0]===tabuleiro[0][1]&&tabuleiro[0][1]===tabuleiro[0][2]){
          setGanhador(tabuleiro[0][0] + " e ganhou na primeira linha")
          setTela("resultado")
        }
      }
      
      
      setTela("resultado")
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
                                  disabled={coluna!=""}
                                  onPress={()=>jogar(nrLinha,nrColuna)}
                              >
                                <Text style={coluna=='x'? styles.jogadorx:styles.jogadoro}>{coluna}</Text>
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
  jogadorx:{
    fontSize:40,
    color:"blue"
  },

  jogadoro:{
    fontSize:40,
    color:"brown"
  }
});
