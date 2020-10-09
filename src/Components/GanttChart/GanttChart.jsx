import React, { useState } from "react";
import moment from "moment";
import { FrappeGantt } from "frappe-gantt-react";



function taskClickHandler(task) {
    console.log(JSON.stringify(task));
}

function taskDateChangeHandler(state, selectedTask, start, end) {
    let localStartTime  = moment.utc(start).toDate();
    localStartTime = moment(localStartTime).format('YYYY-MM-DD HH:mm:ss');
    let localEndTime  = moment.utc(end).toDate();
    localEndTime = moment(localEndTime).format('YYYY-MM-DD HH:mm:ss');

    state.tasks.forEach(task => {
        if (task.id === selectedTask.id) {
            task.start = localStartTime;
            task.end = localEndTime;
        }
    });

    state.setTasks(state.tasks);
}

function taskProgressChangeHandler(state, task, progress) {
    state.tasks.forEach(t => {
        if(t.id === task.id) {
            t.progress = progress
        }
    });
    state.setTasks(state.tasks);
}

const GanttChart = React.forwardRef((props, ref) => {
    const [tasks, setTasks] = useState(props.tasks);
    if (props.tasks !== undefined && props.tasks.length > 0) {
        return (
            <FrappeGantt
                tasks={tasks}
                viewMode={props.mode}
                ref={ref}
                onClick={task => taskClickHandler(task)}
                onDateChange={(task, start, end) => taskDateChangeHandler({tasks, setTasks}, task, start, end)}
                onProgressChange={(task, progress)=> taskProgressChangeHandler({tasks, setTasks}, task, progress)}
                onTasksChange={tasks => { console.log(tasks); }}
            />
        );
    }
});

export default GanttChart;