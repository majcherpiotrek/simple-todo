export const COLUMNS_IDS = Object.freeze({
    TO_DO: 'todo',
    IN_PROGRESS: 'inProgress',
    DONE: 'done'
})

export const columnsConfig = [
    {
        id: COLUMNS_IDS.TO_DO,
        title: 'To do',
        creatingTasksEnabled: true,
    },
    {
        id: COLUMNS_IDS.IN_PROGRESS,
        title: 'In progress',
        creatingTasksEnabled: false
    },
    {
        id: COLUMNS_IDS.DONE,
        title: 'Done',
        creatingTasksEnabled: false
    }
];