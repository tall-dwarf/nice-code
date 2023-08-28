import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import { IClient, IClientEdit } from "../types";
import ClientItem from "./ClientItem";
import { setActiveClientId } from "../model";
import "./style.sass";

type ClientListProps = {
  clients: IClient[],
  isEdit: boolean
  clientEdit: IClientEdit[]
  updateClientEdit: (clientId: number) => void
}

export default function ClientList({ clients, isEdit, clientEdit, updateClientEdit }: ClientListProps) {
  const clientId = useAppSelector(state => state.client.activClientId)
  const dispatcher = useAppDispatch()

  const getClientEditById = (clientId: number) => {
    return clientEdit.find(cliet => cliet.clientId === clientId) as IClientEdit
  }

  return (
    <ul className="client-list">
      {clients.map((client) => (
        <li className="client-list__item">
          <ClientItem 
          updateClientEdit={() => updateClientEdit(client.id)}
          edit={getClientEditById(client.id)}
          key={client.id} isEdit={isEdit} isActive={client.id === clientId} onClientClick={() => dispatcher(setActiveClientId(client.id))} client={client} />
        </li>
      ))}
    </ul>
  );
}
