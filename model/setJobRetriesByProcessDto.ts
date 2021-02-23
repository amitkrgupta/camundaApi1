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
import { HistoricProcessInstanceQueryDto } from './historicProcessInstanceQueryDto';
import { ProcessInstanceQueryDto } from './processInstanceQueryDto';

export interface SetJobRetriesByProcessDto { 
    /**
     * A list of process instance ids to fetch jobs, for which retries will be set.
     */
    processInstances?: Array<string>;
    /**
     * An integer representing the number of retries. Please note that the value cannot be negative or null.
     */
    retries?: number;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
}