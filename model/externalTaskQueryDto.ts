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
import { ExternalTaskQueryDtoSorting } from './externalTaskQueryDtoSorting';

/**
 * A JSON object with the following properties:
 */
export interface ExternalTaskQueryDto { 
    /**
     * Filter by an external task's id.
     */
    externalTaskId?: string;
    /**
     * Filter by the comma-separated list of external task ids.
     */
    externalTaskIdIn?: Array<string>;
    /**
     * Filter by an external task topic.
     */
    topicName?: string;
    /**
     * Filter by the id of the worker that the task was most recently locked by.
     */
    workerId?: string;
    /**
     * Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
     */
    locked?: boolean;
    /**
     * Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
     */
    notLocked?: boolean;
    /**
     * Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
     */
    withRetriesLeft?: boolean;
    /**
     * Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task.
     */
    noRetriesLeft?: boolean;
    /**
     * Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.13/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    lockExpirationAfter?: Date;
    /**
     * Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.13/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    lockExpirationBefore?: Date;
    /**
     * Filter by the id of the activity that an external task is created for.
     */
    activityId?: string;
    /**
     * Filter by the comma-separated list of ids of the activities that an external task is created for.
     */
    activityIdIn?: Array<string>;
    /**
     * Filter by the id of the execution that an external task belongs to.
     */
    executionId?: string;
    /**
     * Filter by the id of the process instance that an external task belongs to.
     */
    processInstanceId?: string;
    /**
     * Filter by a comma-separated list of process instance ids that an external task may belong to.
     */
    processInstanceIdIn?: Array<string>;
    /**
     * Filter by the id of the process definition that an external task belongs to.
     */
    processDefinitionId?: string;
    /**
     * Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids.
     */
    tenantIdIn?: Array<string>;
    /**
     * Only include active tasks. Value may only be `true`, as `false` matches any external task.
     */
    active?: boolean;
    /**
     * Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
     */
    suspended?: boolean;
    /**
     * Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
     */
    priorityHigherThanOrEquals?: number;
    /**
     * Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
     */
    priorityLowerThanOrEquals?: number;
    /**
     * A JSON array of criteria to sort the result by. Each element of the array is a JSON object that                     specifies one ordering. The position in the array identifies the rank of an ordering, i.e., whether                     it is primary, secondary, etc. The ordering objects have the following properties:                      **Note:** The `sorting` properties will not be applied to the External Task count query.
     */
    sorting?: Array<ExternalTaskQueryDtoSorting>;
}