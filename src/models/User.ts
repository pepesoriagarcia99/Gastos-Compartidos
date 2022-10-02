import { uuid } from "../utils/Tools";

export default class User {
  id: string;
  name: string;
  avatar: string;
  friends: Array<User> = [];

  constructor(name: string) {
    this.id = uuid();
    this.name = name;

    const photoId = Math.floor(Math.random() * 50)
    this.avatar = `https://xsgames.co/randomusers/assets/avatars/pixel/${photoId}.jpg`;
  }

  addFriend(user: User): void {
    this.friends.push(user);
  }

  deleteFriend(id: string): void {
    const index: number = this.friends.findIndex(e => e.id === id);
    this.friends.splice(index, 1);
  }

  destroy() {
    this.id = "";
    this.name = "";
    this.avatar = "";
    this.friends = [];
  }
}
