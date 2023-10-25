
const { createApp } = Vue

createApp({

    data() {
        return {

            tasks: [

                {
                    taskName: "Buy some chicken",
                    taskDone: false,
                },

                {
                    taskName: "Marinade chicken in lemon and mustard",
                    taskDone: false,
                },

                {
                    taskName: "Cook chicken",
                    taskDone: false,
                },

            ],

            newTaskName: "",            
            invalidFormEntry: false,

        }
    },

    methods: {

        addTask() {

            if (this.newTaskName) {    

                this.tasks.push({ taskName: this.newTaskName, taskDone: false })
                this.newTaskName = ""
                this.invalidFormEntry = false

            } else {

                this.invalidFormEntry = true
                
            }

        },

        removeTask(index) {

            this.tasks.splice(index, 1)
            console.log("task removed")
        },

        toggleTaskStatus(index) {
            this.tasks[index].taskDone = !this.tasks[index].taskDone
            
        }

    },

    mounted() {
        console.log("It's Alive!")
    }

}).mount('#app')