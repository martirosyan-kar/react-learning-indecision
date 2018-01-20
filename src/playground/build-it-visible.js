class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Build It</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide text': 'Show text' }</button>
                {
                    this.state.visibility &&
                    <div>Here is my text</div>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*
let state = true;
let text = 'Show text';

const toggled = () => {
    state = !state;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Build It</h1>
            <button onClick={toggled}>{state ? 'Show text' : 'Hide text'}</button>
            <div hidden={state}>Here is my text</div>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();*/
