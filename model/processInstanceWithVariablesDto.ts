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
import { AtomLink } from './atomLink';
import { ProcessInstanceDto } from './processInstanceDto';

export interface ProcessInstanceWithVariablesDto { 
    /**
     * The links associated to this resource, with `method`, `href` and `rel`.
     */
    links?: Array<AtomLink>;
}