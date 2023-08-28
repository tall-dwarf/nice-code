export type ClientSocial = "telegram" | "vk";

export interface IClient {
  id: number;
  name: string;
  warning: boolean;
  social: ClientSocial | null;
  photo: string | null;
  primary: boolean;
}

export interface IClientProfile {
  clientId: number;
  name: string;
  age: number;
  gender: string;
  photo: string;
}

export interface IClientEdit {
  clientId: number;
  checked: boolean;
};
