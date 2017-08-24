import {connect} from 'react-redux';

import {updateCurrent, addTodo, loadTodos} from '../actions/index';
import TodoForm from '../components/TodoForm';

const mapStateToProps = (state, ownProps) => ({currentTodo: state.currentTodo});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (text) => dispatch(updateCurrent(text)),
    onClick: () => dispatch(addTodo()),
    onClickLoad: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
    