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
 * The detail about an operation.
 *
 */
class OperationDetail {
  /**
   * Create a OperationDetail.
   * @member {string} [provider] The name of the provider that supports the
   * operation.
   * @member {string} [resource] The resource type on which this operation can
   * be performed.
   * @member {string} [operation] The name of the operation.
   * @member {string} [description] The description of the operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationDetail
   *
   * @returns {object} metadata of OperationDetail
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationDetail',
      type: {
        name: 'Composite',
        className: 'OperationDetail',
        modelProperties: {
          provider: {
            required: false,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            serializedName: 'resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationDetail;