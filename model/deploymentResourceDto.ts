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

/**
 * A JSON object corresponding to the `Resource` interface in the engine. Its properties are as follows:
 */
export interface DeploymentResourceDto { 
    /**
     * The id of the deployment resource.
     */
    id?: string;
    /**
     * The name of the deployment resource
     */
    name?: string;
    /**
     * The id of the deployment.
     */
    deploymentId?: string;
}