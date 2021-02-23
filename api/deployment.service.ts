/**
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.13.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CountResultDto } from '../model/countResultDto';
import { DeploymentDto } from '../model/deploymentDto';
import { DeploymentResourceDto } from '../model/deploymentResourceDto';
import { DeploymentWithDefinitionsDto } from '../model/deploymentWithDefinitionsDto';
import { ExceptionDto } from '../model/exceptionDto';
import { ParseExceptionDto } from '../model/parseExceptionDto';
import { RedeploymentDto } from '../model/redeploymentDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DeploymentService {

    protected basePath = 'http://{host}:{port}/{contextPath}';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Creates a deployment.  **Security Consideration**  Deployments can contain custom code in form of scripts or EL expressions to customize process behavior. This may be abused for remote execution of arbitrary code.
     * @param tenantId 
     * @param deploymentSource 
     * @param deployChangedOnly 
     * @param enableDuplicateFiltering 
     * @param deploymentName 
     * @param data 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createDeploymentForm(tenantId?: string, deploymentSource?: string, deployChangedOnly?: boolean, enableDuplicateFiltering?: boolean, deploymentName?: string, data?: Blob, observe?: 'body', reportProgress?: boolean): Observable<DeploymentWithDefinitionsDto>;
    public createDeploymentForm(tenantId?: string, deploymentSource?: string, deployChangedOnly?: boolean, enableDuplicateFiltering?: boolean, deploymentName?: string, data?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeploymentWithDefinitionsDto>>;
    public createDeploymentForm(tenantId?: string, deploymentSource?: string, deployChangedOnly?: boolean, enableDuplicateFiltering?: boolean, deploymentName?: string, data?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeploymentWithDefinitionsDto>>;
    public createDeploymentForm(tenantId?: string, deploymentSource?: string, deployChangedOnly?: boolean, enableDuplicateFiltering?: boolean, deploymentName?: string, data?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (tenantId !== undefined) {
            formParams = formParams.append('tenant-id', <any>tenantId) as any || formParams;
        }
        if (deploymentSource !== undefined) {
            formParams = formParams.append('deployment-source', <any>deploymentSource) as any || formParams;
        }
        if (deployChangedOnly !== undefined) {
            formParams = formParams.append('deploy-changed-only', <any>deployChangedOnly) as any || formParams;
        }
        if (enableDuplicateFiltering !== undefined) {
            formParams = formParams.append('enable-duplicate-filtering', <any>enableDuplicateFiltering) as any || formParams;
        }
        if (deploymentName !== undefined) {
            formParams = formParams.append('deployment-name', <any>deploymentName) as any || formParams;
        }
        if (data !== undefined) {
            formParams = formParams.append('data', <any>data) as any || formParams;
        }

        return this.httpClient.request<DeploymentWithDefinitionsDto>('post',`${this.basePath}/deployment/create`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Deletes a deployment by id.
     * @param id The id of the deployment to be deleted.
     * @param cascade &#x60;true&#x60;, if all process instances, historic process instances and jobs for this deployment should be deleted.
     * @param skipCustomListeners &#x60;true&#x60;, if only the built-in ExecutionListeners should be notified with the end event.
     * @param skipIoMappings &#x60;true&#x60;, if all input/output mappings should not be invoked.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteDeployment(id: string, cascade?: boolean, skipCustomListeners?: boolean, skipIoMappings?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteDeployment(id: string, cascade?: boolean, skipCustomListeners?: boolean, skipIoMappings?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteDeployment(id: string, cascade?: boolean, skipCustomListeners?: boolean, skipIoMappings?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteDeployment(id: string, cascade?: boolean, skipCustomListeners?: boolean, skipIoMappings?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteDeployment.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (cascade !== undefined && cascade !== null) {
            queryParameters = queryParameters.set('cascade', <any>cascade);
        }
        if (skipCustomListeners !== undefined && skipCustomListeners !== null) {
            queryParameters = queryParameters.set('skipCustomListeners', <any>skipCustomListeners);
        }
        if (skipIoMappings !== undefined && skipIoMappings !== null) {
            queryParameters = queryParameters.set('skipIoMappings', <any>skipIoMappings);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/deployment/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Retrieves a deployment by id, according to the &#x60;Deployment&#x60; interface of the engine.
     * @param id The id of the deployment.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeployment(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<DeploymentDto>>;
    public getDeployment(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DeploymentDto>>>;
    public getDeployment(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DeploymentDto>>>;
    public getDeployment(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDeployment.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<DeploymentDto>>('get',`${this.basePath}/deployment/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Retrieves a deployment resource by resource id for the given deployment.
     * @param id The id of the deployment
     * @param resourceId The id of the deployment resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeploymentResource(id: string, resourceId: string, observe?: 'body', reportProgress?: boolean): Observable<DeploymentResourceDto>;
    public getDeploymentResource(id: string, resourceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeploymentResourceDto>>;
    public getDeploymentResource(id: string, resourceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeploymentResourceDto>>;
    public getDeploymentResource(id: string, resourceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDeploymentResource.');
        }

        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling getDeploymentResource.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<DeploymentResourceDto>('get',`${this.basePath}/deployment/${encodeURIComponent(String(id))}/resources/${encodeURIComponent(String(resourceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Retrieves the binary content of a deployment resource for the given deployment by id.
     * @param id The id of the deployment.
     * @param resourceId The id of the deployment resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeploymentResourceData(id: string, resourceId: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getDeploymentResourceData(id: string, resourceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getDeploymentResourceData(id: string, resourceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getDeploymentResourceData(id: string, resourceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDeploymentResourceData.');
        }

        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling getDeploymentResourceData.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream',
            '*/*',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Blob>('get',`${this.basePath}/deployment/${encodeURIComponent(String(id))}/resources/${encodeURIComponent(String(resourceId))}/data`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Retrieves all deployment resources of a given deployment.
     * @param id The id of the deployment to retrieve the deployment resources for.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeploymentResources(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<DeploymentResourceDto>>;
    public getDeploymentResources(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DeploymentResourceDto>>>;
    public getDeploymentResources(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DeploymentResourceDto>>>;
    public getDeploymentResources(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDeploymentResources.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<DeploymentResourceDto>>('get',`${this.basePath}/deployment/${encodeURIComponent(String(id))}/resources`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Queries for deployments that fulfill given parameters. Parameters may be the properties of deployments, such as the id or name or a range of the deployment time. The size of the result set can be retrieved by using the [Get Deployment count](https://docs.camunda.org/manual/7.13/reference/rest/deployment/get-query-count/) method.
     * @param id Filter by deployment id
     * @param name Filter by the deployment name. Exact match.
     * @param nameLike Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;).
     * @param source Filter by the deployment source.
     * @param withoutSource Filter by the deployment source whereby source is equal to &#x60;null&#x60;.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids.
     * @param withoutTenantId Only include deployments which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param includeDeploymentsWithoutTenantId Include deployments which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param after Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/7.13/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param before Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/7.13/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeployments(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<DeploymentDto>>;
    public getDeployments(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DeploymentDto>>>;
    public getDeployments(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DeploymentDto>>>;
    public getDeployments(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {















        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (nameLike !== undefined && nameLike !== null) {
            queryParameters = queryParameters.set('nameLike', <any>nameLike);
        }
        if (source !== undefined && source !== null) {
            queryParameters = queryParameters.set('source', <any>source);
        }
        if (withoutSource !== undefined && withoutSource !== null) {
            queryParameters = queryParameters.set('withoutSource', <any>withoutSource);
        }
        if (tenantIdIn !== undefined && tenantIdIn !== null) {
            queryParameters = queryParameters.set('tenantIdIn', <any>tenantIdIn);
        }
        if (withoutTenantId !== undefined && withoutTenantId !== null) {
            queryParameters = queryParameters.set('withoutTenantId', <any>withoutTenantId);
        }
        if (includeDeploymentsWithoutTenantId !== undefined && includeDeploymentsWithoutTenantId !== null) {
            queryParameters = queryParameters.set('includeDeploymentsWithoutTenantId', <any>includeDeploymentsWithoutTenantId);
        }
        if (after !== undefined && after !== null) {
            queryParameters = queryParameters.set('after', <any>after.toISOString());
        }
        if (before !== undefined && before !== null) {
            queryParameters = queryParameters.set('before', <any>before.toISOString());
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>sortBy);
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
        }
        if (firstResult !== undefined && firstResult !== null) {
            queryParameters = queryParameters.set('firstResult', <any>firstResult);
        }
        if (maxResults !== undefined && maxResults !== null) {
            queryParameters = queryParameters.set('maxResults', <any>maxResults);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<DeploymentDto>>('get',`${this.basePath}/deployment`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Deployments](https://docs.camunda.org/manual/7.13/reference/rest/deployment/get-query/) method.
     * @param id Filter by deployment id
     * @param name Filter by the deployment name. Exact match.
     * @param nameLike Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;).
     * @param source Filter by the deployment source.
     * @param withoutSource Filter by the deployment source whereby source is equal to &#x60;null&#x60;.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids.
     * @param withoutTenantId Only include deployments which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param includeDeploymentsWithoutTenantId Include deployments which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param after Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/7.13/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param before Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/7.13/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeploymentsCount(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, observe?: 'body', reportProgress?: boolean): Observable<CountResultDto>;
    public getDeploymentsCount(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CountResultDto>>;
    public getDeploymentsCount(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CountResultDto>>;
    public getDeploymentsCount(id?: string, name?: string, nameLike?: string, source?: string, withoutSource?: boolean, tenantIdIn?: string, withoutTenantId?: boolean, includeDeploymentsWithoutTenantId?: boolean, after?: Date, before?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {











        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (nameLike !== undefined && nameLike !== null) {
            queryParameters = queryParameters.set('nameLike', <any>nameLike);
        }
        if (source !== undefined && source !== null) {
            queryParameters = queryParameters.set('source', <any>source);
        }
        if (withoutSource !== undefined && withoutSource !== null) {
            queryParameters = queryParameters.set('withoutSource', <any>withoutSource);
        }
        if (tenantIdIn !== undefined && tenantIdIn !== null) {
            queryParameters = queryParameters.set('tenantIdIn', <any>tenantIdIn);
        }
        if (withoutTenantId !== undefined && withoutTenantId !== null) {
            queryParameters = queryParameters.set('withoutTenantId', <any>withoutTenantId);
        }
        if (includeDeploymentsWithoutTenantId !== undefined && includeDeploymentsWithoutTenantId !== null) {
            queryParameters = queryParameters.set('includeDeploymentsWithoutTenantId', <any>includeDeploymentsWithoutTenantId);
        }
        if (after !== undefined && after !== null) {
            queryParameters = queryParameters.set('after', <any>after.toISOString());
        }
        if (before !== undefined && before !== null) {
            queryParameters = queryParameters.set('before', <any>before.toISOString());
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CountResultDto>('get',`${this.basePath}/deployment/count`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Re-deploys an existing deployment.  The deployment resources to re-deploy can be restricted by using the properties &#x60;resourceIds&#x60; or &#x60;resourceNames&#x60;. If no deployment resources to re-deploy are passed then all existing resources of the given deployment are re-deployed.  **Warning**: Deployments can contain custom code in form of scripts or EL expressions to customize process behavior. This may be abused for remote execution of arbitrary code. See the section on [security considerations for custom code](https://docs.camunda.org/manual/7.13/user-guide/process-engine/securing-custom-code/) in the user guide for details.
     * @param id The id of the deployment to re-deploy.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public redeploy(id: string, body?: RedeploymentDto, observe?: 'body', reportProgress?: boolean): Observable<DeploymentWithDefinitionsDto>;
    public redeploy(id: string, body?: RedeploymentDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeploymentWithDefinitionsDto>>;
    public redeploy(id: string, body?: RedeploymentDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeploymentWithDefinitionsDto>>;
    public redeploy(id: string, body?: RedeploymentDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling redeploy.');
        }


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<DeploymentWithDefinitionsDto>('post',`${this.basePath}/deployment/${encodeURIComponent(String(id))}/redeploy`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
