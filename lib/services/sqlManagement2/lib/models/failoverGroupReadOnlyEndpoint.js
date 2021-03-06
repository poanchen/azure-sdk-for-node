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
 * Read-only endpoint of the failover group instance.
 *
 */
class FailoverGroupReadOnlyEndpoint {
  /**
   * Create a FailoverGroupReadOnlyEndpoint.
   * @property {string} [failoverPolicy] Failover policy of the read-only
   * endpoint for the failover group. Possible values include: 'Disabled',
   * 'Enabled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of FailoverGroupReadOnlyEndpoint
   *
   * @returns {object} metadata of FailoverGroupReadOnlyEndpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FailoverGroupReadOnlyEndpoint',
      type: {
        name: 'Composite',
        className: 'FailoverGroupReadOnlyEndpoint',
        modelProperties: {
          failoverPolicy: {
            required: false,
            serializedName: 'failoverPolicy',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FailoverGroupReadOnlyEndpoint;
