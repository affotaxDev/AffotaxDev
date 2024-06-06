import React from 'react';

const SubMenu = ({ name, index, length }) => {
    return (
        <li className={`px-8 py-2  border-b-primary bg-secondary text-tertiary hover:text-primary hover:cursor-pointer ${index !== length - 1 ? 'border-b-2' : 'border-b-0'}`}>
            <h3 className='text-nowrap'>{name}</h3>
        </li>
    );
};

export default SubMenu;
