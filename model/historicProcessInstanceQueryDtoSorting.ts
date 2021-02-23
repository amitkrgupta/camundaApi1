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
 */

export interface HistoricProcessInstanceQueryDtoSorting { 
    /**
     * Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     */
    sortBy?: HistoricProcessInstanceQueryDtoSorting.SortByEnum;
    /**
     * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for descending order. Must be used in conjunction with the sortBy parameter.
     */
    sortOrder?: HistoricProcessInstanceQueryDtoSorting.SortOrderEnum;
}
export namespace HistoricProcessInstanceQueryDtoSorting {
    export type SortByEnum = 'instanceId' | 'definitionId' | 'definitionKey' | 'definitionName' | 'definitionVersion' | 'businessKey' | 'startTime' | 'endTime' | 'duration' | 'tenantId';
    export const SortByEnum = {
        InstanceId: 'instanceId' as SortByEnum,
        DefinitionId: 'definitionId' as SortByEnum,
        DefinitionKey: 'definitionKey' as SortByEnum,
        DefinitionName: 'definitionName' as SortByEnum,
        DefinitionVersion: 'definitionVersion' as SortByEnum,
        BusinessKey: 'businessKey' as SortByEnum,
        StartTime: 'startTime' as SortByEnum,
        EndTime: 'endTime' as SortByEnum,
        Duration: 'duration' as SortByEnum,
        TenantId: 'tenantId' as SortByEnum
    };
    export type SortOrderEnum = 'asc' | 'desc';
    export const SortOrderEnum = {
        Asc: 'asc' as SortOrderEnum,
        Desc: 'desc' as SortOrderEnum
    };
}