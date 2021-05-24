import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    const [value, setValue] = React.useState("Search")
    return (
        <nav className="nav-top">
            <input type="text" value={value} className="nav-top-search" onChange={e => setValue(e.target.value)} />
            <SearchIcon  className="nav-search-icon"/>
        </nav>
    )
}

export default SearchBar
