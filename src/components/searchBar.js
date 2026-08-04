import React from 'react';
const SearchBar = ({SearchChange})=>{
return(
 <input className="bg-light-blue  b--blue pa2 br3"
 	type="search" 
 	placeholder="Search robots..." 
 	onChange={SearchChange}
 />
);
}
export default SearchBar;