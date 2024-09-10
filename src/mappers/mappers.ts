// src/mappers/mappers.ts
import { UserDTO } from '../models/UserDTO';
import { UserEntity } from '../models/UserEntity';

export const mapUserDTOToEntity = (dto: UserDTO): UserEntity => {
  return new UserEntity(
    dto.id,
    `${dto.firstName} ${dto.lastName}`,
    dto.email,
    dto.age,
    dto.age >= 18
  );
};

export const mapUserEntityToDTO = (entity: UserEntity): UserDTO => {
  const [firstName, lastName] = entity.fullName.split(' ');
  return {
    id: entity.id,
    firstName,
    lastName,
    email: entity.email,
    age: entity.age,
  };
};
