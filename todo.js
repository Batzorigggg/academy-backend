class TodoList {
    constructor(tasks) {
        let taskArr = [];
        this.tasks = taskArr;
     
    }
    addTask(task){
        this.tasks.push(task);
    }
    removeTask(task){
        for (let i; i < this.tasks.length; i++)
            {
            if( this.tasks[i] === task) 
            {
                this.tasks[i] = 0;
            }
            }
    }
    showTasks(){
        return this.tasks;
    }
}

const todo = new TodoList();
todo.addTask("Learn JavaScript");
todo.addTask("Do homework");
todo.removeTask("Do homework");
console.log(todo.showTasks());