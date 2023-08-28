import React, { useEffect, useState } from "react";
import "./style.sass";
import CustomInput from "../CustomInput/CustomInput";
import ClientList from "../../entities/clients/ui/ClientList";
import { loadAllClients } from "../../entities/clients/api";
import { IClientEdit, IClient } from "../../entities/clients/types";
import useFilter from "../../shared/hooks/useFilter";
import ClientActions from "../../entities/clients/ui/ClientActions";
import useEdit from "../../entities/clients/hooks/useEdit";
export default function Sidebar() {
  const { setFilterValue, filterData } = useFilter<IClient>(["name"]);
  const [clients, setClients] = useState<IClient[]>([]);
  const {isEdit, setIsEdit, clientEdit, updateClientEdit, setAllClientEdit} = useEdit(clients)

  useEffect(() => {
    loadAllClients().then((clients) => {
      setClients(clients);
    });
  }, []);

  return (
    <div className="sidebar">
      <CustomInput
        onBtnSearchClick={(text) => setFilterValue(text)}
        onBtnFilterClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        onBtnAddClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ClientActions
        setAllClientEdit={setAllClientEdit}
        updateIsEdit={(newEdit) => setIsEdit(newEdit)}
        isEdit={isEdit}
      />
      <ClientList updateClientEdit={updateClientEdit} clientEdit={clientEdit} isEdit={isEdit} clients={filterData(clients)} />
    </div>
  );
}
