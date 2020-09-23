"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Task(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      OnPinTask = _ref.OnPinTask;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item ".concat(state)
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    defaultChecked: state === "TASK_ARCHIVED",
    disabled: true,
    name: "checked"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "custom-checkbox",
    onClick: function onClick() {
      return onArchiveTask(id);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: title,
    readOnly: true,
    placeholder: "Input title"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "actions",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, state !== "TASK_ARCHIVED" && /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return OnPinTask(id);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-star"
  }))));
}

Task.propTypes = {
  task: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    state: _propTypes.default.string.isRequired
  }),
  onArchiveTask: _propTypes.default.func,
  OnPinTask: _propTypes.default.func
};

//# sourceMappingURL=Task.js.map