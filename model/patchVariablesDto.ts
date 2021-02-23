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
import { VariableValueDto } from './variableValueDto';

export interface PatchVariablesDto { 
    /**
     * A JSON object containing variable key-value pairs.
     */
    modifications?: { [key: string]: VariableValueDto; };
    /**
     * An array of String keys of variables to be deleted.
     */
    deletions?: Array<string>;
}