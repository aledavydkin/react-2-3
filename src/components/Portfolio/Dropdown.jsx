import React, {useState} from 'react';
import DropdownList from  './DropdownList'

function Dropdown() {
const [open, setOpen] = useState(false);

const handleClick = () => {
    setOpen(() => !open);
}

return (
    <div className={"container"}>
        <div data-id="wrapper" className={open ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
        <button data-id="toggle" className={"btn"} onClick={handleClick} >
            <span>Account Settings</span>
            <i className="material-icons">public</i>
        </button>
        {open && <DropdownList />}
        </div>
    </div>
    );
}

export default Dropdown;

