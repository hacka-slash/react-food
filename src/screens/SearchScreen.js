//OVERVIEW: We make a call to the yelp API to return data based on our params on the button press

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    //the state uses '' empty string in the beggining. 
    const [term, setTerm] = useState('');
    //Initialized as an empty array but will be filled with data from the response body
    const [results, setResults] = useState([]);

    
    //asyncrhonous operation
    const searchApi = async () => {
         const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term:{term},
                location: 'san jose'
        }});
        setResults(response.data.businesses);
        console.log(response.data.businesses);
    }
    return ( 
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
                                
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>
     );
}

const styles = StyleSheet.create({});

export default SearchScreen;