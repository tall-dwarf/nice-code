import React from 'react';
import "./style/index.sass"
import IconButton from '../shared/IconButton/IconButton';
import CustomInput from '../widgets/CustomInput/CustomInput';
import ClientItem from '../entities/clients/ui/ClientItem';
import ClientList from '../entities/clients/ui/ClientList';
import DropDown from '../shared/DropDown/DropDown';
import ClientProfile from '../entities/clients/ui/ClientProfile';
import Radio from '../shared/Radio/Radio';
import ClientMemu from '../entities/clients/ui/ClientMemu';
import NoteItem from '../entities/note/ui/NoTeItem';
import NoteList from '../entities/note/ui/NoteList';
export default function App(){



    const test = () => {

    }

    return(
        <div>
            <NoteList />
            <ClientMemu onBtnAddClick={test} updateMenuId={() => console.log()} activMenuId={1} />
            <ClientProfile />
            <DropDown onBtnChangeClick={test} onBtnDelClick={test} />
            <CustomInput onBtnAddClick={test} onBtnFilterClick={test} onBtnSearchClick={test} />
            <ClientList />
            Hello world123
        </div>
    )
}