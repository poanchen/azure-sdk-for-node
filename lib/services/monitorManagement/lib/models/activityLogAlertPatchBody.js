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
 * @class
 * Initializes a new instance of the ActivityLogAlertPatchBody class.
 * @constructor
 * An activity log alert object for the body of patch operations.
 *
 * @member {object} [tags] Resource tags
 * 
 * @member {boolean} [enabled] Indicates whether this activity log alert is
 * enabled. If an activity log alert is not enabled, then none of its actions
 * will be activated. Default value: true .
 * 
 */
function ActivityLogAlertPatchBody() {
}

/**
 * Defines the metadata of ActivityLogAlertPatchBody
 *
 * @returns {object} metadata of ActivityLogAlertPatchBody
 *
 */
ActivityLogAlertPatchBody.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ActivityLogAlertPatchBody',
    type: {
      name: 'Composite',
      className: 'ActivityLogAlertPatchBody',
      modelProperties: {
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        enabled: {
          required: false,
          serializedName: 'properties.enabled',
          defaultValue: true,
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = ActivityLogAlertPatchBody;