import React from 'react';
import "./style/index.sass"
import IconButton from '../shared/IconButton/IconButton';
import CustomInput from '../widgets/CustomInput/CustomInput';
import ClientItem from '../entities/clients/ui/ClientItem';
import ClientList from '../entities/clients/ui/ClientList';
import DropDown from '../shared/DropDown/DropDown';
import ClientProfile from '../entities/clients/ui/ClientProfile';
import Radio from '../shared/Radio/Radio';

export default function App(){

    const radioData = [
        {
            id: 1,
            label: "Заметки"
        },
        {
            id: 2,
            label: "Консультации"
        },
        {
            id: 3,
            label: "Видео"
        },
        {
            id: 4,
            label: "Мероприятия"
        }

    ]

    const test = () => {

    }

    return(
        <div>
            <Radio onRadioClick={test} radioItems={radioData} />
            <ClientProfile />
            <DropDown onBtnChangeClick={test} onBtnDelClick={test} />
            <CustomInput onBtnAddClick={test} onBtnFilterClick={test} onBtnSearchClick={test} />
            <ClientList />
            Hello world123
        </div>
    )
}