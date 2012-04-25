/*
 * File: app/view/DetailPanel.js
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

Ext.define('CityBarsPlus.view.DetailPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.detailpanel',

    config: {
        tabBar: {
            docked: 'bottom',
            ui: 'light',
            layout: {
                pack: 'center',
                type: 'hbox'
            }
        },
        items: [
            {
                xtype: 'container',
                id: 'contact',
                title: 'Contact',
                iconCls: 'info',
                items: [
                    {
                        xtype: 'container',
                        id: 'info',
                        padding: 10,
                        tpl: [
                            '<img class="photo" src="{photo_url}" width="100" height="100"/>;<h2>{name}</h2><div class="info">{address1}<br/><imm src="{rating_img_url_sall}"/></div>'
                        ],
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'component',
                                height: 100,
                                id: 'photo',
                                tpl: [
                                    '<img class="photo" src="{photo_url}" width="100" height="100"/>'
                                ],
                                width: 100
                            },
                            {
                                xtype: 'component',
                                id: 'data',
                                padding: 10,
                                tpl: [
                                    '<h2>{name}</h2><div class="info">{address1}<br/><img src="{rating_img_url_small}"/></div>'
                                ],
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: 10,
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                minWidth: 100,
                                text: 'Call'
                            },
                            {
                                xtype: 'spacer',
                                minWidth: 40
                            },
                            {
                                xtype: 'button',
                                minWidth: 100,
                                text: 'More'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'map',
                id: 'detailMap',
                title: 'MyMap',
                iconCls: 'maps'
            }
        ]
    }

});