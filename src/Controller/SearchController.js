import api from '../services/api';
import { AsyncStorage } from 'react-native';

export default async function SearchController(name, navigation) {
    
    const response = await api.get('/brazil/uf/' + name);

    const description = 'casos: ' + response.data.cases;
     const estado = 'estado: ' + response.data.state;
     const morte = 'morte: ' + response.data.deaths;
     
     
        await AsyncStorage.setItem('description', description);
        await AsyncStorage.setItem('estado', estado);
        await AsyncStorage.setItem('morte', morte);


    return navigation.navigate('Search', { header: null });
    
}