export type User = {
    uid: string;
    avatar: string;
    uname: string;
}

export type ChatCommentType = {
    rpid: number;
    user: User;
    content: string;
    ctime: string;
    like: number;
}

export type SortTabItem = {
    type: string;
    text: string;
}