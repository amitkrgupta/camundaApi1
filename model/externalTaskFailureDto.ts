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

export interface ExternalTaskFailureDto { 
    /**
     * The id of the worker that reports the failure. Must match the id of the worker who has most recently locked the task.
     */
    workerId?: string;
    /**
     * An message indicating the reason of the failure.
     */
    errorMessage?: string;
    /**
     * A detailed error description.
     */
    errorDetails?: string;
    /**
     * A number of how often the task should be retried. Must be >= 0. If this is 0, an incident is created and the task cannot be fetched anymore unless the retries are increased again. The incident's message is set to the `errorMessage` parameter.
     */
    retries?: number;
    /**
     * A timeout in milliseconds before the external task becomes available again for fetching. Must be >= 0.
     */
    retryTimeout?: number;
}