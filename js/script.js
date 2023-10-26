
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
            underMinChars: false,

        }
    },

    methods: {

        addTask() {

            // Check String Length (better way using array functions is possible)
            let stringLength = 0
            for (charNum in this.newTaskName) { 
                if (this.newTaskName[charNum] != " ") { 
                    stringLength++ 
                } }

            // If valid, push to array
            if (this.newTaskName && stringLength >= 5) {

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