import { connect } from 'react-redux';
import Task from '../components/task/Task';
import { COLUMNS_IDS } from '../business-config/columnsConfig'

const mapStateToProps = (state, ownProps) => {
    const task = ownProps.task;

    return {
        title: task.title,
        text: task.text,
        isDone: task.columnId === COLUMNS_IDS.DONE,
        onDrag: (e) => {
            e.dataTransfer.setData("text", task.id.toString());
        }
    };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);