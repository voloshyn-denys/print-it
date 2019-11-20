import {connect} from 'react-redux';
import Final from './Final';
import { removeServiceCreator } from '../../../redux/products-reducer';

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (serviceId) => {
            
            dispatch(removeServiceCreator(serviceId))
        }
    }
}
const mapStatetoProps = (state) => {
    return {
        services: state.products.services
    }
}

const FinalContainer = connect(mapStatetoProps, mapDispatchToProps)(Final);

export default FinalContainer