'use strict';

/**
 * done-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::done-test.done-test');
