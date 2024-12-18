import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { UserDTO } from '../models/UserDTO';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create a new user
     * @param userDTO New user data
     */
    public createUserWithHttpInfo(userDTO: UserDTO, _options?: Configuration): Observable<HttpInfo<UserDTO>> {
        const requestContextPromise = this.requestFactory.createUser(userDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new user
     * @param userDTO New user data
     */
    public createUser(userDTO: UserDTO, _options?: Configuration): Observable<UserDTO> {
        return this.createUserWithHttpInfo(userDTO, _options).pipe(map((apiResponse: HttpInfo<UserDTO>) => apiResponse.data));
    }

    /**
     * Delete a user by ID
     * @param id ID of the user to delete
     */
    public deleteUserWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteUser(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a user by ID
     * @param id ID of the user to delete
     */
    public deleteUser(id: number, _options?: Configuration): Observable<void> {
        return this.deleteUserWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get user by ID
     * @param id ID of the user to fetch
     */
    public getUserByIdWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<UserDTO>> {
        const requestContextPromise = this.requestFactory.getUserById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user by ID
     * @param id ID of the user to fetch
     */
    public getUserById(id: number, _options?: Configuration): Observable<UserDTO> {
        return this.getUserByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserDTO>) => apiResponse.data));
    }

    /**
     * Get a list of users
     */
    public getUsersWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<UserDTO>>> {
        const requestContextPromise = this.requestFactory.getUsers(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of users
     */
    public getUsers(_options?: Configuration): Observable<Array<UserDTO>> {
        return this.getUsersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<UserDTO>>) => apiResponse.data));
    }

    /**
     * Update an existing user
     * @param id ID of the user to update
     * @param userDTO Updated user data
     */
    public updateUserWithHttpInfo(id: number, userDTO: UserDTO, _options?: Configuration): Observable<HttpInfo<UserDTO>> {
        const requestContextPromise = this.requestFactory.updateUser(id, userDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing user
     * @param id ID of the user to update
     * @param userDTO Updated user data
     */
    public updateUser(id: number, userDTO: UserDTO, _options?: Configuration): Observable<UserDTO> {
        return this.updateUserWithHttpInfo(id, userDTO, _options).pipe(map((apiResponse: HttpInfo<UserDTO>) => apiResponse.data));
    }

}
