import React from 'react';

const RemoveOption = (props) => (
    <button
        className="button button--link"
        onClick={() => {
            props.handleDeleteOption(props.option)
        }}
    >
        Remove
    </button>
);

export default RemoveOption;