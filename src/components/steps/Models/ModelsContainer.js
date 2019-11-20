import {connect} from 'react-redux';
import Models from './Models';


const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mapStatetoProps = (state) => {
    return {
        models: state.products.models
    }
}

const ModelsContainer = connect(mapStatetoProps, mapDispatchToProps)(Models);

export default ModelsContainer