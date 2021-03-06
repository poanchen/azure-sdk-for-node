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
 * Defines contents of a web application rule
 *
 */
class AzureManagedOverrideRuleGroup {
  /**
   * Create a AzureManagedOverrideRuleGroup.
   * @member {string} ruleGroupOverride Describes overrideruleGroup. Possible
   * values include: 'SqlInjection', 'XSS'
   * @member {string} action Type of Actions. Possible values include: 'Allow',
   * 'Block', 'Log'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureManagedOverrideRuleGroup
   *
   * @returns {object} metadata of AzureManagedOverrideRuleGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureManagedOverrideRuleGroup',
      type: {
        name: 'Composite',
        className: 'AzureManagedOverrideRuleGroup',
        modelProperties: {
          ruleGroupOverride: {
            required: true,
            serializedName: 'ruleGroupOverride',
            type: {
              name: 'String'
            }
          },
          action: {
            required: true,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureManagedOverrideRuleGroup;
