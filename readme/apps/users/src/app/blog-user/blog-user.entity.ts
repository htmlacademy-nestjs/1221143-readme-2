import {User} from '@readme/shared-types';
import {compare, genSalt, hash} from 'bcrypt';

const SALT_ROUNDS = 10;

export class BlogUserEntity implements User {
  public _id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public avatar: string;
  public role: string;
  public passwordHash: string;

  public toOblject() {
    return {...this}; // получение чистых данных из нашей сущности как объект
  }

  public async setPassword(password: string): Promise<BlogUserEntity> { // передаём чистый пороль пользователя и хэшируем его
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public fillEntity(blogUser: User) { // метод заполнения класса
    this._id= blogUser._id;
    this.email = blogUser.email;
    this.firstName = blogUser.firstName;
    this.lastName = blogUser.lastName;
    this.avatar = blogUser.avatar;
    this.role = blogUser.role;
    this.passwordHash = blogUser.passwordHash;
  }
}
