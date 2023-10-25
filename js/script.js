
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
            
        }
    },
    methods: {

    },
    mounted() {
        console.log("It's Alive!")
    }
}).mount('#app')