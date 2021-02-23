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
import { EventSubscriptionDto } from '../model/eventSubscriptionDto';
import { ExceptionDto } from '../model/exceptionDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EventSubscriptionService {

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
     * Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/7.13/reference/rest/event-subscription/get-query-count/) method.
     * @param eventSubscriptionId Only select subscription with the given id.
     * @param eventName Only select subscriptions for events with the given name.
     * @param eventType Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
     * @param executionId Only select subscriptions that belong to an execution with the given id.
     * @param processInstanceId Only select subscriptions that belong to a process instance with the given id.
     * @param activityId Only select subscriptions that belong to an activity with the given id.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
     * @param withoutTenantId Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param includeEventSubscriptionsWithoutTenantId Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<EventSubscriptionDto>>;
    public getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EventSubscriptionDto>>>;
    public getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EventSubscriptionDto>>>;
    public getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {














        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (eventSubscriptionId !== undefined && eventSubscriptionId !== null) {
            queryParameters = queryParameters.set('eventSubscriptionId', <any>eventSubscriptionId);
        }
        if (eventName !== undefined && eventName !== null) {
            queryParameters = queryParameters.set('eventName', <any>eventName);
        }
        if (eventType !== undefined && eventType !== null) {
            queryParameters = queryParameters.set('eventType', <any>eventType);
        }
        if (executionId !== undefined && executionId !== null) {
            queryParameters = queryParameters.set('executionId', <any>executionId);
        }
        if (processInstanceId !== undefined && processInstanceId !== null) {
            queryParameters = queryParameters.set('processInstanceId', <any>processInstanceId);
        }
        if (activityId !== undefined && activityId !== null) {
            queryParameters = queryParameters.set('activityId', <any>activityId);
        }
        if (tenantIdIn !== undefined && tenantIdIn !== null) {
            queryParameters = queryParameters.set('tenantIdIn', <any>tenantIdIn);
        }
        if (withoutTenantId !== undefined && withoutTenantId !== null) {
            queryParameters = queryParameters.set('withoutTenantId', <any>withoutTenantId);
        }
        if (includeEventSubscriptionsWithoutTenantId !== undefined && includeEventSubscriptionsWithoutTenantId !== null) {
            queryParameters = queryParameters.set('includeEventSubscriptionsWithoutTenantId', <any>includeEventSubscriptionsWithoutTenantId);
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

        return this.httpClient.request<Array<EventSubscriptionDto>>('get',`${this.basePath}/event-subscription`,
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
     * Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/7.13/reference/rest/event-subscription/get-query/) method.
     * @param eventSubscriptionId Only select subscription with the given id.
     * @param eventName Only select subscriptions for events with the given name.
     * @param eventType Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
     * @param executionId Only select subscriptions that belong to an execution with the given id.
     * @param processInstanceId Only select subscriptions that belong to a process instance with the given id.
     * @param activityId Only select subscriptions that belong to an activity with the given id.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
     * @param withoutTenantId Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param includeEventSubscriptionsWithoutTenantId Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, observe?: 'body', reportProgress?: boolean): Observable<CountResultDto>;
    public getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CountResultDto>>;
    public getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CountResultDto>>;
    public getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {










        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (eventSubscriptionId !== undefined && eventSubscriptionId !== null) {
            queryParameters = queryParameters.set('eventSubscriptionId', <any>eventSubscriptionId);
        }
        if (eventName !== undefined && eventName !== null) {
            queryParameters = queryParameters.set('eventName', <any>eventName);
        }
        if (eventType !== undefined && eventType !== null) {
            queryParameters = queryParameters.set('eventType', <any>eventType);
        }
        if (executionId !== undefined && executionId !== null) {
            queryParameters = queryParameters.set('executionId', <any>executionId);
        }
        if (processInstanceId !== undefined && processInstanceId !== null) {
            queryParameters = queryParameters.set('processInstanceId', <any>processInstanceId);
        }
        if (activityId !== undefined && activityId !== null) {
            queryParameters = queryParameters.set('activityId', <any>activityId);
        }
        if (tenantIdIn !== undefined && tenantIdIn !== null) {
            queryParameters = queryParameters.set('tenantIdIn', <any>tenantIdIn);
        }
        if (withoutTenantId !== undefined && withoutTenantId !== null) {
            queryParameters = queryParameters.set('withoutTenantId', <any>withoutTenantId);
        }
        if (includeEventSubscriptionsWithoutTenantId !== undefined && includeEventSubscriptionsWithoutTenantId !== null) {
            queryParameters = queryParameters.set('includeEventSubscriptionsWithoutTenantId', <any>includeEventSubscriptionsWithoutTenantId);
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

        return this.httpClient.request<CountResultDto>('get',`${this.basePath}/event-subscription/count`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
