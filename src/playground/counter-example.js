class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidUpdate (prevProps, prevState) {
        if(prevState.count != this.state.count) {
            localStorage.setItem('count',this.state.count);
        }
    }
    componentDidMount () {
        const count = parseInt(localStorage.getItem('count'),10);
        if(!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
//
// const addOne = () => {
//     count++;
//     reload();
// };
// const subOne = () => {
//     count--;
//     reload();
// }
// const reset = () => {
//     count = 0;
//     reload();
// }
//
// const reload = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//
//     const appRoot = document.getElementById('app');
//
//     ReactDOM.render(templateThree, appRoot);
// }
//
// reload();