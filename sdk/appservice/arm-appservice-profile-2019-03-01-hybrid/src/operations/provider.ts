/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/providerMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a Provider. */
export class Provider {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a Provider.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksResponse>
   */
  getAvailableStacks(options?: Models.ProviderGetAvailableStacksOptionalParams): Promise<Models.ProviderGetAvailableStacksResponse>;
  /**
   * @param callback The callback
   */
  getAvailableStacks(callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacks(options: Models.ProviderGetAvailableStacksOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacks(options?: Models.ProviderGetAvailableStacksOptionalParams | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAvailableStacksOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksResponse>;
  }

  /**
   * Gets all available operations for the Microsoft.Web resource provider. Also exposes resource
   * metric definitions
   * @summary Gets all available operations for the Microsoft.Web resource provider. Also exposes
   * resource metric definitions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderListOperationsResponse>
   */
  listOperations(options?: msRest.RequestOptionsBase): Promise<Models.ProviderListOperationsResponse>;
  /**
   * @param callback The callback
   */
  listOperations(callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  listOperations(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CsmOperationCollection>, callback?: msRest.ServiceCallback<Models.CsmOperationCollection>): Promise<Models.ProviderListOperationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationsOperationSpec,
      callback) as Promise<Models.ProviderListOperationsResponse>;
  }

  /**
   * Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksOnPremResponse>
   */
  getAvailableStacksOnPrem(options?: Models.ProviderGetAvailableStacksOnPremOptionalParams): Promise<Models.ProviderGetAvailableStacksOnPremResponse>;
  /**
   * @param callback The callback
   */
  getAvailableStacksOnPrem(callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacksOnPrem(options: Models.ProviderGetAvailableStacksOnPremOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacksOnPrem(options?: Models.ProviderGetAvailableStacksOnPremOptionalParams | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksOnPremResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAvailableStacksOnPremOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksOnPremResponse>;
  }

  /**
   * Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksNextResponse>
   */
  getAvailableStacksNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderGetAvailableStacksNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getAvailableStacksNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacksNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacksNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getAvailableStacksNextOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksNextResponse>;
  }

  /**
   * Gets all available operations for the Microsoft.Web resource provider. Also exposes resource
   * metric definitions
   * @summary Gets all available operations for the Microsoft.Web resource provider. Also exposes
   * resource metric definitions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderListOperationsNextResponse>
   */
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderListOperationsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CsmOperationCollection>, callback?: msRest.ServiceCallback<Models.CsmOperationCollection>): Promise<Models.ProviderListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOperationsNextOperationSpec,
      callback) as Promise<Models.ProviderListOperationsNextResponse>;
  }

  /**
   * Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksOnPremNextResponse>
   */
  getAvailableStacksOnPremNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderGetAvailableStacksOnPremNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getAvailableStacksOnPremNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacksOnPremNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacksOnPremNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksOnPremNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getAvailableStacksOnPremNextOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksOnPremNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAvailableStacksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/availableStacks",
  queryParameters: [
    Parameters.osTypeSelected,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getAvailableStacksOnPremOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/availableStacks",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.osTypeSelected,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getAvailableStacksNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listOperationsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getAvailableStacksOnPremNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};
