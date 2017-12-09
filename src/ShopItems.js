import React, { Component } from 'react';

class ShopItems extends React.Component {
	constructor(props, context) {
	    super(props, context);
	 
	    this.createTasks = this.createTasks.bind(this);
	    this.delete = this.delete.bind(this);
	  }

	  delete(key) {
	      this.props.delete(key);
	    }
	 
	  createTasks(item) {
	    return <li onClick={(e) => this.delete(item.key, e)} 
	    				key={item.key}>{item.text}</li>
	  }
	 
	  render() {
	    var shopEntries = this.props.entries;
	    var listItems = shopEntries.map(this.createTasks);
	 
	    return (
	      <ul className="theList">
	          {listItems}
	      </ul>
	    );
	  }

};

export default ShopItems;