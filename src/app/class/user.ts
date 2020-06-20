export class User {
    private _email: String;
    private _nom: String;
    private _prenom: String;
    private _tel: Number;
    private _motDePasse: String;

    constructor() {
    }

    get email(): String {
        return this._email;
    }

    set email(value: String) {
        this._email = value;
    }

    get nom(): String {
        return this._nom;
    }

    set nom(value: String) {
        this._nom = value;
    }

    get prenom(): String {
        return this._prenom;
    }

    set prenom(value: String) {
        this._prenom = value;
    }

    get tel(): Number {
        return this._tel;
    }

    set tel(value: Number) {
        this._tel = value;
    }

    get motDePasse(): String {
        return this._motDePasse;
    }

    set motDePasse(value: String) {
        this._motDePasse = value;
    }
}
