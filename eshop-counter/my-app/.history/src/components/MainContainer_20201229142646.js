import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';

const MainContainer = () => {
    return(
        <div className='flex'>
            <LeftSideCategory />
            <RightSideProducts/>
        </div>
    )
}

export default MainContainer;