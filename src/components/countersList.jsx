import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
	const initialState = [
		{id:0, value:0, name:'Ненужная вещь', price:'200'}, 
		{id:1, value:0, name:'Ложка'}, 
		{id:2, value:0, name:'Вилка' },
		{id:3, value:0, name:'Тарелка' },
		{id:4, value:0, name:'Набор туриста' },
	];

	
	const [counters, setCounters] = useState(initialState);

	const handleDelete = (id) => {
		const newCounters = counters.filter((c) => c.id !== id);
		// console.log(newCounters)
		setCounters(newCounters);
	};

	const updateValue = (id, number) => {
			const newValue = counters.map((el) => {
				if (el.id === id) el.value +=number;
				return el
			})
			setCounters(newValue);
			
			
		}
	

	const handleReset = () => {
		setCounters(initialState);
	};

	const Increment = (id) => updateValue(id, +1)
    const Decrement = (id) => updateValue(id, -1)

	const handleUpdate = () => {
		const updatedState = [
			{id:0, value:1, name:'Ненужная вещь', price:'200'}, 
			{id:1, value:2, name:'Ложка'}, 
			{id:2, value:3, name:'Вилка' },
			{id:3, value:4, name:'Тарелка' },
			{id:4, value:0, name:'Набор туриста' },
		];
		setCounters(updatedState);
	}


	return ( 
	< >
		{counters.map((count) => (<Counter 
		key={count.id} 
		// id={count.id} 
		// value={count.value} 
		// name={count.name}   
		onDelete={handleDelete}
		onHandleIncrement={Increment}
		onHandleDecrement={Decrement}
		{...count} />))}
		 <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>reset</button>
		 <button className="btn btn-danger btn-sm m-2" onClick={handleUpdate}>update</button>
	</>)
}
export default CountersList;