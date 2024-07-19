import PropTypes from 'prop-types'
function Props(props){
    return(
        <div className='props'>
            <h1>name: {props.name}</h1>
            <h2>age: {props.age}</h2>
            <h3>city: {props.city}</h3>
        </div>
    )
}
Props.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
}
Props.defaultProps = {
    name:"abc",
    age:20,
    city:"hyd",
}

export default Props