import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(){

return(
<div className="expense-form">

<h2>Add Toll Expense</h2>

<input placeholder="Location"/>
<input placeholder="Amount"/>

<button>Add Expense</button>

</div>
)

}

export default ExpenseForm;
