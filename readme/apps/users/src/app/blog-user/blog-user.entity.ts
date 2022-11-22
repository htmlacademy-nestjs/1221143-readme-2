import {User} from '@readme/shared-types';
import {compare, genSalt, hash} from 'bcrypt';

const SALT_ROUNDS = 10;

export class BlogUserEntity implements User {
  public _id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public avatar: string;
  public passwordHash: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toOblject() {
    return {...this}; // получение чистых данных из нашей сущности как объект
  }

  public async setPassword(password: string): Promise<BlogUserEntity> { // передаём чистый пароль пользователя и хэшируем его
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> { // сравниваем пароль и хэш
    return compare(password, this.passwordHash);
  }

  public fillEntity(blogUser: User) { // метод заполнения класса
    this._id= blogUser._id;
    this.email = blogUser.email;
    this.firstName = blogUser.firstName;
    this.lastName = blogUser.lastName;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
  }
}
