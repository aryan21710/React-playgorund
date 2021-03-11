import React, { useState, useEffect, useRef } from 'react';

export const FormWithHooks = () => {
	const myRef = useRef();
	const [myTodo, setMyToDo] = useState([]);
	const [copy, setCopy] = useState([]);
	const [inputVal, setInputVal] = useState('');
	const onChangeHandler = e => setInputVal(e.target.value);
	const [searchedVal, setSearchedVal] = useState('');
	const onSearchHandler = e => setSearchedVal(e.target.value);

	useEffect(
		() => {
			showFilteredTodoOnly();
		},
		[searchedVal]
	);

	const showFilteredTodoOnly = () => {
		if (searchedVal.length > 0) {
			const filteredToDo = myTodo.filter(todo => todo.includes(searchedVal));
			setMyToDo([...filteredToDo]);
		} else {
			setMyToDo([...copy]);
		}
	};

	const onDeleteHandler = index => e => {
		const filteredToDo = myTodo.filter((_, idx) => idx !== Number(index));
		console.log('filteredToDo', filteredToDo);
		setMyToDo([...filteredToDo]);
		setCopy([...filteredToDo]);
	};

	const onClickHandler = () => {
		if (inputVal.length > 0) {
			setMyToDo([...myTodo, inputVal]);
			setCopy([...copy, inputVal]);
			setInputVal('');
		}
	};

	return (
		<React.Fragment>
			<main style={styles.main}>
				<section style={styles.addSection}>
					<input
						style={styles.input}
						value={inputVal}
						ref={myRef}
						type="text"
						onChange={onChangeHandler}
						placeholder="Enter TODO"
					/>
					<button disabled={inputVal.length === 0} onClick={onClickHandler}>
						+
					</button>
				</section>
				<React.Fragment>
					<h1>TODO LIST</h1>
					<input
						type="text"
						value={searchedVal}
						onChange={onSearchHandler}
						disabled={myTodo.length === 0}
						placeholder="SEARCH"
					/>
					<section style={styles.displaySection}>
						{myTodo.map((_, idx) =>
							<div key={idx}>
								{`${idx + 1}] ${_}`}
								<button onClick={onDeleteHandler(idx)} style={styles.delete}>
									Delete
								</button>
							</div>
						)}
					</section>
				</React.Fragment>
			</main>
		</React.Fragment>
	);
};

const styles = {
	main: {
		padding: '5vh 0vw',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100vw',
		height: '100vh',
		border: '2px solid black',
	},
	addSection: {
		padding: '2vh 0vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '40vw',
	},

	displaySection: {
		padding: '2vh 0vw',
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},

	input: {
		width: '60%',
	},

	delete: {
		marginLeft: '1vw',
	},
};

/*

import React, { useState, useEffect, useRef, useContext } from 'react';


const MyContext=React.createContext();
export const FormWithHooks = () => {
	const myRef = useRef();
	const [myTodo, setMyToDo] = useState([]);
	const [copy, setCopy] = useState([]);

	const AddSection = () => {
        const { myTodo, setCopy, setMyToDo, copy }=useContext(MyContext)

		const [inputVal, setInputVal] = useState('');
		const onChangeHandler = e => setInputVal(e.target.value);

		const onClickHandler = () => {
			if (inputVal.length > 0) {
				setMyToDo([...myTodo, inputVal]);
				setCopy([...copy, inputVal]);
				setInputVal('');
			}
		};
		return (
			<section style={styles.addSection}>
				<input
					style={styles.input}
					value={inputVal}
					ref={myRef}
					type="text"
					onChange={onChangeHandler}
					placeholder="Enter TODO"
				/>
				<button disabled={inputVal.length === 0} onClick={onClickHandler}>
					+
				</button>
			</section>
		);
	};

	const DisplaySection = () => {

        const { myTodo, setCopy, setMyToDo, copy }=useContext(MyContext)
		const [searchedVal, setSearchedVal] = useState('');
		const onSearchHandler = e => setSearchedVal(e.target.value);

		useEffect(
			() => {
				searchedVal.length > 0 && showFilteredTodoOnly();
			},
			[searchedVal]
		);

		const showFilteredTodoOnly = () => {
                const filteredToDo = myTodo.filter(todo => todo.includes(searchedVal));
                setSearchedVal(searchedVal);
                setMyToDo([...filteredToDo]);
		};

		const onDeleteHandler = index => e => {
			const filteredToDo = myTodo.filter((_, idx) => idx !== Number(index));
			console.log('filteredToDo', filteredToDo);
			setMyToDo([...filteredToDo]);
			setCopy([...filteredToDo]);
		};

		return (
			<React.Fragment>
				<h1>TODO LIST</h1>
				<input
					type="text"
					value={searchedVal}
					onChange={onSearchHandler}
					disabled={myTodo.length === 0}
					placeholder="SEARCH"
				/>
				<section style={styles.displaySection}>
					{myTodo.map((_, idx) =>
						<div key={idx}>
							{`${idx + 1}] ${_}`}
							<button onClick={onDeleteHandler(idx)} style={styles.delete}>
								Delete
							</button>
						</div>
					)}
				</section>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<main style={styles.main}>
				<MyContext.Provider value={{myTodo, setCopy, setMyToDo, copy}}>
                    <AddSection />
                    <DisplaySection/>
				</MyContext.Provider>
			</main>
		</React.Fragment>
	);
};

const styles = {
	main: {
		padding: '5vh 0vw',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100vw',
		height: '100vh',
		border: '2px solid black',
	},
	addSection: {
		padding: '2vh 0vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '40vw',
	},

	displaySection: {
		padding: '2vh 0vw',
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},

	input: {
		width: '60%',
	},

	delete: {
		marginLeft: '1vw',
	},
};


*/
