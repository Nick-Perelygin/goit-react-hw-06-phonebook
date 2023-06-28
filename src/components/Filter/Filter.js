import { useDispatch, useSelector } from 'react-redux';
import {filterContact} from 'redux/phoneBookSlise';
import PropTypes from 'prop-types';
import { FilterInput } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.contacts.filter)

  return(
    <label>Find contacts by name
    <FilterInput type="text" value={filter} onChange={(e) => dispatch(filterContact(e))}/>
    </label>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter