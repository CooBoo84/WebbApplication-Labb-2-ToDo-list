Vue.component('item', {
    template: `
        <li id="tasks">
          {{ text }}
          {{ prio }}
          <button class="gridButton" v-on:click="$emit('remove')">Remove</button>
          <button class="gridButton" v-on:click="$emit('prio')">Priority</button>
          <button class="gridButton" v-on:click="$emit('notprio')">Not priority</button>
        </li>
    `,
    props: ['text', 'date', 'prio']
})

new Vue({
    el: '#taskList',
    data: {
        newTaskText: '',
        newTaskDate: '',
        newTaskPrio: false,
        today: new Date(),
        hide: true,
        items: [
            {
                id: 1,
                text: 'Create laboration 2',
                date: '2021-04-22',
                prio: true,
                prioColor: '#F00'
            },
            {
                id: 2,
                text: 'Upload laboration 2',
                date: '2021-04-02',
                prio: false,
                prioColor: '#000'
            }
        ],
        nextTaskId: 3
    },
    methods: {
        addTask: function () {
            this.items.push({
                id: this.nextTaskId++,
                text: this.newTaskText,
                date: this.newTaskDate.toString(),
                prio: false,
                prioColor: '#000'
            })
            this.newTaskText = ''
            this.newTaskDate = ''
            this.newTaskPrio = false
        },
        prio: function () {
            if(this.hide){
                this.hide = false
            } else{
                this.hide = true
            }
        },
        sortedArray: function() {
                    function compare(a, b) {
                        if (a.date < b.date)
                            return -1;
                        if (a.date > b.date)
                            return 1;
                        return 0;
                    }
                    return this.items.sort(compare);
        },
    }
})