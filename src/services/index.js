const getData = (data) => {
    let db = JSON.parse(window.localStorage.getItem(data))
    if (db === null) return []
    else return db
}

const setData = (data) => {
    window.localStorage.setItem('trello', JSON.stringify(data))
}

/************
  ** CRUD
*************/

export const addTask = (title, text, listId) => {
    const tasksDB = getData('trello')
  const task = {
    id: Date.now(), title, text, listId
  }
    tasksDB.push(task)
    setData(tasksDB)
}

export const readTask = (id) => {
    const tasksDB = getData('trello')
    let index = tasksDB.findIndex(todo => todo.id === id)
    return tasksDB[index]
}

export const editTask = (id, title, text) => {
    const tasksDB = getData('trello')
    let index = tasksDB.findIndex(todo => todo.id === id)
    tasksDB[index].title = title
    tasksDB[index].text = text
    setData(tasksDB)
}

export const deleteTask = id => {
    const tasksDB = getData('trello')
    const newtasksDB = tasksDB.filter(todo => todo.id !== id)
    setData(newtasksDB)
}

export const changeStateTask = (id, listId) => {
    const tasksDB = getData('trello')
    let index = tasksDB.findIndex(todo => todo.id === id)
    tasksDB[index].listId = listId
    setData(tasksDB)        
}

export const readTasks = () => {
    return getData('trello')
}
