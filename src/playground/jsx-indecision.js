console.log('App.js is running!');

const app = {
    title: "My App Name",
    subTitle: "New paragraph",
    options: []
};
// JSX - JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const option = app.options[Math.floor(Math.random() * app.options.length)];
    alert(option);
};
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};


render();

