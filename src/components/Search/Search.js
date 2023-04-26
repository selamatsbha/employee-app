import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Search ({ setInputValue, handleSearch }) {

    const handleInputChange = (event) => {
       setInputValue(event.target.value);
    }

    return (
       <div style = {StyledSearch}>
            <input type = "text" style = {{ flexGrow: 3 }} onChange={handleInputChange} />
            <FontAwesomeIcon icon = {faSearch} onClick={handleSearch} />
       </div>    
    );
}

const StyledSearch = {
    width: "100%",
    display: "flex",
    gap: "5px", 
};

export default Search;