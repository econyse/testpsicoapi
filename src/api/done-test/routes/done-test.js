'use strict';

/**
 * done-test router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::done-test.done-test');
