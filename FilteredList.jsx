import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';  // Correct import for `Dropdown`
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  onFilter = (type) => {
    this.setState({ type });
  };

  filterItem = (item) => {
    const { search, type } = this.state;
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesType = type === "all" || item.type.toLowerCase() === type.toLowerCase();  // Added toLowerCase() for case-insensitive comparison

    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
