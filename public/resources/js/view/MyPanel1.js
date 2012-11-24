/*
 * File: app/view/MyPanel1.js
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

Ext.define('JWF.view.MyPanel1', {
    extend: 'Ext.Panel',
    config: {
        fullscreen: true,
        items: [
				{
					height: '100%',
					width: '100%',
                    xtype: 'nestedlist',
                    title: 'TOPs',
                    iconCls: 'star',
                    displayField: 'title',
                    store: {
						autoload:true,
                        type: 'tree',
                        fields: [
                            'title', 'link', 'author', 'contentSnippet', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],
                        root: {
                            leaf: false
                        },
                        proxy: {
							type: 'jsonp',
							url: 'http://news.innosystem.org/data.php',
							reader: {
								type: 'json',
								rootProperty: 'data'
							}
                        }
                    },
                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },
                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                }
        ]
    }
});