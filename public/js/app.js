'use strict';

var items = [
  // { id: 1, title: 'read react book 1', status: 'open' },
  // { id: 2, title: 'read react book 2', status: 'open' },
  // { id: 3, title: 'read react book 3', status: 'open' },
  // { id: 4, title: 'read react book 4', status: 'open' },
  // { id: 5, title: 'read react book 5', status: 'open' }
];

var markItemComplete = function markItemComplete(itemToRemove) {
  // remove the item from item array

  // 1st way
  /* for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (item.id == itemToRemove.id) {
      // found the item to be deleted
      items.splice(index, 1)
      break
    }
  } */

  // 2nd way
  items = items.filter(function (item) {
    return item.id != itemToRemove.id;
  });
  render();
};

var addItem = function addItem(e) {
  // console.log(e);
  var title = e.target.elements.itemtext.value;
  items.push({
    id: items.length + 1,
    title: title,
    status: 'open'
    // title : title,
  });

  // clear the input
  e.target.elements.itemtext.value = '';
  e.preventDefault();
  render();
};

var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'title' },
      React.createElement(
        'h2',
        null,
        'ToDo App'
      ),
      React.createElement(
        'p',
        null,
        'what do you want to do today ?'
      )
    ),
    React.createElement(
      'div',
      { className: 'add-todo' },
      React.createElement(
        'form',
        { onSubmit: addItem },
        React.createElement(
          'div',
          { className: 'input-group mb-3' },
          React.createElement('textarea', {
            className: 'form-control',
            name: 'itemtext',
            row: '3',
            placeholder: 'enter your todo item here' }),
          React.createElement(
            'button',
            {
              className: 'btn btn-success',
              type: 'submit',
              id: 'button-addon2' },
            'Add'
          )
        )
      )
    ),
    items.length > 0 && React.createElement(
      'div',
      { className: 'item-list' },
      items.map(function (item) {
        return React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'div',
            { className: 'input-group mb-3' },
            React.createElement('input', {
              readOnly: true,
              type: 'text',
              className: 'form-control',
              value: item.title }),
            React.createElement(
              'button',
              {
                onClick: function onClick() {
                  markItemComplete(item);
                },
                className: 'btn btn-danger',
                type: 'button',
                id: 'button-addon2' },
              'Complete'
            )
          )
        );
      })
    ),
    React.createElement(
      'div',
      { className: 'footer' },
      React.createElement(
        'p',
        null,
        'copyright to Jayesh Gangurde'
      )
    )
  );
  ReactDOM.render(template, document.getElementById('app'));
};

render();
