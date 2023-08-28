import { IClient, IClientProfile } from "./types"

export const allClients: IClient[] = [
    {
        id: 1,
        photo: "/public/clients/2.png",
        warning: false,
        social: "telegram",
        name: "Кравцова Александра",
        primary: true
    },
    {
        id: 2,
        photo: "/public/clients/1.png",
        warning: false,
        social: null,
        name: "Рожков Денис ",
        primary: false
    },
    {
        id: 3,
        photo: "/public/clients/3.png",
        warning: false,
        social: "vk",
        primary: false,
        name: "Кравцова Александра"
    },
    {
        id: 4,
        photo: "/public/clients/4.png",
        warning: false,
        social: null,
        primary: false,
        name: "Диброва Алевтина"
    },
    {
        id: 5,
        photo: "/public/clients/3.png",
        warning: false,
        social: "telegram",
        primary: false,
        name: "Иванов Дмитрий"
    },
    {
        id: 6,
        photo: "/public/clients/2.png",
        warning: true,
        social: null,
        primary: false,
        name: "nosikov@list.ru"
    },
    {
        id: 7,
        photo: "/public/clients/5.png",
        warning: false,
        social: null,
        primary: true,
        name: "Форс Александр"
    },
    {
        id: 8,
        photo: "/public/clients/6.png",
        warning: false,
        social: null,
        primary: true,
        name: "Ахмедов Артур"
    },
    {
        id: 9,
        photo: "/public/clients/6.png",
        warning: false,
        social: null,
        primary: false,
        name: "Блажевич Игорь"
    },
    {
        id: 10,
        photo: "/public/clients/7.png",
        warning: false,
        social: null,
        primary: false,
        name: "Валиева Руфина"
    },
    {
        id: 11,
        photo: "/public/clients/8.png",
        warning: false,
        social: null,
        primary: false,
        name: "Волошина Виктория"
    },
    {
        id: 12,
        photo: "/public/clients/9.png",
        warning: false,
        social: null,
        primary: false,
        name: "Волошина Виктория"
    },
    {
        id: 13,
        photo: "/public/clients/1.png",
        warning: false,
        social: null,
        primary: false,
        name: "Рожков Денис "
    },
    {
        id: 14,
        photo: "/public/clients/3.png",
        warning: false,
        social: "vk",
        primary: false,
        name: "Кравцова Александра"
    },
    {
        id: 15,
        photo: "/public/clients/4.png",
        warning: false,
        social: null,
        primary: false,
        name: "Диброва Алевтина"
    },
    {
        id: 16,
        photo: "/public/clients/3.png",
        warning: false,
        primary: false,
        social: "telegram",
        name: "Иванов Дмитрий"
    },
    {
        id: 17,
        photo: "/public/clients/2.png",
        warning: true,
        social: null,
        primary: false,
        name: "nosikov@list.ru"
    },
    {
        id: 18,
        photo: "/public/clients/5.png",
        warning: false,
        primary: false,
        social: null,
        name: "Форс Александр"
    },
    {
        id: 19,
        photo: "/public/clients/6.png",
        warning: false,
        social: null,
        primary: false,
        name: "Ахмедов Артур"
    },
    {
        id: 20,
        photo: "/public/clients/6.png",
        warning: false,
        primary: false,
        social: null,
        name: "Блажевич Игорь"
    },
    {
        id: 21,
        photo: "/public/clients/7.png",
        warning: false,
        primary: false,
        social: null,
        name: "Валиева Руфина"
    },
    {
        id: 22,
        photo: "/public/clients/8.png",
        warning: false,
        primary: false,
        social: null,
        name: "Волошина Виктория"
    },
    {
        id: 23,
        photo: "/public/clients/9.png",
        warning: false,
        social: null,
        primary: false,
        name: "Волошина Виктория"
    },

]

export const profileData: IClientProfile[] = [
    {
        clientId: 1,
        name: "Кравцова Александра",
        age: 22,
        gender: "муж",
        photo: "/public/clients/2.png",
    },
    {
        clientId: 2,
        name: "Рожков Денис",
        age: 25,
        gender: "муж",
        photo: "/public/clients/2.png",
    },
    {
        clientId: 3,
        name: "Диброва Алевтина",
        age: 27,
        gender: "жен",
        photo: "/public/clients/2.png",
    },
    {
        clientId: 4,
        name: "Диброва Алевтина",
        age: 15,
        gender: "жен",
        photo: "/public/clients/2.png",
    },
    {
        clientId: 5,
        name: "nosikov@list.ru",
        age: 28,
        gender: "муж",
        photo: "/public/clients/2.png",
    },
]