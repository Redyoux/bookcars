import LocalizedStrings from 'react-localization'
import Env from '../config/env.config'
import * as UserService from '../services/UserService'

export const strings = new LocalizedStrings({
    fr: {
        CHANGE_PASSWORD_HEADING: 'Modification du mot de passe',
        CURRENT_PASSWORD: 'Mot de passe actuel',
        CURRENT_PASSWORD_ERROR: 'Mauvais mot de passe',
        NEW_PASSWORD: 'Nouveau mot de passe',
        NEW_PASSWORD_ERROR: 'Veuillez choisir un nouveau mot de passe',
        PASSWORD_UPDATE_ERROR: "Une erreur s'est produite lors de la modification du mot de passe.",
        PASSWORD_UPDATE: 'Le mot de passe a été mofifié avec succès.'
    },
    en: {
        CHANGE_PASSWORD_HEADING: 'Password Modification',
        CURRENT_PASSWORD: 'Current Password',
        CURRENT_PASSWORD_ERROR: 'Wrong password',
        NEW_PASSWORD: 'New Password',
        NEW_PASSWORD_ERROR: 'Please choose a new password',
        PASSWORD_UPDATE_ERROR: 'An error occurred while updating password.',
        PASSWORD_UPDATE: 'Password changed successfully.'
    },
    pl: {
        CHANGE_PASSWORD_HEADING: 'Zmiana hasła',
        CURRENT_PASSWORD: 'Obecne hasło',
        CURRENT_PASSWORD_ERROR: 'Niepoprawne hasło',
        NEW_PASSWORD: 'Nowe hasło',
        NEW_PASSWORD_ERROR: 'Wybierz nowe hasło',
        PASSWORD_UPDATE_ERROR: 'Wystąpił błąd podczas aktualizacji hasła.',
        PASSWORD_UPDATE: 'Hasło zmienione pomyślnie.'
    }
})

let language = UserService.getQueryLanguage()

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage()
}

strings.setLanguage(language)
