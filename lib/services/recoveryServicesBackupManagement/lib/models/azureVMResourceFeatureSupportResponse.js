/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response for feature support requests for Azure IaasVm
 *
 */
class AzureVMResourceFeatureSupportResponse {
  /**
   * Create a AzureVMResourceFeatureSupportResponse.
   * @member {string} [supportStatus] Support status of feature. Possible
   * values include: 'Invalid', 'Supported', 'DefaultOFF', 'DefaultON',
   * 'NotSupported'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureVMResourceFeatureSupportResponse
   *
   * @returns {object} metadata of AzureVMResourceFeatureSupportResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureVMResourceFeatureSupportResponse',
      type: {
        name: 'Composite',
        className: 'AzureVMResourceFeatureSupportResponse',
        modelProperties: {
          supportStatus: {
            required: false,
            serializedName: 'supportStatus',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureVMResourceFeatureSupportResponse;
