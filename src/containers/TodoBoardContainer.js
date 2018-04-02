import { connect } from 'react-redux';
import TodoBoard from '../components/todo-board/TodoBoard';

const mapStateToProps = state => ({
    columns: state.columns
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoard);