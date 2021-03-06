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
 * The ssh username, password, and ssh public key.
 *
 */
class LinuxOperatingSystemProfile {
  /**
   * Create a LinuxOperatingSystemProfile.
   * @property {string} [username] The username.
   * @property {string} [password] The password.
   * @property {object} [sshProfile] The SSH profile.
   * @property {array} [sshProfile.publicKeys] The list of SSH public keys.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LinuxOperatingSystemProfile
   *
   * @returns {object} metadata of LinuxOperatingSystemProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LinuxOperatingSystemProfile',
      type: {
        name: 'Composite',
        className: 'LinuxOperatingSystemProfile',
        modelProperties: {
          username: {
            required: false,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          sshProfile: {
            required: false,
            serializedName: 'sshProfile',
            type: {
              name: 'Composite',
              className: 'SshProfile'
            }
          }
        }
      }
    };
  }
}

module.exports = LinuxOperatingSystemProfile;
