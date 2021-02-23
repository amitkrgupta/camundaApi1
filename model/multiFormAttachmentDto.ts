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

export interface MultiFormAttachmentDto { 
    /**
     * The name of the attachment.
     */
    attachmentName?: string;
    /**
     * The description of the attachment.
     */
    attachmentDescription?: string;
    /**
     * The type of the attachment.
     */
    attachmentType?: string;
    /**
     * The url to the remote content of the attachment.
     */
    url?: string;
    /**
     * The content of the attachment.
     */
    content?: Blob;
}