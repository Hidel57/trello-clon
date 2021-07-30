const getData = (key) => {
    let db = JSON.parse(window.localStorage.getItem(key))
    if (db === null) return []
    else return db
}

const setData = (data) => {
    window.localStorage.setItem('trello', JSON.stringify(data))
}

export const initData = (key, data) => {
    let db = JSON.parse(window.localStorage.getItem(key))
    if (db === null)  window.localStorage.setItem(key, JSON.stringify(data))
}

/************
  ** CRUD
*************/

export const addList = (title) => {
  const listsDB = getData('trello')
  const list = {
    id: Date.now(), title, tasks: []
  }
  listsDB.push(list)
  setData(listsDB)
}

export const addTask = (title, text, listId) => {
  const listsDB = getData('trello')
  const task = {
    id: Date.now(), title, text
  }
  const newListsDB = listsDB.map(list => {
    if (list.id === listId) {
      return {
        ...list,
        tasks: [...list.tasks, task]
      }
    } else { return list }
  })
  setData(newListsDB)
}

export const readTask = (id, listId) => {
  const listsDB = getData('trello')
  const [list] = listsDB.filter(list => list.id === listId)
  const [task] = list.tasks.filter(task => task.id === id)
  return task
}

export const editTask = (id, title, text, listId) => {
  const tasksDB = getData('trello')
  
  const newTasksDB = tasksDB.map(list => {
    if (list.id === listId) {
      const tasks = list.tasks.map(task => {
        if (task.id === id) return {
          ...task,
          title,
          text
        }
        else return task
      })
      return { ...list, tasks }
    } else {
      return list
    }
  })
  setData(newTasksDB)
}

export const deleteTask = (id, listId) => {
  const listsDB = getData('trello')
  const newListsDB = listsDB.map(list => {
    if (list.id === listId) {
      return {
        ...list,
        tasks: list.tasks.filter(task => task.id !== id)
      }
    } else { return list }
  })
  setData(newListsDB)
}

export const changeIndexTask = (droppableIdStart, droppableIndexStart, droppableIndexEnd) => {
  const tasksDB = getData('trello')
  const list = tasksDB.find(list => list.id === droppableIdStart)
  const task = list.tasks.splice(droppableIndexStart, 1)
  list.tasks.splice(droppableIndexEnd, 0, ...task)
  setData(tasksDB)
}

export const changeListTask = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd) => {
  const tasksDB = getData('trello')
  const listStart = tasksDB.find(list => list.id === droppableIdStart)
  const task = listStart.tasks.splice(droppableIndexStart, 1)
  const listEnd = tasksDB.find(list => list.id === droppableIdEnd)
  listEnd.tasks.splice(droppableIndexEnd, 0, ...task)
  setData(tasksDB)
}

export const readTasks = () => {
    return getData('trello')
}
