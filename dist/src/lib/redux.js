"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.reducer = exports.pinTask = exports.archiveTask = exports.actions = void 0;

var _redux = require("redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// The actions are the "names" of the changes that can happen to the store
var actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK"
}; // The action creators bundle actions with the data required to execute them

exports.actions = actions;

var archiveTask = function archiveTask(id) {
  return {
    type: actions.ARCHIVE_TASK,
    id: id
  };
};

exports.archiveTask = archiveTask;

var pinTask = function pinTask(id) {
  return {
    type: actions.PIN_TASK,
    id: id
  };
}; // All our reducers simply change the state of a single task.


exports.pinTask = pinTask;

function taskStateReducer(taskState) {
  return function (state, action) {
    return _objectSpread({}, state, {
      tasks: state.task.map(function (task) {
        return task.id === action.id ? _objectSpread({}, task, {
          state: taskState
        }) : task;
      })
    });
  };
} // The reducer describes how the contents of the store change for each action


var reducer = function reducer(state, action) {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);

    case actions.PIN_TASK:
      return taskStateReducer("PIN_TASK")(state, action);

    default:
      return state;
  }
}; // INITIAL STATES


exports.reducer = reducer;
var defaultTasks = [{
  id: '1',
  title: 'Something',
  state: 'TASK_INBOX'
}, {
  id: '2',
  title: 'Something more',
  state: 'TASK_INBOX'
}, {
  id: '3',
  title: 'Something else',
  state: 'TASK_INBOX'
}, {
  id: '4',
  title: 'Something again',
  state: 'TASK_INBOX'
}];

var _default = (0, _redux.createStore)(reducer, {
  tasks: defaultTasks
});

exports.default = _default;

//# sourceMappingURL=redux.js.map