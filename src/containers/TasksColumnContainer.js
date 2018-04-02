import { connect } from 'react-redux';
import TasksColumn from '../components/tasks-colum/TasksColumn';
import { moveTaskToAnotherColumn } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
    tasks: state.tasks.filter( task => task.columnId === ownProps.columnId ),
    title: ownProps.title,
    creatingTasksEnabled: ownProps.creatingTasksEnabled,
    onDragOver: e => e.preventDefault()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDrop: e => dispatch(moveTaskToAnotherColumn(e.dataTransfer.getData("text"), ownProps.columnId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksColumn);