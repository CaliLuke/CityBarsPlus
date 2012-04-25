/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Business'
    ],
    stores: [
        'BusinessStore'
    ],
    views: [
        'MainNav',
        'ListContainer',
        'DetailPanel',
        'searchForm'
    ],
    name: 'CityBarsPlus',
    controllers: [
        'Business',
        'Search'
    ],

    launch: function() {
        CityBarsPlus.Init = {};

        // NOTE ABOUT YELP KEY
        // You must use your own yelp key, available by registering (for free) with Yelp:
        // http://www.yelp.com/developers/getting_started/api_overview
        // (in this app, we use the Review Search API v1.0)

        CityBarsPlus.Init.apiKey = '/* Yelp API key goes here */';
        CityBarsPlus.Init.term='';
        CityBarsPlus.Init.city='';
        Ext.create('CityBarsPlus.view.searchForm', {fullscreen: true});
    }

});
