import React, { Component } from 'react';

class ShoppingList extends React.Component{
	render(){
		return(
			<div className="shoppingListMain">
				<div className="header">
					<form>
						<input placeholder="enter shopping list...">
						</input>
						<button type='submit'>
							Add
						</button>
					</form>
				</div>
			</div>
		);
	}
};

export default ShoppingList;