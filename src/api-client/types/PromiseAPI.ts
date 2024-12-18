import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { UserDTO } from '../models/UserDTO';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user
     * @param userDTO New user data
     */
    public createUserWithHttpInfo(userDTO: UserDTO, _options?: Configuration): Promise<HttpInfo<UserDTO>> {
        const result = this.api.createUserWithHttpInfo(userDTO, _options);
        return result.toPromise();
    }

    /**
     * Create a new user
     * @param userDTO New user data
     */
    public createUser(userDTO: UserDTO, _options?: Configuration): Promise<UserDTO> {
        const result = this.api.createUser(userDTO, _options);
        return result.toPromise();
    }

    /**
     * Delete a user by ID
     * @param id ID of the user to delete
     */
    public deleteUserWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteUserWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a user by ID
     * @param id ID of the user to delete
     */
    public deleteUser(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUser(id, _options);
        return result.toPromise();
    }

    /**
     * Get user by ID
     * @param id ID of the user to fetch
     */
    public getUserByIdWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<UserDTO>> {
        const result = this.api.getUserByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get user by ID
     * @param id ID of the user to fetch
     */
    public getUserById(id: number, _options?: Configuration): Promise<UserDTO> {
        const result = this.api.getUserById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of users
     */
    public getUsersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<UserDTO>>> {
        const result = this.api.getUsersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get a list of users
     */
    public getUsers(_options?: Configuration): Promise<Array<UserDTO>> {
        const result = this.api.getUsers(_options);
        return result.toPromise();
    }

    /**
     * Update an existing user
     * @param id ID of the user to update
     * @param userDTO Updated user data
     */
    public updateUserWithHttpInfo(id: number, userDTO: UserDTO, _options?: Configuration): Promise<HttpInfo<UserDTO>> {
        const result = this.api.updateUserWithHttpInfo(id, userDTO, _options);
        return result.toPromise();
    }

    /**
     * Update an existing user
     * @param id ID of the user to update
     * @param userDTO Updated user data
     */
    public updateUser(id: number, userDTO: UserDTO, _options?: Configuration): Promise<UserDTO> {
        const result = this.api.updateUser(id, userDTO, _options);
        return result.toPromise();
    }


}



