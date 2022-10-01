import { uuid } from "../utils/Tools";

export default class User {
  id: string;
  name: String;
  avatar: string;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;

    const photoId = Math.floor(Math.random() * 50)
    this.avatar = `https://xsgames.co/randomusers/assets/avatars/pixel/${photoId}.jpg`;
  }
}
