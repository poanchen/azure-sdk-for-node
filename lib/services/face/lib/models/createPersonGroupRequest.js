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
 * Request to create a person group.
 *
 */
class CreatePersonGroupRequest {
  /**
   * Create a CreatePersonGroupRequest.
   * @member {string} [name] Name of the face list, maximum length is 128.
   * @member {string} [userData] Optional user defined data for the face list.
   * Length should not exceed 16KB.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreatePersonGroupRequest
   *
   * @returns {object} metadata of CreatePersonGroupRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreatePersonGroupRequest',
      type: {
        name: 'Composite',
        className: 'CreatePersonGroupRequest',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          },
          userData: {
            required: false,
            serializedName: 'userData',
            constraints: {
              MaxLength: 16384
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreatePersonGroupRequest;