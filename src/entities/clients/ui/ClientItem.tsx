import React from "react";
import { ClientSocial, IClient, IClientEdit } from "../types";
import "./style.sass";

type ClientItemProps = {
  client: IClient;
  onClientClick: () => void;
  isActive: boolean;
  isEdit: boolean,
  edit: IClientEdit
  updateClientEdit: () => void
};

type ClientSocialsType = {
  [n in ClientSocial]: string;
};

export default function ClientItem({
  client,
  onClientClick,
  isActive,
  isEdit,
  edit,
  updateClientEdit
}: ClientItemProps) {
  const clientPhoto = client.photo || "/public/clients/not.png";

  const clientSocials: ClientSocialsType = {
    telegram: "/public/icons/telegram.svg",
    vk: "/public/icons/vk.svg",
  };

  return (
    <div onClick={onClientClick} className={"client-item " + (isActive && " client-item--active")}>
      {
        isEdit && <input onClick={() => updateClientEdit()} checked={edit.checked} className="" type="checkbox" />
      }
      {client.primary && <div className="client-item__primary"></div>}
      <img className="client-item__photo" src={clientPhoto} alt="Фотография" />
      <h4 className="client-item__name">{client.name}</h4>
      {client.warning && (
        <img
          className="client-item__warning"
          src="/public/icons/warning.svg"
          alt="Ошибка"
        />
      )}
      {client.social && (
        <img
          className="client-item__cosial"
          src={clientSocials[client.social]}
          alt="Телеграм"
        />
      )}
    </div>
  );
}
