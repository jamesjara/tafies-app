/*
 * File: app/view/MyPanel2.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('JWF.view.MyPanel2', {
    extend: 'Ext.Panel',

    config: {
        padding: '15 15 15 15',
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                title: 'Perfil'
            },
            {
                xtype: 'fieldset',
                title: 'Gustos Musical',
                items: [
                    {
                        xtype: 'checkboxfield',
                        flex: 1,
                        label: 'Rock'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Reggae'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Electronica'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Ambiente'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Otros'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Cuidades',
                items: [
                    {
                        xtype: 'checkboxfield',
                        flex: 1,
                        label: 'San Jose'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Heredia'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Alajuela'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Puntarenas'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Cartago'
                    }
                ]
            },
            {
                xtype: 'button',
                id: '',
                ui: 'facebook',
                text: 'Guardar Cambios'
            }
        ]
    }

});