import { Timestamp } from "firebase/firestore";

export interface HomepageBlogInterface {
    push(arg0: { id: string }): unknown;
    id: string;
    author: string;
    category: string;
    details: string;
    icon: string;
    likes: number;
    comments: [];
    title: string;
    details_image: string;
    date_added: Timestamp;
  }