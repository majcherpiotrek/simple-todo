import { connect } from 'react-redux';
import CreateTask from '../components/create-task/CreateTask';
import { createTask } from '../actions/actionCreators';
import { COLUMNS_IDS } from '../business-config/columnsConfig'

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
    onTaskCreated: (title, text, columnId) => dispatch(createTask(title, text, columnId = COLUMNS_IDS.TO_DO))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);