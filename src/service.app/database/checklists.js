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
				typeIds: item.types.join(',')
			});
		}
	}
}

export default ChecklistsDatabaseService;

const defaultData = {
	"identifier":"d99dfilopphpzhss52lmk",
	"typeId":"launch",
	"description":"Checklist for dual deploy launch with electronics.",
	"isDefault":true,
	"name":"Single altimeter dual deploy checklist",
	"launchTypeId":"all",
	"steps":[
		{
			"identifier":"rbl39kuhoyoow0scu0ugx",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Parachutes",
			"order":0,
			"typeId":"section",
			"steps":[
				{
					"identifier":"dawadbe7bipktr6gpg9xa",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"rbl39kuhoyoow0scu0ugx",
					"description":null,
					"name":"Drogue",
					"order":0,
					"typeId":"section",
					"steps":[
						{
							"identifier":"beb689e3-9949-426a-a21f-3c0b54433fde",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"dawadbe7bipktr6gpg9xa",
							"description":null,
							"name":"Parachute",
							"order":0,
							"recoveryTypeId":"drogue",
							"stage":1,
							"typeId":"preprecovery"
						},
						{
							"identifier":"mgK2r8RUFom591RtfSLRP",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"dawadbe7bipktr6gpg9xa",
							"description":null,
							"name":"Swivel",
							"order":1,
							"typeId":"checkable"
						},
						{
							"identifier":"wKhiBzwJNkEMJbaKlLsEC",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"dawadbe7bipktr6gpg9xa",
							"description":null,
							"name":"Attached to Booster",
							"order":2,
							"typeId":"checkable"
						},
						{
							"identifier":"brAQ0R1WR07pJnOUrdggK",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"dawadbe7bipktr6gpg9xa",
							"description":null,
							"name":"Attached to Ebay",
							"order":3,
							"typeId":"checkable"
						}
					]
				},
				{
					"identifier":"Bsuh0ExOxDWttRlZsYCfE",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"rbl39kuhoyoow0scu0ugx",
					"description":null,
					"name":"Main",
					"order":1,
					"typeId":"section",
					"steps":[
						{
							"identifier":"WuIjeYdjco10XN4J5n6sD",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"Bsuh0ExOxDWttRlZsYCfE",
							"description":null,
							"name":"Parachute",
							"order":0,
							"recoveryTypeId":"main",
							"stage":1,
							"typeId":"preprecovery"
						},
						{
							"identifier":"1cSTBFuCdIYRQKkIOlqqY",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"Bsuh0ExOxDWttRlZsYCfE",
							"description":null,
							"name":"Swivel",
							"order":1,
							"typeId":"checkable"
						},
						{
							"identifier":"Lu248swelExRR78yc08kY",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"Bsuh0ExOxDWttRlZsYCfE",
							"description":null,
							"name":"Attached to Booster",
							"order":2,
							"typeId":"checkable"
						},
						{
							"identifier":"3n7ZtJrL5CwFZ3IaSVgR1",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"Bsuh0ExOxDWttRlZsYCfE",
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
			"identifier":"rsv6ty3iuc6ufksv4brtz",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Altimeters",
			"order":1,
			"typeId":"section",
			"steps":[
				{
					"identifier":"q0blesvp87pcgmci3plcd",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"rsv6ty3iuc6ufksv4brtz",
					"description":null,
					"name":"Primary",
					"order":0,
					"typeId":"section",
					"steps":[
						{
							"identifier":"Lhr4fGKROWIQLrcELZ7Be",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"q0blesvp87pcgmci3plcd",
							"description":null,
							"name":"Insert Flag",
							"order":0,
							"typeId":"checkable"
						},
						{
							"identifier":"Kqu6sUv4NRAlFQbXOqdJk",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"q0blesvp87pcgmci3plcd",
							"description":null,
							"name":"Altimeter Setup/On",
							"order":0,
							"altimeterTypeId":"primary",
							"stage":1,
							"typeId":"prepaltimeter"
						},
						{
							"identifier":"PORdna3HxOWQ1tyfAd5lC",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"q0blesvp87pcgmci3plcd",
							"description":null,
							"name":"Drogue",
							"order":1,
							"typeId":"section",
							"steps":[
								{
									"identifier":"99DHiHO3q9gFk3FFFHfbr",
									"checklistIdentifier":"d99dfilopphpzhss52lmk",
									"parentIdentifier":"PORdna3HxOWQ1tyfAd5lC",
									"description":null,
									"name":"Ejection Charge Installed",
									"order":2,
									"stage":1,
									"altimeterTypeId":"primary",
									"altimeterRecoveryTypeId":"drogue",
									"typeId":"prepejectioncharge"
								},
								{
									"identifier":"f9NXOC0yftR9fFkktZmcn",
									"checklistIdentifier":"d99dfilopphpzhss52lmk",
									"parentIdentifier":"PORdna3HxOWQ1tyfAd5lC",
									"description":null,
									"name":"Ejection Ignitor Installed",
									"order":3,
									"typeId":"checkable"
								}
							]
						},
						{
							"identifier":"AL98xm8URij9tNACObjII",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"q0blesvp87pcgmci3plcd",
							"description":null,
							"name":"Main",
							"order":2,
							"typeId":"section",
							"steps":[
								{
									"identifier":"5HE89BND0fbMIsCe1iY2D",
									"checklistIdentifier":"d99dfilopphpzhss52lmk",
									"parentIdentifier":"AL98xm8URij9tNACObjII",
									"description":null,
									"name":"Ejection Charge Installed",
									"order":2,
									"stage":1,
									"altimeterTypeId":"primary",
									"altimeterRecoveryTypeId":"main",
									"typeId":"prepejectioncharge"
								},
								{
									"identifier":"41CgM6AhrXaSpjoTHQRYQ",
									"checklistIdentifier":"d99dfilopphpzhss52lmk",
									"parentIdentifier":"AL98xm8URij9tNACObjII",
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
			"identifier":"bnCzGw59ysJM3mirxUl1b",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Staging",
			"order":2,
			"typeId":"section",
			"steps":[
				{
					"identifier":"RGtjdhxfv4YFmQALvQL8X",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"bnCzGw59ysJM3mirxUl1b",
					"description":null,
					"name":"Booster Shear Pins",
					"order":0,
					"typeId":"checkable"
				},
				{
					"identifier":"xOiEwG3zDEe25vi310svM",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"bnCzGw59ysJM3mirxUl1b",
					"description":null,
					"name":"Payload Shear Pins",
					"order":1,
					"typeId":"checkable"
				}
			]
		},
		{
			"identifier":"ir3OrnoQtiQ9K5gmVyyu2",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Motor",
			"order":3,
			"typeId":"section",
			"steps":[
				{
					"identifier":"6knZ8K51Mr01APl23CwDg",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"ir3OrnoQtiQ9K5gmVyyu2",
					"description":null,
					"name":"Insert Motor(s)",
					"order":0,
					"stage":1,
					"typeId":"prepmotor"
				},
				{
					"identifier":"7X3c1eZ5mWJtfYlwH916B",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"ir3OrnoQtiQ9K5gmVyyu2",
					"description":null,
					"name":"Attach Retainer",
					"order":1,
					"typeId":"checkable"
				},
				{
					"identifier":"2gcpnhp5TJRlnNRLVyTYa",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"ir3OrnoQtiQ9K5gmVyyu2",
					"description":null,
					"name":"Tape Ignitor(s) to Booster",
					"order":2,
					"typeId":"checkable"
				}
			]
		},
		{
			"identifier":"giKKMtKFwGOvQvh8DtRS0",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Tracking",
			"order":4,
			"typeId":"section",
			"steps":[
				{
					"identifier":"Sdc9mGoOqmvi2mSuDzy12",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"giKKMtKFwGOvQvh8DtRS0",
					"description":null,
					"name":"Primary",
					"order":0,
					"typeId":"section",
					"steps":[
						{
							"identifier":"VqC1ESUewsImYevX5Bf50",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"Sdc9mGoOqmvi2mSuDzy12",
							"description":null,
							"name":"GPS On",
							"order":1,
							"typeId":"checkable"
						},
						{
							"identifier":"H5sesqAUMIR4gpaBLEVTh",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"Sdc9mGoOqmvi2mSuDzy12",
							"description":null,
							"name":"Ground Station On",
							"order":2,
							"typeId":"checkable"
						},
						{
							"identifier":"BvJ5VXG4A1S180AX9TTQC",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"giKKMtKFwGOvQvh8DtRS0",
							"description":null,
							"name":"Verify Tracking",
							"order":3,
							"typeId":"checkable"
						},
						{
							"identifier":"EeKKtOecuN3BfZBVrMmx6",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"giKKMtKFwGOvQvh8DtRS0",
							"description":null,
							"name":"Installed",
							"order":3,
							"typeId":"checkable"
						}
					]
				},
				{
					"identifier":"uRZ5855rd9ONqAggyziw4",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"giKKMtKFwGOvQvh8DtRS0",
					"description":null,
					"name":"Secondary",
					"order":2,
					"typeId":"section",
					"steps":[
						{
							"identifier":"l1pUrcjqtmZJgqmOzrGTY",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"uRZ5855rd9ONqAggyziw4",
							"description":null,
							"name":"GPS On",
							"order":1,
							"typeId":"checkable"
						},
						{
							"identifier":"OpnzyTKTZ03xdTUymy1jZ",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"uRZ5855rd9ONqAggyziw4",
							"description":null,
							"name":"Ground Station On",
							"order":2,
							"typeId":"checkable"
						},
						{
							"identifier":"57PUdBQm4QsMDSNC2JTKo",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"uRZ5855rd9ONqAggyziw4",
							"description":null,
							"name":"Verify Tracking",
							"order":3,
							"typeId":"checkable"
						},
						{
							"identifier":"OWRdFKjO5nGbuXAdUPIvc",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"uRZ5855rd9ONqAggyziw4",
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
			"identifier":"eX8QXlJdMGcyHgBoYvBZS",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Camera",
			"order":5,
			"typeId":"section",
			"steps":[
				{
					"identifier":"6dCQYI1sWMxKEHggNXeAw",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"eX8QXlJdMGcyHgBoYvBZS",
					"description":null,
					"name":"Turn On",
					"order":0,
					"typeId":"checkable"
				},
				{
					"identifier":"EgCp3OUHqhN2Do8IGkdJa",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"eX8QXlJdMGcyHgBoYvBZS",
					"description":null,
					"name":"Install",
					"order":1,
					"typeId":"checkable"
				}
			]
		},
		{
			"identifier":"oR4mN06IZgfBf31rL64SB",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"On Rail",
			"order":7,
			"typeId":"section",
			"steps":[
				{
					"identifier":"zeXMLWoVeeCM2JIcigjyC",
					"checklistIdentifier":"d99dfilopphpzhss52lmk",
					"parentIdentifier":"oR4mN06IZgfBf31rL64SB",
					"description":null,
					"name":"Primary",
					"order":0,
					"typeId":"section",
					"steps":[
						{
							"identifier":"QMqlCiioFPveEqGq4b6Z8",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"zeXMLWoVeeCM2JIcigjyC",
							"description":null,
							"name":"Pull flag",
							"order":0,
							"typeId":"checkable"
						},
						{
							"identifier":"HcLjAsaNsyXZhzfNkvKCf",
							"checklistIdentifier":"d99dfilopphpzhss52lmk",
							"parentIdentifier":"zeXMLWoVeeCM2JIcigjyC",
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
			"identifier":"81zwFFizbzSY5uDYczDvu",
			"checklistIdentifier":"d99dfilopphpzhss52lmk",
			"parentIdentifier":"d99dfilopphpzhss52lmk",
			"description":null,
			"name":"Launch",
			"order":8,
			"typeId":"Launch"
		}
	]
};
