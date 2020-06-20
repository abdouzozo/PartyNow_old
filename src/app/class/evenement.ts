export class Evenement {
    private _titre: String;
    private _heureDebut: Date;
    private _heureFin: Date;
    private _coutParticipation: Number;
    private _adresse: String;
    private _nbMax: Number;
    private _alcool: boolean;

    constructor() {
    }

    get titre(): String {
        return this._titre;
    }

    set titre(value: String) {
        this._titre = value;
    }

    get heureDebut(): Date {
        return this._heureDebut;
    }

    set heureDebut(value: Date) {
        this._heureDebut = value;
    }

    get heureFin(): Date {
        return this._heureFin;
    }

    set heureFin(value: Date) {
        this._heureFin = value;
    }

    get coutParticipation(): Number {
        return this._coutParticipation;
    }

    set coutParticipation(value: Number) {
        this._coutParticipation = value;
    }

    get adresse(): String {
        return this._adresse;
    }

    set adresse(value: String) {
        this._adresse = value;
    }

    get nbMax(): Number {
        return this._nbMax;
    }

    set nbMax(value) {
        this._nbMax = value;
    }

    get alcool(): boolean {
        return this._alcool;
    }

    set alcool(value: boolean) {
        this._alcool = value;
    }
}
