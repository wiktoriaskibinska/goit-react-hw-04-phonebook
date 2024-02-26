import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>
        Find contacts by Name
        <input
          className={css.filterInput}
          type="text"
          onChange={onFilterChange}
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
