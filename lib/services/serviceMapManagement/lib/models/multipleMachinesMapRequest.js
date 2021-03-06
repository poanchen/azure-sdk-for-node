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

const models = require('./index');

/**
 * Provides a base class for describing map requests for a collection of
 * machines
 *
 * @extends models['MapRequest']
 */
class MultipleMachinesMapRequest extends models['MapRequest'] {
  /**
   * Create a MultipleMachinesMapRequest.
   * @member {boolean} [filterProcesses] If true, only processes between
   * specified machines will be included. Any connections in or out of those
   * processes will be included.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MultipleMachinesMapRequest
   *
   * @returns {object} metadata of MultipleMachinesMapRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MultipleMachinesMapRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'MapRequest',
        className: 'MultipleMachinesMapRequest',
        modelProperties: {
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          filterProcesses: {
            required: false,
            serializedName: 'filterProcesses',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = MultipleMachinesMapRequest;
