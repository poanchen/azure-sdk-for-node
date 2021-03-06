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
 * Class representing a ForecastPropertiesConfidenceLevelsItem.
 */
class ForecastPropertiesConfidenceLevelsItem {
  /**
   * Create a ForecastPropertiesConfidenceLevelsItem.
   * @member {number} [percentage] The percentage level of the confidence
   * @member {string} [bound] The boundary of the percentage, values could be
   * 'Upper' or 'Lower'. Possible values include: 'Upper', 'Lower'
   * @member {number} [value] The amount of forecast within the percentage
   * level
   */
  constructor() {
  }

  /**
   * Defines the metadata of ForecastPropertiesConfidenceLevelsItem
   *
   * @returns {object} metadata of ForecastPropertiesConfidenceLevelsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ForecastProperties_confidenceLevelsItem',
      type: {
        name: 'Composite',
        className: 'ForecastPropertiesConfidenceLevelsItem',
        modelProperties: {
          percentage: {
            required: false,
            readOnly: true,
            serializedName: 'percentage',
            type: {
              name: 'Number'
            }
          },
          bound: {
            required: false,
            serializedName: 'bound',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ForecastPropertiesConfidenceLevelsItem;
