
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
    for (obj of todolist) {
        if (obj.status==='complete') {
            completedTodos.push(obj);
        }
    }

}