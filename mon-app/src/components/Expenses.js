import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function wow(props) {
  const expenses = [
    { id: 'aa', amount: 94.12, title: 'Playstation 2', date: new Date(2022, 6, 11) },
    { id: 'ab', amount: 799.49, title: 'Iphone 8', date: new Date(2022, 12, 12) },
    { id: 'ac', amount: 294.67, title: 'Echéance prêt', date: new Date(2021, 2, 28) },
    { id: 'ad', amount: 450, title: 'Courses', date: new Date(2021, 5, 12) },
    { id: 'ad', amount: 450, title: 'Courses', date: new Date(2021, 5, 12) },
  ];



  let z = expenses.length;
  let i = 0;
  let y = z - 1;
  for (; i < z; i++) {
    return (
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i].date}
      />);
  }

}

function Expenses(props) {



  return (
    <Card className="expenses">
      for (;;) {
if (i > y) break;
      console.log(i);
      i++;
}
    </Card>
  );
}

export default Expenses;
