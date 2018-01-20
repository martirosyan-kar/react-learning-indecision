import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    handleAddOptions = (option) => {
        if(!option) {
            return 'empty';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'exist'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));

    };
    handlePick = () => {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({
                selectedOption: option
            })
        );
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
            };
        });
    };

    handleCloseModal = (selectedOption) => {
        this.setState(() => (
            {
                selectedOption: undefined
            }
        ));
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
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of computer";

        return (
            <div>
                <div className="container">
                    <Header title={title} subTitle={subTitle}/>
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOptions={this.handleAddOptions} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}