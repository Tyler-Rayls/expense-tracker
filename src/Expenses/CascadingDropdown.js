import React from "react";

const CascadingDropdown = () => {
    return (<div>
<form name="form1" id="form1">
Filter by: <select name="category" id="category">
  <option value="" selected="selected">Select filter</option>
</select>
<br/>
Filter options: <select name="options" id="options">
  <option value="" selected="selected">Select a filter category first</option>
</select>
<br></br>
<input type="submit" value="Filter"/>
</form></div>
    )
}

export default CascadingDropdown;