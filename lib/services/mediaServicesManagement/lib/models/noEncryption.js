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
 * Class for NoEncryption scheme
 *
 */
class NoEncryption {
  /**
   * Create a NoEncryption.
   * @property {object} [enabledProtocols] Representing supported protocols
   * @property {boolean} [enabledProtocols.download] Enable Download protocol
   * or not
   * @property {boolean} [enabledProtocols.dash] Enable DASH protocol or not
   * @property {boolean} [enabledProtocols.hls] Enable HLS protocol or not
   * @property {boolean} [enabledProtocols.smoothStreaming] Enable
   * SmoothStreaming protocol or not
   */
  constructor() {
  }

  /**
   * Defines the metadata of NoEncryption
   *
   * @returns {object} metadata of NoEncryption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NoEncryption',
      type: {
        name: 'Composite',
        className: 'NoEncryption',
        modelProperties: {
          enabledProtocols: {
            required: false,
            serializedName: 'enabledProtocols',
            type: {
              name: 'Composite',
              className: 'EnabledProtocols'
            }
          }
        }
      }
    };
  }
}

module.exports = NoEncryption;
