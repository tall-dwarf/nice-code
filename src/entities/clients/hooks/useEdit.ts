import { useEffect, useState } from "react";
import { IClient, IClientEdit } from "../types";

export default function useEdit(clients: IClient[]) {
  const [isEdit, setIsEdit] = useState(false);
  const [clientEdit, setClientEdit] = useState<IClientEdit[]>([]);

  useEffect(() => {
    generateClientEdit();
  }, [clients]);

  const generateClientEdit = () => {
    const clientEditAll = [] as IClientEdit[];
    for (let client of clients) {
      clientEditAll.push({ clientId: client.id, checked: false });
    }
    setClientEdit(clientEditAll);
  };

  const updateClientEdit = (clientId: number) => {
    setClientEdit(clientEdit.map(client => client.clientId === clientId ? {...client, checked: !client.checked}: client))
  }

  const setAllClientEdit = (value: boolean) => {
    setClientEdit(clientEdit.map(client => ({...client, checked: value})))
  }

  return {
    isEdit,
    setIsEdit,
    clientEdit,
    updateClientEdit,
    setAllClientEdit
  };
}
