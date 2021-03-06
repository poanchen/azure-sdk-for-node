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
 * Payload for Publish operation on EnvironmentSetting.
 *
 */
class PublishPayload {
  /**
   * Create a PublishPayload.
   * @property {boolean} [useExistingImage] Whether to use existing VM custom
   * image when publishing.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PublishPayload
   *
   * @returns {object} metadata of PublishPayload
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublishPayload',
      type: {
        name: 'Composite',
        className: 'PublishPayload',
        modelProperties: {
          useExistingImage: {
            required: false,
            serializedName: 'useExistingImage',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PublishPayload;
