/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * AvailabilityStatuses
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MicrosoftResourceHealth.
 */
export interface AvailabilityStatuses {


    /**
     * Lists the current availability status for all the resources in the
     * subscription. Use the nextLink property in the response to get the next page
     * of availability statuses.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatusListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionIdWithHttpOperationResponse(options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatusListResult>>;

    /**
     * Lists the current availability status for all the resources in the
     * subscription. Use the nextLink property in the response to get the next page
     * of availability statuses.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatusListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatusListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscriptionId(options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatusListResult>;
    listBySubscriptionId(callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
    listBySubscriptionId(options: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;


    /**
     * Lists the current availability status for all the resources in the resource
     * group. Use the nextLink property in the response to get the next page of
     * availability statuses.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatusListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatusListResult>>;

    /**
     * Lists the current availability status for all the resources in the resource
     * group. Use the nextLink property in the response to get the next page of
     * availability statuses.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatusListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatusListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string, options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatusListResult>;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;


    /**
     * Gets current availability status for a single resource
     *
     * @param {string} resourceUri The fully qualified ID of the resource,
     * including the resource name and resource type. Currently the API support not
     * nested and one nesting level resource types :
     * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
     * and
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatus>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getByResourceWithHttpOperationResponse(resourceUri: string, options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatus>>;

    /**
     * Gets current availability status for a single resource
     *
     * @param {string} resourceUri The fully qualified ID of the resource,
     * including the resource name and resource type. Currently the API support not
     * nested and one nesting level resource types :
     * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
     * and
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatus} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatus} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatus} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getByResource(resourceUri: string, options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatus>;
    getByResource(resourceUri: string, callback: ServiceCallback<models.AvailabilityStatus>): void;
    getByResource(resourceUri: string, options: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatus>): void;


    /**
     * Lists all historical availability transitions and impacting events for a
     * single resource. Use the nextLink property in the response to get the next
     * page of availability status
     *
     * @param {string} resourceUri The fully qualified ID of the resource,
     * including the resource name and resource type. Currently the API support not
     * nested and one nesting level resource types :
     * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
     * and
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatusListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceUri: string, options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatusListResult>>;

    /**
     * Lists all historical availability transitions and impacting events for a
     * single resource. Use the nextLink property in the response to get the next
     * page of availability status
     *
     * @param {string} resourceUri The fully qualified ID of the resource,
     * including the resource name and resource type. Currently the API support not
     * nested and one nesting level resource types :
     * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
     * and
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     *
     * @param {string} [options.expand] Setting $expand=recommendedactions in url
     * query expands the recommendedactions in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatusListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatusListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceUri: string, options?: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatusListResult>;
    list(resourceUri: string, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
    list(resourceUri: string, options: { filter? : string, expand? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;


    /**
     * Lists the current availability status for all the resources in the
     * subscription. Use the nextLink property in the response to get the next page
     * of availability statuses.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatusListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionIdNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatusListResult>>;

    /**
     * Lists the current availability status for all the resources in the
     * subscription. Use the nextLink property in the response to get the next page
     * of availability statuses.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatusListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatusListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscriptionIdNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatusListResult>;
    listBySubscriptionIdNext(nextPageLink: string, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
    listBySubscriptionIdNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;


    /**
     * Lists the current availability status for all the resources in the resource
     * group. Use the nextLink property in the response to get the next page of
     * availability statuses.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatusListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatusListResult>>;

    /**
     * Lists the current availability status for all the resources in the resource
     * group. Use the nextLink property in the response to get the next page of
     * availability statuses.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatusListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatusListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatusListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;


    /**
     * Lists all historical availability transitions and impacting events for a
     * single resource. Use the nextLink property in the response to get the next
     * page of availability status
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AvailabilityStatusListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AvailabilityStatusListResult>>;

    /**
     * Lists all historical availability transitions and impacting events for a
     * single resource. Use the nextLink property in the response to get the next
     * page of availability status
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AvailabilityStatusListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AvailabilityStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AvailabilityStatusListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AvailabilityStatusListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AvailabilityStatusListResult>): void;
}

/**
 * @class
 * Operations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MicrosoftResourceHealth.
 */
export interface Operations {


    /**
     * Lists available operations for the resourcehealth resource provider
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

    /**
     * Lists available operations for the resourcehealth resource provider
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
    list(callback: ServiceCallback<models.OperationListResult>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
}