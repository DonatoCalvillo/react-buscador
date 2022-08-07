import SearchResultItem from "./SearchResultItem";
import "./style.css";

const SearchResults = ({results,isSearching}) =>{
    return (
        <div className="results-panel">
            {!results.length && isSearching && <p>No existen resultados</p> }
            {results?.map((value) => <SearchResultItem 
                key={value.id}
                name={value.name}
                email={value.email}/>
            )}
        </div>
    );
}

export default SearchResults;