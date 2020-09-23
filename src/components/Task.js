import React from "react"
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, OnPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === "TASK_ARCHIVED"}
                    disabled={true}
                    name="checked"
                />
                <span className="custom-checkbox" onClick={() => onArchiveTask(id)} />
            </label>

            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== "TASK_ARCHIVED" && (
                    <a href="#" onClick={() => OnPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>

        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    OnPinTask: PropTypes.func,
}