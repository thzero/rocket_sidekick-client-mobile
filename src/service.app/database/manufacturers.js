// import LibraryCommonUtility from '@thzero/library_common/utility';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import BaseDatabaseService from '@/service.app/database/index';

class BaseManufacturersDatabaseService extends BaseDatabaseService {
	async manufacturer(correlationId, id) {
		throw NotImplementedError();
	}

	async manufacturers(correlationId, params) {
		throw NotImplementedError();
	}

	async manufacturersClear(correlationId) {
		throw NotImplementedError();
	}

	async manufacturersIsEmpty(correlationId) {
		throw NotImplementedError();
	}

	async _load(correlationId) {
		for (const item of defaultData) {
			this.manufacturersLoad(correlationId, item.id, {
				json: JSON.stringify(item),
				name: item.name,
				typeIds: item.types.join(',')
			});
		}
	}
}

export default BaseManufacturersDatabaseService;

const defaultData = [
    {
        "id": "x1sJln9TkTX9PCdjb7FWd",
        "name": "LOC Precision",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "Ps0sZYmOdJzjklM7fwZeJ",
        "name": "Top Flight Recovery, LLC",
        "types": [
            "blanket",
            "parachute"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "qm8p9SEaxIpLVfUPrKt0e",
        "name": "JollyLogic",
        "types": [
            "altimeter",
            "chuteRelease"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "hggR6NjmJcRe22DdGAQ8W",
        "name": "Missileworks",
        "types": [
            "altimeter",
            "tracker"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "Vq9ZHW6Os1qsXDakIwgBo",
        "name": "Eggtimer Rocketry",
        "types": [
            "altimeter",
            "tracker"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "x64qK1AGpX3zqD7GoEW2c",
        "name": "Rocketman",
        "types": [
            "blanket",
            "deploymentbag",
            "parachute",
            "rocket",
            "streamer"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "vBVukyjbRFDatga55HK0H",
        "tcId": "Estes",
        "name": "Estes Industries",
        "types": [
            "motor",
            "parachute",
            "rocket",
            "streamer"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "iNnpocURjOVmPT4cgUv4k",
        "name": "Apogee Components",
        "types": [
            "motor",
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "hHO8FL4yyhauSB6Hf2nx9",
        "name": "Fruity Chutes",
        "types": [
            "blanket",
            "deploymentbag",
            "parachute",
            "streamer"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "rpYavoCNREI5K6l7yJgBh",
        "name": "Featherweight",
        "types": [
            "altimeter",
            "tracker"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "rmcZFP0525rPXZEXcemvc",
        "name": "Madcow Rocketry",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "uHL1IZpTXkVJJzBJ4rCa6",
        "name": "Rocketarium",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "RKcEc6HodR4ZkN7wkF8eD",
        "name": "Wildman Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "vrpA58YkNN8JkRVU0qulS",
        "tcId": "AeroTech",
        "name": "AeroTech/Quest",
        "types": [
            "motor",
            "motorcase",
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "tLVvkwTNXDfzE7lTxUyWk",
        "tcId": "Cesaroni",
        "name": "Cesaroni Technology",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "OHp40azSRoXbXa1RQKaXM",
        "tcId": "Loki",
        "name": "Loki Research",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "YKVM57JKavUbu3TwFfU57",
        "name": "Recon Recovery",
        "types": [
            "parachute"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "UyyELygKrDrE7istlMZWP",
        "name": "Sky Angle",
        "types": [
            "blanket",
            "deploymentbag",
            "parachute"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "d37HEk5Wjm3mmV4InK90U",
        "name": "User",
        "types": [
            "altimeter",
            "blanket",
            "deploymentbag",
            "motor",
            "motorCase",
            "parachute",
            "rocket",
            "streamer",
            "tracker"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "3C1o17n6yYMrAC1gRvWrO",
        "name": "Public Missile",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "90CMC9Z3c4beTRUYQUoVI",
        "name": "Composite Warehouse",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "HSnZtahB8049CcLHdgzL6",
        "name": "Giant Leap Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "4tRKY2VAXdVuJQHlqAx8g",
        "name": "Mach 1 Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "sKyWFrUxMqlGPZCB8cytc",
        "name": "Dynasoar Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "TCS1G8DebB7kUOjOLRWF3",
        "name": "Mac Performance Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "xY5YqM9qO0ZMxmH8d5Rod",
        "name": "Spherachutes",
        "types": [
            "parachute"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "vYfWgO0PbSgdN9bjZj0SC",
        "name": "Bama Chutes",
        "types": [
            "parachute"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "bu3R2p58MPdmFY8nSTNtc",
        "name": "North Coast Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "d5Lcxp4uMuFTKFxqubKH4",
        "name": "Balsa Machining Service",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "HQbjYO1AvhzGtBlSgmpVy",
        "name": "Modelrockets.us",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "7QE5uMsaIIQOlg61vHhmS",
        "name": "Buy Rocket Motors",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "dqWVTGLgUug9QikYjWHYR",
        "name": "Sirius Rocketry",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "IfYA2scd9Rtx7S9F0NEgc",
        "name": "SEMROC",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "V6ZfwMssLaO4Si6qsztT2",
        "name": "Altaira Rocketry",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "3cCdt0yfJb13vxYOJvD18",
        "name": "Dr Zooch Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "wACp4H2I5LGSjhIqLOe54",
        "name": "MPC Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "zKqKqKp5mkC6AfQ1TwacS",
        "name": "NewWay Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "YipXC1dj4qZmZwk2k6cws",
        "name": "Odd'l Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "wzAKTsRFZctDzv4pJwdoG",
        "name": "Shorckets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "3cz9cYizetXuuHb7gK2Pj",
        "name": "Flis Kits",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "pr6wpwsIaFjQbusZYd4GM",
        "name": "Custom Rocket Company",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "afeABI9OqacVKmi1Km5p9",
        "name": "Starlight Model Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "PbASJ3eQ1821F5jYJq0LU",
        "name": "Aerospace Speciality Products",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "Qmg3huEir3pv1qzef5Kp6",
        "tcId": "Alpha",
        "name": "Alpha Hybrids",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "5LWRKJ2MKZGDIH4nHBa7V",
        "tcId": "AWM",
        "name": "Animal Motor Works",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "RPjP2KLRpqMRe6HYC3cYx",
        "tcId": "Contrail",
        "name": "Contrail Rockets",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "glcvzoLJT96yv47GvdcUb",
        "tcId": "Ellis",
        "name": "Ellis Mountain",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "cxH4neCAwoFIWUmEsPXgl",
        "tcId": "Gorilla",
        "name": "Gorilla Rocket Motors",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "eEGXG6fIpbgOe7MBx0T5P",
        "tcId": "Hypertek",
        "name": "Hypertek",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "Mh8udoyNT20L7xF9n0tOf",
        "tcId": "KBA",
        "name": "Kosdon by AeroTech",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "sDp9vHIX5P5OtQP4W2KtC",
        "tcId": "Kosdon",
        "name": "Kosdon TRM",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "x4HZYpBBoAepgVBew2OPq",
        "tcId": "PP",
        "name": "Propulsion Polymers",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "VD3HrLWPsZXUqF4dquMVc",
        "tcId": "PML",
        "name": "Public Missiles, Ltd.",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "FSXwL5cy8rOoeNVbgfaZO",
        "tcId": "Quest",
        "name": "Quest Aerospace",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "8Dy25V0lbMn7EkyLTTKB7",
        "tcId": "RATT",
        "name": "R.A.T.T. Works",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "6WF2xnOX7NZmDOZ8QdPsU",
        "tcId": "Klima",
        "name": "Raketenmodellbau Klima",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "DHh4SgB6F0PWkI9bEvP2W",
        "tcId": "Roadrunner",
        "name": "Roadrunner Rocketry",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "VJq1Po9haGLNEbN778Bbn",
        "tcId": "RV",
        "name": "Rocketvision Flight-Star",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "vzrpcI21IO3SJhvL7tmVv",
        "tcId": "SkyR",
        "name": "Sky Ripper Systems",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "aIWO2YPK69A7D1roJ1JvI",
        "tcId": "SCR",
        "name": "Southern Cross Rocketry",
        "types": [
            "motor"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    },
    {
        "id": "kkoN6MNRzxmuvXugASyt2",
        "tcId": "WCH",
        "name": "West Coast Hybrids",
        "types": [
            "motor",
            "mororCase"
        ],
        "ownerId": "aeUlOLSfDtwt5glvblEDl",
        "public": true
    }
];
