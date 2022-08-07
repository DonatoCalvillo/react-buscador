import { useState } from "react";
import SearchBox from "./components/SearchBox";

import data from "../../data/users.json";

import "./style.css"
import SearchResults from "./components/SearchResults";

const Search = () => {
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);
    
    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    }

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data?.length){
            const searchTextMinus = searchText.toLocaleLowerCase();
            const filterData = data.filter((value) => (
                    value.name.toLocaleLowerCase().includes(searchTextMinus) || 
                    value.phone.toLocaleLowerCase().includes(searchTextMinus) ||
                    value.email.toLocaleLowerCase().includes(searchTextMinus) ||
                    value.username.toLocaleLowerCase().includes(searchTextMinus)
                )
            );

            setResults(filterData);
        }
    }

    return(
        <div className= {`search ${isAtTop ? "search--top" : "search--center"} `}>
            {/* cuando vayas a pasar una propiedad que sea un evento que agregar prefijo "on" */}
           <SearchBox 
                onSearch={handleSearchClick}    
                onClose={handleCloseSearch}
                isSearching={isAtTop}/>
           <SearchResults 
                results={results} 
                isSearching={isAtTop}/>
        </div>
    );
}

export default Search;