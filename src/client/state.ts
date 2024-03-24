import { atom, useAtom } from "jotai"
import { IUser } from "../server/db/models/User";
import { useEffect } from "react";
import { APIFetch } from "./util/fetcher";
import { IPost } from "../server/db/models/Post";

export const postsAtom = atom<IPost[] | null>(null);
export const userAtom = atom<IUser | false | null>(null);

export function useUser() {
    const [user, setUser] = useAtom(userAtom);

    useEffect(() => {
        async function getCurrentUser() {
            const request = await APIFetch<{ user: IUser }>("GET", "/users/@me");
            if (request.error) {
                setUser(false);
            } else {
                setUser(request.user);
            }
        }

        getCurrentUser();
    }, []);

    return user;
}