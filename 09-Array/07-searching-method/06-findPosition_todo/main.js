const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

function updateTask(id, newName) {
    const newTasks = task.slice(0)
    let foundIndex = newTasks.findIndex(item => item.id == id)
}

if (foundIndex !== -1) {
    newTasks.splice(foundIndex, 1, { id: id, name: newName })
}
return newTasks

 newTodo = updateTask(2,"Football")
console,log(new)