
let items = [
  // { id: 1, title: 'read react book 1', status: 'open' },
  // { id: 2, title: 'read react book 2', status: 'open' },
  // { id: 3, title: 'read react book 3', status: 'open' },
  // { id: 4, title: 'read react book 4', status: 'open' },
  // { id: 5, title: 'read react book 5', status: 'open' }
]

const markItemComplete = (itemToRemove) => {
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
  items = items.filter((item) => item.id != itemToRemove.id )
  render()
}

const addItem = (e) => {
  // console.log(e);
  const title = e.target.elements.itemtext.value
  items.push({
    id: items.length + 1,
    title,
    status: 'open',
    // title : title,
  })

  // clear the input
  e.target.elements.itemtext.value = ''
  e.preventDefault()
  render()
}

const render = () => {

  const template = (
    <div>
      <div className="title">
        <h2 >ToDo App</h2>
        <p>what do you want to do today ?</p>
      </div>

      <div className="add-todo">
        <form onSubmit={addItem}>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              name="itemtext"
              row="3"
              placeholder="enter your todo item here"></textarea>

            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2">
              Add</button>
          </div>
        </form>
      </div>


     {items.length > 0 && (
      <div className="item-list">
        {items.map((item) => {
          return (
            <div className="item">
              <div className="input-group mb-3">
                <input
                readOnly
                  type="text"
                  className="form-control"
                  value={item.title}>
                </input>
                <button
                  onClick={() => {
                    markItemComplete(item)
                  }}
                  className="btn btn-danger"
                  type="button"
                  id="button-addon2">
                  Complete
                </button>
              </div>
            </div>
          )
        })}
      </div>
      )}
      
      <div className="footer">
        <p>copyright to Jayesh Gangurde</p>
      </div>

    </div>

  )
  ReactDOM.render(template, document.getElementById('app'))
}

render()
