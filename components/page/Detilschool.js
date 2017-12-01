
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  TextInput,
  ScrollView,
  Text,
  ListView
} from 'react-native';

export default class Detilschool extends Component<{}>{

  render() {
    return (


      <View style={styles.container}>

      <View style={styles.teksSekolah}>
            <Text style = {styles.namaSekolah}>SDN 1 PEMPATAN</Text>
          </View>

    <Image style={styles.imagewrap}
          source={require('../image/sdn1pempatan.png')}/>


          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>I N F O R M A S I</Text>
          </View>
<ScrollView>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>NAMA SEKOLAH</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>ALAMAT</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JUMLAH SISWA</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>SUMBER DAYA KETENAGA KERJAAN PNS</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>SUMBER DAYA KETENAGA KERJAAN HONORER</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JARAK DENGAN PASAR TERDEKAT</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JARAK DENGAN PUSAT IBUKOTA/KABUPATEN</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>ankldanfdslkfnlsdkfnldksfnlkdnflsdknflsdnflskdnfldkfnlakdnalfkalkfalfkjhaldkjsakdjashkjashdkajsdhkjasdhkajsdh</Text>
          </View>

          <View style={styles.boxFasilitas}>
            <Text style = {styles.informasi2}>FASILITAS</Text>
          </View>

           <View style={styles.boxInform}>
            <Text style = {styles.informasi}>RUANG KELAS</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 1 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>PERPUSTAKAAN</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 0 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>KANTIN</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 1 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>TOILET</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 2 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>LAPANGAN OLAHRAGA</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 0 </Text>
          </View>







          </ScrollView>
      </View>


    );
  }
}



const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#fff'
  },
 imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 1) - 2 ,
    paddingVertical: 100,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  teksSekolah:{

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  namaSekolah:{
   marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 10
  },
  boxInform: {
    marginTop: 10,
    width: 370,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  informasi:{
    color: 'white',
    fontSize: 15,
    fontWeight: '200'
  },

  boxDetail: {
    marginBottom: 10,
    width: null,
    height: null,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  boxFasilitas: {
    marginTop: 10,
    width: 370,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
informasi2:{
    color: '#02ff06',
    fontSize: 17,
    fontWeight: '200'
  },
  boxMain:{
    marginBottom: 10,
    width: null,
    height: null,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'


  },
   Main:{
    color: 'white',
    fontSize: 17,
    fontWeight: '200'
   }
});
