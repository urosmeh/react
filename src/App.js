import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData";

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoggedIn: true
//         }
//     }

//     render() {
//         let inOut;
//         if(this.state.isLoggedIn === true){
//             inOut = "in";
//         }
//         else{
//             inOut = "out"
//         }
//         return (
//             <div>
//                 <p>You are currently logged {inOut}</p>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             name: "uros",
//             age: "22"
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age}</h3>
//             </div>
//         )
//     }
// }
// function App() {
//     const todoItemComponents = todoItems.map(item => {
//         return <TodoItem todoItem={item}/>
//     })
//     return (
//         <div className="todo-list">
//             {/* <ContactCard contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }} />
//             <ContactCard contact={{ name: "Mr. cat", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-1234", email: "iskaz@catnap.abas" }} />
//             <ContactCard contact={{ name: "Mr. big cat", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-1234", email: "mr@neki.sss" }} />
//             <ContactCard contact={{ name: "Mr. small cat", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-1234", email: "asda@meow.com" }} /> */}
//             {todoItemComponents}
//         </div>
//     )
// }

// class App extends React.Component {
//     render(){
//         const todoItemComponents = todoItems.map(item => {
//             return <TodoItem todoItem={item}/>
//         });
//         return(
//         <div className="todo-list">
//             {todoItemComponents}
//         </div>
//         );
//     }
// } 

// function mouseOverImage() {
//     var image = document.getElementById("image");
//     image.style.borderRadius = "10%";
// }


/*class App extends React.Component {
    constructor() {
        super(); 
        this.state = {
            loggedIn: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return (
                {loggedIn: !prevState.loggedIn}
            )
        })
    }

    render() {
        return(
            this.state.loggedIn ? <div><p>Logged in</p><button onClick={this.handleClick}>Log out</button></div> : <div><p>Logged out</p><button onClick={this.handleClick}>Log in</button></div>
        ) 
    }
}*/
/*class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdd10 = this.handleClickAdd10.bind(this);
    }

    handleClick() {
        this.setState(previousState => {
            return(
                {count: previousState.count + 1} 
            )
        })
    }

    handleClickAdd10(){
        this.setState(previousState => {
            return(
                {count: previousState.count + 10}
            )
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={this.handleClickAdd10}>Click me 10</button>
            </div>
        )
    }
}*/


//LAST>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todos: todosData
//         }

//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(id) {
//         //console.log("changed", id);
//         this.setState(previousState => {
//             const newTodos = previousState.todos.map(newItem => {
//                 if (newItem.id === id) {
//                     //newItem.completed = !newItem.completed;
//                     return {
//                         ...newItem,
//                         completed: !newItem.completed
//                     }
//                 }

//                 return newItem;
//             })
//             return {
//                 todos: newTodos
//             }
//         })
//     }

//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item} />)

//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }

/*class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}*/

// var date = new Date()
// var greeting;
// const style = {
//     color: "red"
// };
// if(date.getMinutes() % 2 === 0)
// {
//     greeting = "morning";
//     style.backgroundColor = "red";
// }
// else
// {
//     greeting = "afternoon";
//     style.backgroundColor = "green";
// }
// function App() {
//     return (
//     <div><h1 style={style}>good {greeting}</h1></div>
//     )
// }


//API LAST  
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoading: false,
//             weather: {}
//         }
//     }

//     componentDidMount() {
//         this.setState({
//                 isLoading:true
//             }
//         );
        
//         fetch("http://api.openweathermap.org/data/2.5/weather?q=velenje&appid=25fdbc3c5c523980eff7adf44d54a151")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     weather:data,
//                     isLoading: false
//                 })
//             });
//     }

//     render(){
//         return (
//             <div>
//                 {this.state.isLoading ? <p>Loading ... </p> : this.state.weather.name}
//             </div>
//         )
//     }
// }

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: 15,
            gender: "",
            travelLocation: "",
            dietaryRestriction:  {
                isVegan: false,
                isVegeterian: false,
                isLactoseFree: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? 
            this.setState(prevState => {
                    return{
                        dietaryRestriction: {
                            ...prevState.dietaryRestriction,
                            [name]: checked
                        }
                    }
                })
            : 
            this.setState({
                [name]: value
            });
        // this.setState({
        //     [name]: value
        // });
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.firstName} name="firstName" placeholder="First name" onChange={this.handleChange}></input>
                    <br>
                    </br>
                    <input type="text" value={this.state.lastName} name="lastName" placeholder="Last name" onChange={this.handleChange}></input>
                    <br/>
                    <input type="number" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}></input>
                    <br/>

                    <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={this.state.gender === "male"}/>Male <br/>
                    <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === "female"}/>Female
                    <br/>

                    <select value={this.state.travelLocation} onChange={this.handleChange} name="travelLocation">
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                        <option value="LA">LA</option>
                        <option value="NY">NY</option>
                    </select>

                    <br></br>
                    isFriendly

                    <input 
                        type="checkbox" 
                        name="isVegan"
                        checked={this.state.dietaryRestriction.isVegan} 
                        onChange={this.handleChange}>
                    </input>
                    <input 
                        type="checkbox" 
                        name="isVegeterian"
                        checked={this.state.dietaryRestriction.isVegeterian} 
                        onChange={this.handleChange}>
                    </input>
                    <input 
                        type="checkbox" 
                        name="isLactoseFree"
                        checked={this.state.dietaryRestriction.isLactoseFree} 
                        onChange={this.handleChange}>
                    </input>
                    <button></button>
                </form>

                <hr>
                </hr>

                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Destination: {this.state.travelLocation}</p>
                
                <p>Dietary restrictions: </p>
                
            </div>
        )
    }
}

export default App