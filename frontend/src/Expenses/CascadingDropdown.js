import React, { useState } from 'react';
import Select from "react-select";
import ExpensesTable from './ExpensesTable';
import data from './expenseData.json';

class CascadingDropdown extends React.Component {
  activeUser = this.props.currentUser
  constructor(props) {
    super(props);
    this.state = {
      filterCategory: "",
      filterValue: "",
      valueList: []
    };
    this.updateTable = React.createRef();
    this.sendToTable = this.sendToTable.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.buttonPress = this.buttonPress.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  };

  handleFilterChange(event) {
    if (event.category == "Payment Method") {
    console.log(this.props.cardList);
    this.setState({
      filterCategory: event,
      filterValue: "",
      valueList: this.props.cardList,
    })}
    else {
      console.log(event.values);
      this.setState({
        filterCategory: event,
        filterValue: "",
        valueList: event.values,
      })
    };
  };

  handleValueChange(event) {
      var saveState = this.state
      saveState.filterValue = event
      this.setState(saveState)
    ;
  };

  sendToTable() {
    this.updateTable.current.getTable()
  }

  buttonPress() {
    if (this.state.filterCategory.category == 'Payment Category') {
      this.updateTable.current.category(this.state.filterValue.cardName)
    } else if (this.state.filterCategory.category == 'Payment Method') {
      this.updateTable.current.cardFilter(this.state.filterValue.cardName)
    } else if (this.state.filterCategory.category == 'Month') {
      this.updateTable.current.month(this.state.filterValue.cardName)
    }
  };

  clearFilter() {
    this.updateTable.current.getTable()
    this.setState({
      filterCategory: "",
      filterValue: "",
      valueList: ""
    });
  };

  render() {
    return (
      <>
        <div class="row">
          <div className="col-4">
            <Select
              placeholder="Filter by..."
              value={this.state.filterCategory}
              options={data}
              onChange={this.handleFilterChange}
              getOptionLabel={x => x.category}
            />
          </div>
          <div className="col-4">
            <Select
              placeholder="Filter options..."
              value={this.state.filterValue}
              options={this.state.valueList}
              onChange={this.handleValueChange}
              getOptionLabel={x => x.cardName}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary" onClick={this.buttonPress}>Filter</button>
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={this.clearFilter}>Clear Filter</button>
          </div>
        </div>

        <div className="row mt-2 justify-content-evenly">
          <ExpensesTable currentUser={this.activeUser} ref={this.updateTable} />
        </div>
      </>
    );
  }
};



export default CascadingDropdown;