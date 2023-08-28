import { allClients, profileData } from "./data"

export const loadAllClients = async () => {
    return allClients
}

export const loadProfileData = async (clientId: number) => {
    return profileData.find(prof => prof.clientId === clientId)
}