import {connect} from 'react-redux';
import Products from './Products';


const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mapStatetoProps = (state) => {
    return {
        products: state.products.products
    }
}

const ProductsContainer = connect(mapStatetoProps, mapDispatchToProps)(Products);

export default ProductsContainer;