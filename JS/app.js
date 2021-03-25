
let todoList = [
{
    todo: "clone repo for starter code",
    status: "started"
},
{
    todo: "clone repo for starter code",
    status: "completed"
},
{
    todo: "interate over a loop",
    status: "started"

},
{
    todo: "iterate over a loop",
    status: "completed"
}
]
let completedTodos = []

function todo() {
    for (let obj of todoList) {
        if (obj.status==='complete') {
            completedTodos.push(obj)
        }
    }
    for (let obj of completedTodos) {
        let {todo}=obj
        console.log(todo)
    }
}
todo()