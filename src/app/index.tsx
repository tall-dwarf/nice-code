import React from 'react';
import "./style/index.sass"
import IconButton from '../shared/IconButton/IconButton';

export default function App(){

    return(
        <div>
            <IconButton icon='filter' />
            <IconButton icon='search' />
            <IconButton icon='add' />
            Hello world123
        </div>
    )
}