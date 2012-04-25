/*
 * File: app/controller/Search.js
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

Ext.define('CityBarsPlus.controller.Search', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            "textfield": {
                keyup: 'onInputCategoryKeyup',
                clearicontap: 'onInputCategoryClearicontap'
            },
            "#searchButton": {
                tap: 'onButtonTap'
            }
        }
    },

    onInputCategoryKeyup: function(textfield, e, options) {
        if(Ext.getCmp('inputCategory').getValue().length>0 && Ext.getCmp('inputCity').getValue().length>0){
            Ext.getCmp('searchButton').enable();
        } else {
            Ext.getCmp('searchButton').disable();
        }
    },

    onInputCategoryClearicontap: function(text, e, options) {
        Ext.getCmp('searchButton').disable();

    },

    onButtonTap: function(button, e, options) {
        var me = this; 

        var business = me.getApplication().getController('Business');

        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(business.getMainNav());
        Ext.Viewport.setActiveItem(1);

        Ext.Viewport.setMasked({ message: 'Loading...' });
        // get the location, then...

        /*
        me.getLocation(function (location) {

        // then use Yelp to get the businesses

        me.getBusinesses(location, function (store) {

            // then bind data to list and show it

            me.getDataList().setStore(store);
            Ext.Viewport.setMasked(false);
        });
    });

    */

    CityBarsPlus.Init.city = Ext.getCmp('inputCity').getValue();
    CityBarsPlus.Init.term = Ext.getCmp('inputCategory').getValue();

    //Ext.getCmp('yelpToolbar').setTitle('Please wait...');

    var store = Ext.data.StoreManager.lookup('BusinessStore');

    if(!Ext.getCmp('dataList').getStore()){
        Ext.getCmp('dataList').setStore(store);
    } else {
        Ext.getCmp('dataList').getStore().removeAll();
    }

    //re-do removeAll later


    Ext.getCmp('dataList').getStore().load({
        params:{
            ywsid:CityBarsPlus.Init.apiKey,
            term:CityBarsPlus.Init.term,
            location:CityBarsPlus.Init.city
        }
    });

    Ext.Viewport.setMasked(false);

    /*                            
    if (YelpTouch.Init.city && YelpTouch.Init.term) {                                                              
    this.setActiveItem(1);}
    */
    }

});