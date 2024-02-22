import { IUser } from "../@types/auth";

export function setUserLocalStorage (user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem('u');

    if(!json) {
        return null;
    }else {
        const user = JSON.parse(json);
        return user ?? null;
    }
}