define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "190164f5-2959-4cba-bc21-661e30c56c30",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_4eso9rs",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_4eso9rs"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_2heqcqg",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_2heqcqg"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_n3ir1h9",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_n3ir1h9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_z8ub01o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_z8ub01o_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_qtu3c6s",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_qtu3c6s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_4ilsy9z",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4ilsy9z_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_fbk8ft6",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_fbk8ft6",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_c1hkgle",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_c1hkgle_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ebk2fzc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_c1hkgle",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tw2m37p",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ebk2fzc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_le7j2dj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_le7j2dj_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_tw2m37p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_h2p3vi7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_h2p3vi7_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_qbep989DS"
						}
					}
				},
				"parentName": "FlexContainer_tw2m37p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_kqe12tg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_kqe12tg_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_tw2m37p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_p76sago",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_p76sago_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kqe12tg",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_28on879",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_28on879_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kqe12tg",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_69xpj89",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_69xpj89_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_69xpj89_GridDetail_qbep989",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_qbep989"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_69xpj89_SearchValue",
							"GridDetailSearchFilter_69xpj89_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_tw2m37p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xufb0s7",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_c1hkgle",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_qbep989",
					"activeRow": "$GridDetail_qbep989_ActiveRow",
					"selectionState": "$GridDetail_qbep989_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_qbep989_SelectionState"
					},
					"primaryColumnName": "GridDetail_qbep989DS_Id",
					"columns": [
						{
							"id": "928eb920-be3b-cab1-dcec-8b74f93fd469",
							"code": "GridDetail_qbep989DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_qbep989DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 187
						},
						{
							"id": "09d2dde7-66d3-e00d-36ab-b80d2bc5b820",
							"code": "GridDetail_qbep989DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_qbep989DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 176
						},
						{
							"id": "b80f9057-e099-8df4-6676-267d275f9b3c",
							"code": "GridDetail_qbep989DS_UsrComment",
							"caption": "#ResourceString(GridDetail_qbep989DS_UsrComment)#",
							"dataValueType": 28,
							"width": 223
						},
						{
							"id": "68c1c1cf-7b46-198d-737f-0a57a425624c",
							"code": "GridDetail_qbep989DS_UsrOwner",
							"caption": "#ResourceString(GridDetail_qbep989DS_UsrOwner)#",
							"dataValueType": 10,
							"width": 185
						},
						{
							"id": "4a5eb7b3-013a-1bcc-dfc9-f1391d9883e1",
							"code": "GridDetail_qbep989DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_qbep989DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 185
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_xufb0s7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qbep989_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_qbep989DS",
							"filters": "$GridDetail_qbep989 | crt.ToCollectionFilters : 'GridDetail_qbep989' : $GridDetail_qbep989_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qbep989_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qbep989_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_qbep989DS",
							"filters": "$GridDetail_qbep989 | crt.ToCollectionFilters : 'GridDetail_qbep989' : $GridDetail_qbep989_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qbep989_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_qbep989_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qbep989_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_qbep989 | crt.ToCollectionFilters : 'GridDetail_qbep989' : $GridDetail_qbep989_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qbep989_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_qbep989_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_qbep989DS",
							"filters": "$GridDetail_qbep989 | crt.ToCollectionFilters : 'GridDetail_qbep989' : $GridDetail_qbep989_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qbep989_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_4eso9rs": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrArea_2heqcqg": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrType_n3ir1h9": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_qtu3c6s": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_fbk8ft6": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"GridDetail_qbep989": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_qbep989DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_69xpj89_GridDetail_qbep989",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_qbep989DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_qbep989DS.UsrVisitDateTime"
									}
								},
								"GridDetail_qbep989DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_qbep989DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_qbep989DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_qbep989DS.UsrComment"
									}
								},
								"GridDetail_qbep989DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_qbep989DS.UsrOwner"
									}
								},
								"GridDetail_qbep989DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_qbep989DS.CreatedOn"
									}
								},
								"GridDetail_qbep989DS_Id": {
									"modelConfig": {
										"path": "GridDetail_qbep989DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_qbep989DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty"
						},
						"scope": "page"
					},
					"GridDetail_qbep989DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
	        request: "crt.HandleViewModelAttributeChangeRequest",
	        
	        handler: async (request, next) => {

	            if (request.attributeName === 'PDS_UsrPrice_4eso9rs') {

					const sysSettingsService = new sdk.SysSettingsService();
	                const price = await request.$context.PDS_UsrPrice_4eso9rs;
					const sysSettingObject = await sysSettingsService.getByCode('MinPriceToRequireRealtyComment');

	                if (price > sysSettingObject.value) {
	                    request.$context.enableAttributeValidator('PDS_UsrComment_fbk8ft6', 'required');
	                } else {
	                    request.$context.disableAttributeValidator('PDS_UsrComment_fbk8ft6', 'required');
	                }
	            }

	            return next?.handle(request);
		    }
	      }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});