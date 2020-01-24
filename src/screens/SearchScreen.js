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
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
     );
}

const styles = StyleSheet.create({});

export default SearchScreen;