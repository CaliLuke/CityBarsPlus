/*
 * File: app/controller/Business.js
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

Ext.define('CityBarsPlus.controller.Business', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            dataList: '#dataList',
            listCard: '#listCard',
            mainNav: {
                selector: 'mainnav',
                xtype: 'mainnav',
                autoCreate: true
            },
            detailCard: '#detailCard'
        },

        control: {
            "#dataList": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        var me = this, map, lat, long, loc, marker, info, details;
        if (record) {
            details = Ext.create('CityBarsPlus.view.DetailPanel', {
                title: 'Details'
            });

            // set the map
            map = details.child('#detailMap');
            lat = record.get('latitude');
            long = record.get('longitude');

            map.setMapOptions({
                zoom: 18
            });

            map.setMapCenter({
                latitude: lat,
                longitude: long
            });

            // set the info
            info = details.child('#contact').child('#info');
            info.child('#photo').setData(record.data);
            info.child('#data').setData(record.data);

            me.getMainNav().push(details);
        }
    }

});