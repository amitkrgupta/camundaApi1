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

export interface TriggerVariableValueDto { 
    /**
     * The variable's value. Value differs depending on the variable's type and on the deserializeValues parameter.
     */
    value?: any;
    /**
     * The value type of the variable.
     */
    type?: string;
    /**
     * A JSON object containing additional, value-type-dependent properties. For serialized variables of type Object, the following properties can be provided:  * `objectTypeName`: A string representation of the object's type name. * `serializationDataFormat`: The serialization format used to store the variable.  For serialized variables of type File, the following properties can be provided:  * `filename`: The name of the file. This is not the variable name but the name that will be used when downloading the file again. * `mimetype`: The MIME type of the file that is being uploaded. * `encoding`: The encoding of the file that is being uploaded.
     */
    valueInfo?: { [key: string]: any; };
}