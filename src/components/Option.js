import React from 'react';
import RemoveOption from './RemoveOption'

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text"> {props.count}. {props.optionText}</p>

            <RemoveOption
                option={props.optionText}
                handleDeleteOption={props.handleDeleteOption}
            />
        </div>
    )
};

export default Option;