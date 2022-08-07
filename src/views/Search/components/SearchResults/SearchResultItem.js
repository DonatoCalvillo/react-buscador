const SearchResultItem = ({name, email}) =>{
    return(
        <div className = "results-data">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default SearchResultItem;