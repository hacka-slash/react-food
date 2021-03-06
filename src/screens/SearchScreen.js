//OVERVIEW: useEffect hook will allow us to run the function only once the component is first rendered

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    //the state uses '' empty string in the beggining. 
    const [term, setTerm] = useState('');
    //Initialized as an empty array but will be filled with data from the response body
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    
    //asyncrhonous operation
    const searchApi = async (searchTerm) => {
        console.log("Testing");
        try {
         const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
        }});
        setResults(response.data.businesses);
    }catch(e){
        setErrorMessage('Something went wrong');
    }

    
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' ||| '$$$'
        let filteredResults = [];
        for(i = 0; i < results.length; i++){
            if(results[i].price == price)
                filteredResults.push(results[i])

        }
        return filteredResults;
    };

    return ( 
        <View style={{flex: 1}}>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                                
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}/>
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}/>
                <ResultsList 
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({});

export default SearchScreen;