import ExpenseItem from "./ExpenseItem";
function ExpensesList(props){
 return(
    props.map(()=>{
        <ExpenseItem name={expenses[0].name} date={expenses[0].expensedate} amount={expenses[0].amount}></ExpenseItem>
    })
 )
}

export default ExpensesList;