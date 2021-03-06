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
 * Base class for backup item. Workload-specific backup items are derived from
 * this class.
 *
 */
class WorkloadItem {
  /**
   * Create a WorkloadItem.
   * @member {string} [backupManagementType] Type of backup managemenent to
   * backup an item.
   * @member {string} [workloadType] Type of workload for the backup management
   * @member {string} [friendlyName] Friendly name of the backup item.
   * @member {string} [protectionState] State of the back up item. Possible
   * values include: 'Invalid', 'NotProtected', 'Protecting', 'Protected',
   * 'ProtectionFailed'
   * @member {string} workloadItemType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkloadItem
   *
   * @returns {object} metadata of WorkloadItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkloadItem',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'workloadItemType',
          clientName: 'workloadItemType'
        },
        uberParent: 'WorkloadItem',
        className: 'WorkloadItem',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          workloadType: {
            required: false,
            serializedName: 'workloadType',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          protectionState: {
            required: false,
            serializedName: 'protectionState',
            type: {
              name: 'String'
            }
          },
          workloadItemType: {
            required: true,
            serializedName: 'workloadItemType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkloadItem;
