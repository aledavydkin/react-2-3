import React from 'react';
import PropTypes from 'prop-types';

function DropdownItem(props) {
    const { menuItems, active, onSelect } = props;

    return (
        <ul data-id="dropdown" className={"dropdown"}>
            {menuItems.map(item =>
                <li className={item === active ? 'active' : ''} onClick={ () => onSelect(item)}>
                    <a href={"#"}>{item}</a>
                </li>
            )}
        </ul>
    )
}

DropdownItem.propTypes = {
    menuItems: PropTypes.array.isRequired,
    active: PropTypes.string,
    onSelect: PropTypes.func,
};

export default DropdownItem;
