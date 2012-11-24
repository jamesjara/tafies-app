/*
 * File: app/store/MyJsonTreeStore1.js
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

Ext.define('JWF.store.MyJsonTreeStore1', {
    extend: 'Ext.data.TreeStore',

    config: {
        autoLoad: true,
        storeId: 'MyJsonTreeStore1',
        proxy: {
            type: 'memory',
            data: {
                title: 'El lugar m\u00e1s entretenido',
                link: 'daata',
                author: 'daata',
                publishedDate: 'daata',
                contentSnippet: 'daata',
                content: 'daata',
                leaf: true,
                id: 'ap1'
            },
            {
                title: 'Los mejores precios',
                link: 'daata',
                author: 'daata',
                publishedDate: 'daata',
                contentSnippet: 'daata',
                content: 'daata',
                leaf: true,
                id: 'ap2'
            },
            {
                title: 'Mejores promociones',
                link: 'daata',
                author: 'daata',
                publishedDate: 'daata',
                contentSnippet: 'daata',
                content: 'daata',
                leaf: true,
                id: 'ap3'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        fields: [
            {
                name: 'title'
            },
            {
                name: 'link'
            },
            {
                name: 'author'
            },
            {
                name: 'contentSnippet'
            },
            {
                name: 'content'
            },
            {
                name: 'leaf',
                defaultValue: true
            }
        ]
    }
});