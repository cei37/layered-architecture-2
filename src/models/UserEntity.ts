// src/models/UserEntity.ts
export class UserEntity {
  constructor(
    public id: number,
    public fullName: string,
    public email: string,
    public age: number,
    public isAdult: boolean
  ) {}
}
