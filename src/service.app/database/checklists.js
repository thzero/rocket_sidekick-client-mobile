// import LibraryCommonUtility from '@thzero/library_common/utility';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import BaseDatabaseService from '@/service.app/database/index';

class ChecklistsDatabaseService extends BaseDatabaseService {
	async checklist(correlationId, id) {
		throw NotImplementedError();
	}

	async checklists(correlationId, params) {
		throw NotImplementedError();
	}

	async checklistsClear(correlationId) {
		throw NotImplementedError();
	}

	async checklistsIsEmpty(correlationId) {
		throw NotImplementedError();
	}

	async _load(correlationId) {
		for (const item of defaultData) {
			this.checklistsLoad(correlationId, item.id, {
				json: JSON.stringify(item),
				name: item.name,
				typeId: item.typeId
			});
		}
	}
}

export default ChecklistsDatabaseService;

const defaultData = [
	{
		"id":"d99dfilopphpzhss52lmk",
		"ownerId": "aeUlOLSfDtwt5glvblEDl",
		"typeId":"launch",
		"description":"Checklist for dual deploy launch with electronics.",
		"isDefault":true,
		"name":"Single altimeter dual deploy checklist",
		"launchTypeId":"all",
		"steps":[
			{
				"id":"rbl39kuhoyoow0scu0ugx",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Parachutes",
				"order":0,
				"typeId":"section",
				"steps":[
					{
						"id":"dawadbe7bipktr6gpg9xa",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"rbl39kuhoyoow0scu0ugx",
						"description":null,
						"name":"Drogue",
						"order":0,
						"typeId":"section",
						"steps":[
							{
								"id":"beb689e3-9949-426a-a21f-3c0b54433fde",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"dawadbe7bipktr6gpg9xa",
								"description":null,
								"name":"Parachute",
								"order":0,
								"recoveryTypeId":"drogue",
								"stage":1,
								"typeId":"preprecovery"
							},
							{
								"id":"mgK2r8RUFom591RtfSLRP",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"dawadbe7bipktr6gpg9xa",
								"description":null,
								"name":"Swivel",
								"order":1,
								"typeId":"checkable"
							},
							{
								"id":"wKhiBzwJNkEMJbaKlLsEC",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"dawadbe7bipktr6gpg9xa",
								"description":null,
								"name":"Attached to Booster",
								"order":2,
								"typeId":"checkable"
							},
							{
								"id":"brAQ0R1WR07pJnOUrdggK",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"dawadbe7bipktr6gpg9xa",
								"description":null,
								"name":"Attached to Ebay",
								"order":3,
								"typeId":"checkable"
							}
						]
					},
					{
						"id":"Bsuh0ExOxDWttRlZsYCfE",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"rbl39kuhoyoow0scu0ugx",
						"description":null,
						"name":"Main",
						"order":1,
						"typeId":"section",
						"steps":[
							{
								"id":"WuIjeYdjco10XN4J5n6sD",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"Bsuh0ExOxDWttRlZsYCfE",
								"description":null,
								"name":"Parachute",
								"order":0,
								"recoveryTypeId":"main",
								"stage":1,
								"typeId":"preprecovery"
							},
							{
								"id":"1cSTBFuCdIYRQKkIOlqqY",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"Bsuh0ExOxDWttRlZsYCfE",
								"description":null,
								"name":"Swivel",
								"order":1,
								"typeId":"checkable"
							},
							{
								"id":"Lu248swelExRR78yc08kY",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"Bsuh0ExOxDWttRlZsYCfE",
								"description":null,
								"name":"Attached to Booster",
								"order":2,
								"typeId":"checkable"
							},
							{
								"id":"3n7ZtJrL5CwFZ3IaSVgR1",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"Bsuh0ExOxDWttRlZsYCfE",
								"description":null,
								"name":"Attached to Ebay",
								"order":3,
								"typeId":"checkable"
							}
						]
					}
				]
			},
			{
				"id":"rsv6ty3iuc6ufksv4brtz",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Altimeters",
				"order":1,
				"typeId":"section",
				"steps":[
					{
						"id":"q0blesvp87pcgmci3plcd",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"rsv6ty3iuc6ufksv4brtz",
						"description":null,
						"name":"Primary",
						"order":0,
						"typeId":"section",
						"steps":[
							{
								"id":"Lhr4fGKROWIQLrcELZ7Be",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"q0blesvp87pcgmci3plcd",
								"description":null,
								"name":"Insert Flag",
								"order":0,
								"typeId":"checkable"
							},
							{
								"id":"Kqu6sUv4NRAlFQbXOqdJk",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"q0blesvp87pcgmci3plcd",
								"description":null,
								"name":"Altimeter Setup/On",
								"order":0,
								"altimeterTypeId":"primary",
								"stage":1,
								"typeId":"prepaltimeter"
							},
							{
								"id":"PORdna3HxOWQ1tyfAd5lC",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"q0blesvp87pcgmci3plcd",
								"description":null,
								"name":"Drogue",
								"order":1,
								"typeId":"section",
								"steps":[
									{
										"id":"99DHiHO3q9gFk3FFFHfbr",
										"checklistId":"d99dfilopphpzhss52lmk",
										"parentId":"PORdna3HxOWQ1tyfAd5lC",
										"description":null,
										"name":"Ejection Charge Installed",
										"order":2,
										"stage":1,
										"altimeterTypeId":"primary",
										"altimeterRecoveryTypeId":"drogue",
										"typeId":"prepejectioncharge"
									},
									{
										"id":"f9NXOC0yftR9fFkktZmcn",
										"checklistId":"d99dfilopphpzhss52lmk",
										"parentId":"PORdna3HxOWQ1tyfAd5lC",
										"description":null,
										"name":"Ejection Ignitor Installed",
										"order":3,
										"typeId":"checkable"
									}
								]
							},
							{
								"id":"AL98xm8URij9tNACObjII",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"q0blesvp87pcgmci3plcd",
								"description":null,
								"name":"Main",
								"order":2,
								"typeId":"section",
								"steps":[
									{
										"id":"5HE89BND0fbMIsCe1iY2D",
										"checklistId":"d99dfilopphpzhss52lmk",
										"parentId":"AL98xm8URij9tNACObjII",
										"description":null,
										"name":"Ejection Charge Installed",
										"order":2,
										"stage":1,
										"altimeterTypeId":"primary",
										"altimeterRecoveryTypeId":"main",
										"typeId":"prepejectioncharge"
									},
									{
										"id":"41CgM6AhrXaSpjoTHQRYQ",
										"checklistId":"d99dfilopphpzhss52lmk",
										"parentId":"AL98xm8URij9tNACObjII",
										"description":null,
										"name":"Ejection Ignitor Installed",
										"order":3,
										"typeId":"checkable"
									}
								]
							}
						]
					}
				]
			},
			{
				"id":"bnCzGw59ysJM3mirxUl1b",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Staging",
				"order":2,
				"typeId":"section",
				"steps":[
					{
						"id":"RGtjdhxfv4YFmQALvQL8X",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"bnCzGw59ysJM3mirxUl1b",
						"description":null,
						"name":"Booster Shear Pins",
						"order":0,
						"typeId":"checkable"
					},
					{
						"id":"xOiEwG3zDEe25vi310svM",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"bnCzGw59ysJM3mirxUl1b",
						"description":null,
						"name":"Payload Shear Pins",
						"order":1,
						"typeId":"checkable"
					}
				]
			},
			{
				"id":"ir3OrnoQtiQ9K5gmVyyu2",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Motor",
				"order":3,
				"typeId":"section",
				"steps":[
					{
						"id":"6knZ8K51Mr01APl23CwDg",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"ir3OrnoQtiQ9K5gmVyyu2",
						"description":null,
						"name":"Insert Motor(s)",
						"order":0,
						"stage":1,
						"typeId":"prepmotor"
					},
					{
						"id":"7X3c1eZ5mWJtfYlwH916B",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"ir3OrnoQtiQ9K5gmVyyu2",
						"description":null,
						"name":"Attach Retainer",
						"order":1,
						"typeId":"checkable"
					},
					{
						"id":"2gcpnhp5TJRlnNRLVyTYa",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"ir3OrnoQtiQ9K5gmVyyu2",
						"description":null,
						"name":"Tape Ignitor(s) to Booster",
						"order":2,
						"typeId":"checkable"
					}
				]
			},
			{
				"id":"giKKMtKFwGOvQvh8DtRS0",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Tracking",
				"order":4,
				"typeId":"section",
				"steps":[
					{
						"id":"Sdc9mGoOqmvi2mSuDzy12",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"giKKMtKFwGOvQvh8DtRS0",
						"description":null,
						"name":"Primary",
						"order":0,
						"typeId":"section",
						"steps":[
							{
								"id":"VqC1ESUewsImYevX5Bf50",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"Sdc9mGoOqmvi2mSuDzy12",
								"description":null,
								"name":"GPS On",
								"order":1,
								"typeId":"checkable"
							},
							{
								"id":"H5sesqAUMIR4gpaBLEVTh",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"Sdc9mGoOqmvi2mSuDzy12",
								"description":null,
								"name":"Ground Station On",
								"order":2,
								"typeId":"checkable"
							},
							{
								"id":"BvJ5VXG4A1S180AX9TTQC",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"giKKMtKFwGOvQvh8DtRS0",
								"description":null,
								"name":"Verify Tracking",
								"order":3,
								"typeId":"checkable"
							},
							{
								"id":"EeKKtOecuN3BfZBVrMmx6",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"giKKMtKFwGOvQvh8DtRS0",
								"description":null,
								"name":"Installed",
								"order":3,
								"typeId":"checkable"
							}
						]
					},
					{
						"id":"uRZ5855rd9ONqAggyziw4",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"giKKMtKFwGOvQvh8DtRS0",
						"description":null,
						"name":"Secondary",
						"order":2,
						"typeId":"section",
						"steps":[
							{
								"id":"l1pUrcjqtmZJgqmOzrGTY",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"uRZ5855rd9ONqAggyziw4",
								"description":null,
								"name":"GPS On",
								"order":1,
								"typeId":"checkable"
							},
							{
								"id":"OpnzyTKTZ03xdTUymy1jZ",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"uRZ5855rd9ONqAggyziw4",
								"description":null,
								"name":"Ground Station On",
								"order":2,
								"typeId":"checkable"
							},
							{
								"id":"57PUdBQm4QsMDSNC2JTKo",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"uRZ5855rd9ONqAggyziw4",
								"description":null,
								"name":"Verify Tracking",
								"order":3,
								"typeId":"checkable"
							},
							{
								"id":"OWRdFKjO5nGbuXAdUPIvc",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"uRZ5855rd9ONqAggyziw4",
								"description":null,
								"name":"Installed",
								"order":3,
								"typeId":"checkable"
							}
						]
					}
				]
			},
			{
				"id":"eX8QXlJdMGcyHgBoYvBZS",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Camera",
				"order":5,
				"typeId":"section",
				"steps":[
					{
						"id":"6dCQYI1sWMxKEHggNXeAw",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"eX8QXlJdMGcyHgBoYvBZS",
						"description":null,
						"name":"Turn On",
						"order":0,
						"typeId":"checkable"
					},
					{
						"id":"EgCp3OUHqhN2Do8IGkdJa",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"eX8QXlJdMGcyHgBoYvBZS",
						"description":null,
						"name":"Install",
						"order":1,
						"typeId":"checkable"
					}
				]
			},
			{
				"id":"oR4mN06IZgfBf31rL64SB",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"On Rail",
				"order":7,
				"typeId":"section",
				"steps":[
					{
						"id":"zeXMLWoVeeCM2JIcigjyC",
						"checklistId":"d99dfilopphpzhss52lmk",
						"parentId":"oR4mN06IZgfBf31rL64SB",
						"description":null,
						"name":"Primary",
						"order":0,
						"typeId":"section",
						"steps":[
							{
								"id":"QMqlCiioFPveEqGq4b6Z8",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"zeXMLWoVeeCM2JIcigjyC",
								"description":null,
								"name":"Pull flag",
								"order":0,
								"typeId":"checkable"
							},
							{
								"id":"HcLjAsaNsyXZhzfNkvKCf",
								"checklistId":"d99dfilopphpzhss52lmk",
								"parentId":"zeXMLWoVeeCM2JIcigjyC",
								"description":null,
								"name":"Verify arming",
								"order":1,
								"typeId":"checkable"
							}
						]
					}
				]
			},
			{
				"id":"81zwFFizbzSY5uDYczDvu",
				"checklistId":"d99dfilopphpzhss52lmk",
				"parentId":"d99dfilopphpzhss52lmk",
				"description":null,
				"name":"Launch",
				"order":8,
				"typeId":"Launch"
			}
		]
	}
];
