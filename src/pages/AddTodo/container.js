import { connect } from "react-redux";
import AddTodo from "./index";
import { addTodo, searchTodo } from "../../actions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch => ({
  actions: {
    addTodo: bindActionCreators(addTodo, dispatch),
    searchTodo: bindActionCreators(searchTodo, dispatch)
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
