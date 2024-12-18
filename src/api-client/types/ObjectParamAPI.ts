import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { UserDTO } from '../models/UserDTO';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateUserRequest {
    /**
     * New user data
     * @type UserDTO
     * @memberof DefaultApicreateUser
     */
    userDTO: UserDTO
}

export interface DefaultApiDeleteUserRequest {
    /**
     * ID of the user to delete
     * @type number
     * @memberof DefaultApideleteUser
     */
    id: number
}

export interface DefaultApiGetUserByIdRequest {
    /**
     * ID of the user to fetch
     * @type number
     * @memberof DefaultApigetUserById
     */
    id: number
}

export interface DefaultApiGetUsersRequest {
}

export interface DefaultApiUpdateUserRequest {
    /**
     * ID of the user to update
     * @type number
     * @memberof DefaultApiupdateUser
     */
    id: number
    /**
     * Updated user data
     * @type UserDTO
     * @memberof DefaultApiupdateUser
     */
    userDTO: UserDTO
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user
     * @param param the request object
     */
    public createUserWithHttpInfo(param: DefaultApiCreateUserRequest, options?: Configuration): Promise<HttpInfo<UserDTO>> {
        return this.api.createUserWithHttpInfo(param.userDTO,  options).toPromise();
    }

    /**
     * Create a new user
     * @param param the request object
     */
    public createUser(param: DefaultApiCreateUserRequest, options?: Configuration): Promise<UserDTO> {
        return this.api.createUser(param.userDTO,  options).toPromise();
    }

    /**
     * Delete a user by ID
     * @param param the request object
     */
    public deleteUserWithHttpInfo(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteUserWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a user by ID
     * @param param the request object
     */
    public deleteUser(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUser(param.id,  options).toPromise();
    }

    /**
     * Get user by ID
     * @param param the request object
     */
    public getUserByIdWithHttpInfo(param: DefaultApiGetUserByIdRequest, options?: Configuration): Promise<HttpInfo<UserDTO>> {
        return this.api.getUserByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get user by ID
     * @param param the request object
     */
    public getUserById(param: DefaultApiGetUserByIdRequest, options?: Configuration): Promise<UserDTO> {
        return this.api.getUserById(param.id,  options).toPromise();
    }

    /**
     * Get a list of users
     * @param param the request object
     */
    public getUsersWithHttpInfo(param: DefaultApiGetUsersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<UserDTO>>> {
        return this.api.getUsersWithHttpInfo( options).toPromise();
    }

    /**
     * Get a list of users
     * @param param the request object
     */
    public getUsers(param: DefaultApiGetUsersRequest = {}, options?: Configuration): Promise<Array<UserDTO>> {
        return this.api.getUsers( options).toPromise();
    }

    /**
     * Update an existing user
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<HttpInfo<UserDTO>> {
        return this.api.updateUserWithHttpInfo(param.id, param.userDTO,  options).toPromise();
    }

    /**
     * Update an existing user
     * @param param the request object
     */
    public updateUser(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<UserDTO> {
        return this.api.updateUser(param.id, param.userDTO,  options).toPromise();
    }

}
