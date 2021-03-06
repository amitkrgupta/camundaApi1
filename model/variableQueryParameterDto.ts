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

export interface VariableQueryParameterDto { 
    /**
     * The variable value, could be of type boolean, string or number
     */
    value?: any;
    /**
     * Comparison operator to be used
     */
    operator?: VariableQueryParameterDto.OperatorEnum;
}
export namespace VariableQueryParameterDto {
    export type OperatorEnum = 'eq' | 'neq' | 'gt' | 'gteq' | 'lt' | 'lteq' | 'like';
    export const OperatorEnum = {
        Eq: 'eq' as OperatorEnum,
        Neq: 'neq' as OperatorEnum,
        Gt: 'gt' as OperatorEnum,
        Gteq: 'gteq' as OperatorEnum,
        Lt: 'lt' as OperatorEnum,
        Lteq: 'lteq' as OperatorEnum,
        Like: 'like' as OperatorEnum
    };
}