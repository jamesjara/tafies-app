/*
 * File: app/view/Login.js
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

Ext.define('JWF.view.Login', {
    extend: 'Ext.Container',

    config: {
        padding: 20,
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                cls: [
                    'jogToolbar'
                ],
                docked: 'top'
            }
        ]
    },

    showLoginText: function() {
        var redirectUrl = Ext.Object.toQueryString({
            redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
            client_id: JWF.app.facebookAppId,
            response_type: 'token'
        });

        this.setHtml([
        '<h2>Bienvenido a Tafies</h2>',
        '<p>Con esta aplicaci�n encontraras el mejor entretenimiento del momento(un rango de 4 horas aproximadamente).</p>',
        '<p>En orden para utilizar Tafies debes iniciar sesi�n con tu cuenta de Facebook.</p>',
        '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',
        '<div class="fb-facepile" data-app-id="' + JWF.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>'
        ].join(''));

        FB.XFBML.parse(document.getElementById('splash'));
    }

});