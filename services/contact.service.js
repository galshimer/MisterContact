import { storageService } from "./async-storage.service"

const CONTACT_KEY = 'contactDB'

export const contactService = {
    query,

}

function query() {
    return storageService.query(CONTACT_KEY)
}