import LocalizedStrings from 'react-localization'
import Env from '../config/env.config'
import * as UserService from '../services/UserService'

export const strings = new LocalizedStrings({
    fr: {
        NEW_CAR_HEADING: 'Nouvelle voiture',
        NAME: 'Nom',
        CAR_IMAGE_SIZE_ERROR: `L'image doit être au format ${Env.CAR_IMAGE_WIDTH}x${Env.CAR_IMAGE_HEIGHT}`,
        RECOMMENDED_IMAGE_SIZE: `Taille d'image recommandée : ${Env.CAR_IMAGE_WIDTH}x${Env.CAR_IMAGE_HEIGHT}`,
        COMPANY: 'Fournisseur',
        LOCATIONS: 'Lieux de prise en charge',
        AVAILABLE: 'Disponible à la location',
        CAR_TYPE: 'Moteur',
        PRICE: 'Prix',
        SEATS: 'Sièges',
        DOORS: 'Portes',
        GEARBOX: 'Transmission',
        AIRCON: 'Climatisation',
        MINIMUM_AGE: 'Âge minimum',
        MINIMUM_AGE_NOT_VALID: "L'âge minimum doit être supérieur ou égal à " + Env.MINIMUM_AGE + ' ans.'
    },
    en: {
        NEW_CAR_HEADING: 'New car',
        NAME: 'Name',
        CAR_IMAGE_SIZE_ERROR: `The image must be in the format ${Env.CAR_IMAGE_WIDTH}x${Env.CAR_IMAGE_HEIGHT}`,
        RECOMMENDED_IMAGE_SIZE: `Recommended image size: ${Env.CAR_IMAGE_WIDTH}x${Env.CAR_IMAGE_HEIGHT}`,
        COMPANY: 'Supplier',
        LOCATIONS: 'Pickup locations',
        AVAILABLE: 'Available for rental',
        CAR_TYPE: 'Engine',
        PRICE: 'Price',
        SEATS: 'Seats',
        DOORS: 'Doors',
        GEARBOX: 'Gearbox',
        AIRCON: 'Aircon',
        MINIMUM_AGE: 'Minimum age',
        MINIMUM_AGE_NOT_VALID: "Minimum age must be greater than or equal to " + Env.MINIMUM_AGE + ' years old.'
    },
    pl: {
        NEW_CAR_HEADING: 'Nowy samochód',
        NAME: 'Nazwa',
        CAR_IMAGE_SIZE_ERROR: `Obraz musi być w formacie ${Env.CAR_IMAGE_WIDTH}x${Env.CAR_IMAGE_HEIGHT}`,
        RECOMMENDED_IMAGE_SIZE: `Rekomendowany format: ${Env.CAR_IMAGE_WIDTH}x${Env.CAR_IMAGE_HEIGHT}`,
        COMPANY: 'Dosrawca',
        LOCATIONS: 'Miejsce odbioru',
        AVAILABLE: 'Dostępne do wynajęcia',
        CAR_TYPE: 'Silnik',
        PRICE: 'Cena',
        SEATS: 'Miejsca',
        DOORS: 'Drzwi',
        GEARBOX: 'Skrzynia biegów',
        AIRCON: 'Klimatyzacja',
        MINIMUM_AGE: 'Minimalny wiek',
        MINIMUM_AGE_NOT_VALID: "Minimalny wiek musi być większy lub równy " + Env.MINIMUM_AGE + ' lat.'
    }
})

let language = UserService.getQueryLanguage()

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage()
}

strings.setLanguage(language)
