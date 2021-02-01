import React, {useState} from 'react';
import Select from "react-select"
import data from './expenseData.json';

function CascadingDropdown() {
        const [filterCategory, setCategory] = useState(null);
        const [filterValue, setValue] = useState(null);
        const [valueList, setValueList] = useState([]);
       
        // handle change event of the categories dropdown
        const handleCategoryChange = (obj) => {
          setCategory(obj); 
          setValueList(obj.values);
          setValue(null);
        };
       
        // handle change event of the value dropdown
        const handleValueChange = (obj) => {
          setValue(obj); 
        };
       
        return (
          <div>
            <div style={{ width: 400, marginBottom: 20 }}>
              <b>Filter categories</b>
              <Select
                placeholder="Filter by..."
                value={filterCategory}
                options={data}
                onChange={handleCategoryChange}
                getOptionLabel={x => x.category}
              />
              <b>Filter Value</b>
              <Select
                placeholder="Filter Options"
                value={filterValue}
                options={valueList}
                onChange={handleValueChange}
                getOptionLabel={x => x.name}
              />
              <br/>
              <div className="col">
                <button type="button" className="btn btn-primary">Filter</button>
                </div>
            </div>
          </div>
        );
      }


export default CascadingDropdown;