import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
	const initialState = [
		{id:0, value:0, name:'Ненужная вещь', price:'200'}, 
		{id:1, value:4, name:'Ложка'}, 
		{id:2, value:1, name:'Вилка' },
		{id:3, value:1, name:'Тарелка' },
		{id:4, value:1, name:'Набор туриста' },
	];
	const [counters, setCounters] = useState(initialState);

	const handleDelete = (id) => {
		const newCounters = counters.filter((c) => c.id !== id);
		setCounters(newCounters);
	};

	const handleReset = () => {
		setCounters(initialState);
	}

	return ( 
	< >
		{counters.map((count) => (<Counter 
		key={count.id} 
		// id={count.id} 
		// value={count.value} 
		// name={count.name}   
		onDelete={handleDelete}
		{...count} 
		 />))}
		 <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>reset</button>
	</>)
}
export default CountersList;