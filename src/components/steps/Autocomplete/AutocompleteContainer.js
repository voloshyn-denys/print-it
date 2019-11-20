import {connect} from 'react-redux';
import Autocomplete from './Autocomplete';


const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mapStateToProps = (state) => {
    return {
        items: state.products.items
    }
}

const AutocompleteContainer = connect(mapStateToProps, mapDispatchToProps)(Autocomplete);

export default AutocompleteContainer