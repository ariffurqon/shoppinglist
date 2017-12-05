import React, { Component } from 'react';

class ShopItems extends React.Component {
	constructor(props, context) {
	    super(props, context);
	 
	    this.createTasks = this.createTasks.bind(this);
	  }
	 
	  createTasks(item) {
	    return <li key={item.key}>{item.text}</li>
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