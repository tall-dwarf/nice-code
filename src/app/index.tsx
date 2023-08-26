import React from 'react';
import "./style/index.sass"
import IconButton from '../shared/IconButton/IconButton';
import CustomInput from '../widgets/CustomInput/CustomInput';
import ClientItem from '../entities/clients/ui/ClientItem';
import ClientList from '../entities/clients/ui/ClientList';
import DropDown from '../shared/DropDown/DropDown';
import ClientProfile from '../entities/clients/ui/ClientProfile';

export default function App(){

    const test = () => {

    }

    return(
        <div>
            <ClientProfile />
            <DropDown onBtnChangeClick={test} onBtnDelClick={test} />
            <CustomInput onBtnAddClick={test} onBtnFilterClick={test} onBtnSearchClick={test} />
            <ClientList />
            Hello world123
        </div>
    )
}