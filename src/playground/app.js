class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidUpdate (prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentDidMount () {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {

        }
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }
    handleAddOptions(option) {
        if(!option) {
            return 'empty';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'exist'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));

    }
    handlePick() {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(option);
    }
    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
            };
        });
    }
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOptions={this.handleAddOptions} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
};

const Action = (props) => {
    return (
        <div>
            {
                <button
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >What should I do?</button>
            }
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0  && <p>No options</p>}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
                {
                    props.options.map((option) =>
                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                }
            </ol>
        </div>
    )
};

const Option = (props) => {
    return (
            <li key={props.optionText}>{props.optionText} <RemoveOption option={props.optionText} handleDeleteOption={props.handleDeleteOption} /></li>
    )
};

const RemoveOption = (props) => {
    return (
        <button onClick={() => {props.handleDeleteOption(props.option)}}>Remove</button>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));