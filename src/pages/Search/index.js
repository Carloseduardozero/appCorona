import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import style from './style'

export default function Search() {

    const [description, setDescription] = useState('');
    const [estado, setEstado] = useState('');
    const [morte, setMorte] = useState('');



    useEffect(() => {
        async function getDescription() {
            setDescription(await AsyncStorage.getItem('description')); 
        }

        getDescription();
    }, []);


    useEffect(() => {
        async function getEstado() {
            setEstado(await AsyncStorage.getItem('estado')); 
        }

        getEstado();
    }, []);

    useEffect(() => {
        async function getMorte() {
            setMorte(await AsyncStorage.getItem('morte')); 
        }

        getMorte();
    }, []);





    return (
        <View>
               <Text style={style.text}>{estado}</Text>
            <Text style={style.text} >{description}</Text>
            <Text style={style.text} >{morte}</Text>
        
        </View>
    );
}
