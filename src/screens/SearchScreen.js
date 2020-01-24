//OVERVIEW: Connecting to the Yelp API
//We are axios library over fetch even tho fetch is built in.
    //npm i axios --save worked without error.

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    //the state uses '' empty string in the beggining. 
    const [term, setTerm] = useState('');

    return ( 
        <View>
            <SearchBar 
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
     );
}

const styles = StyleSheet.create({});

export default SearchScreen;