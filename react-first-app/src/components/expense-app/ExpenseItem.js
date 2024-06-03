import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 10, 14);
    const expenseName = "Groceries";
    const expenseAmount = 2000;

    return (
        <div className="expense-item">
            <div className="expense-item__date">{expenseDate.toLocaleDateString()}</div>
            <div className="expense-item__name">{expenseName}</div>
            <div className="expense-item__amount">{expenseAmount} HUF</div>
        </div>
    );
}

export default ExpenseItem;