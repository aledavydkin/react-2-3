import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import menuItems from './data'

function DropdownList() {

    const [active, setActive] = useState('');

    const onSelect = (item) => {
        setActive(item);
    }


    return (
        <DropdownItem menuItems={menuItems} active={active} onSelect={onSelect} />
    )
}

export default DropdownList;
