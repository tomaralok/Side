const tasks = [
    {
        id: 'Task_1',
        name: 'View my ID CARD Image',
        start: '2014-03-05 15:30:00',
        end: '2014-04-29 16:30:00',
        progress: 100,
        dependencies: '',
    },
    {
        id: 'Task_2',
        name: 'UI for(Feature)',
        start: '2014-03-10 15:30:00',
        end: '2014-03-15 16:30:00',
        progress: 10,
        dependencies: '',
    },
    {
        id: 'Task_3',
        name: 'hAPI1 (name) for (Feature)',
        start: '2014-03-10 15:30:00',
        end: '2014-03-20 16:30:00',
        progress: 0,
        dependencies: '',
    },
    {
        id: 'Task_4',
        name: '90 Day - Gatekeeper',
        start: '2014-12-09 15:30:00',
        end: '2015-01-20 16:30:00',
        progress: 0,
        dependencies: '',
    },
    {
        id: 'Task_5',
        name: '33452',
        start: '2014-03-10 15:30:00',
        end: '2014-03-20 16:30:00',
        progress: 23,
        dependencies: '',
    },
    {
        id: 'Task_6',
        name: 'Data Lake Sprint Zero Template Master',
        start: '2014-03-10 15:30:00',
        end: '2014-03-20 16:30:00',
        progress: 0,
        dependencies: '',
    },
    {
        id: 'Task_7',
        name: 'ODM Sprint Zero Template MASTER',
        start: '2014-03-10 15:30:00',
        end: '2014-03-20 16:30:00',
        progress: 0,
        dependencies: '',
    }
];

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
        right: false,
    },
    {
        name: 'Start',
        selector: 'start',
        sortable: true,
        right: false,
    },
    {
        name: 'End',
        selector: 'end',
        sortable: true,
        right: false,
    },
    {
        name: 'Progress',
        selector: 'progress',
        sortable: true,
        right: false,
    }
];

export {
    tasks,
    columns
}