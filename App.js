import React, {useState} from 'react';
import { Font } from 'expo';
import{
  StyleSheet,Text,Keyboard,
  StatusBar,
} from 'react-native';

import { Container,Header,Input,Label,Content,
  Title,Card,CardItem,Button ,Body } from 'native-base';

const App: () => React$Node = () => {
  const [email,setEmail]= useState();
  const [passowrd,setPassword]= useState();

  myfun = async()=>{
    
    await fetch('http://localhost:8000/api/login',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email": email, "password": passowrd })
    }).then(res => res.json())
    .then(resData =>{
        alert(resData.message);
    });
  }
  return(
  <>
 <StatusBar barStyle = "dark-content" />
<Container>
  <Content>
    <Header>
    </Header>
    <CardItem>
    <Text style={styles.heading}> Testing api</Text>
    </CardItem>
    <CardItem>
      <Input placeholder="Email" style={styles.input} 
        value={email} onChangeText={(value)=>setEmail(value)}
      />
    </CardItem>
    <CardItem>
      <Input placeholder="Password"
       style={styles.input} 
        value={passowrd} onChangeText={(value)=>setPassword(value)}
      />
    </CardItem>
    <CardItem>
    <Body>
     <Button primary block onPress ={myfun}>
       <Text style={styles.btn}>Login here</Text>
     </Button>
     </Body>
    </CardItem>
  </Content>
</Container>
 </>
);
};
const styles = StyleSheet.create({
 heading:{
   textAlign: 'center', flex:1,fontSize:20,
 },
 input:{
   borderWidth:1, borderColor: 'blue'
 },
 btn:{
  color:'#fff', fontSize:22
 }
});

export default App;