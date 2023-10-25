
const { createApp } = Vue

createApp({

    data() {
        return {

            tasks: [

                {
                    taskName: "Task 1",
                    taskDone: false,
                },

                {
                    taskName: "Task 2",
                    taskDone: true,
                },

                {
                    taskName: "Task 3",
                    taskDone: false,
                },

            ],

            newTask: {
                taskName:"",
                taskDone: false,
            }

        }
    },

    methods: {

        addTask(foo) {
            console.log("task added", foo)
            console.log(this.tasks)
            this.tasks.push(this.newTask)
            console.log(this.tasks)
        },

        removeTask(index) {

            this.tasks.splice(index, 1)
            console.log("task removed")
        },

    },

    mounted() {
        console.log("It's Alive!")
    }

}).mount('#app')