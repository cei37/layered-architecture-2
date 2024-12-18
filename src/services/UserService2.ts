// src/services/UserService.ts
import { BaseService } from './BaseService';
import { UserEntity } from '../models/UserEntity';
import { mapUserDTOToEntity, mapUserEntityToDTO } from '../mappers/mappers';

import { UserDTO } from '../api-client'; // Generated from OpenAPI spec

import { UserApi } from '../api-client/api'; // Generated from OpenAPI spec


class UserService {
  private api = new UserApi();

  async getUser(userId: number): Promise<UserEntity> {
    const userDTO: UserDTO = await this.api.getUserById(userId);
    return mapUserDTOToEntity(userDTO);
  }
}
