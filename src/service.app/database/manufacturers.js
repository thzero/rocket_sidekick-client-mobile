// import LibraryCommonUtility from '@thzero/library_common/utility';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import BaseDatabaseService from '@/service.app/database/index';

class ManufacturersDatabaseService extends BaseDatabaseService {
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

export default ManufacturersDatabaseService;

const defaultData = [
    {
        "id": "locprecision",
        "name": "LOC Precision",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "topflight",
        "name": "Top Flight Recovery, LLC",
        "types": [
            "blanket",
            "parachute"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "jollylogic",
        "name": "JollyLogic",
        "types": [
            "altimeter",
            "chuteRelease"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "missileworks",
        "name": "Missileworks",
        "types": [
            "altimeter",
            "tracker"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "eggtimer",
        "name": "Eggtimer Rocketry",
        "types": [
            "altimeter",
            "tracker"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "rocketman",
        "name": "Rocketman",
        "types": [
            "blanket",
            "deploymentbag",
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "estes",
        "name": "Estes Industries",
        "types": [
            "motor",
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "apogee",
        "name": "Apogee Components",
        "types": [
            "motor",
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "fruitychutes",
        "name": "Fruity Chutes",
        "types": [
            "blanket",
            "deploymentbag",
            "parachute"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "featherweight",
        "name": "Featherweight",
        "types": [
            "altimeter",
            "tracker"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "madcowrocketry",
        "name": "Madcow Rocketry",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "rocketarium",
        "name": "Rocketarium",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "wildman",
        "name": "Wildman Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "aerotech",
        "name": "AeroTech/Quest",
        "types": [
            "motor",
            "motorcase",
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "cesaroni",
        "name": "Cesaroni Technology",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "loki",
        "name": "Loki Research",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "reconrecovery",
        "name": "Recon Recovery",
        "types": [
            "parachute"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "skyangle",
        "name": "Sky Angle",
        "types": [
            "blanket",
            "deploymentbag",
            "parachute"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "custom",
        "name": "Custom",
        "types": [
            "altimeter",
            "blanket",
            "deploymentbag",
            "parachute",
            "rocket",
            "tracker"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "publicmissile",
        "name": "Public Missile",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "compositewarehouse",
        "name": "Composite Warehouse",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "giantleap",
        "name": "Giant Leap Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "mach1rocketry",
        "name": "Mach 1 Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "dynasoar",
        "name": "Dynasoar Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "mcperformance",
        "name": "Mac Performance Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "spherachutes",
        "name": "Spherachutes",
        "types": [
            "parachute"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "bamachutes",
        "name": "Bama Chutes",
        "types": [
            "parachute"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "ncr",
        "name": "North Coast Rocketry",
        "types": [
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "balsamachining",
        "name": "Balsa Machining Service",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "modelrocketsus",
        "name": "Modelrockets.us",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "buyrocketmotors",
        "name": "Buy Rocket Motors",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "sirius",
        "name": "Sirius Rocketry",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "semroc",
        "name": "SEMROC",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "altaira",
        "name": "Altaira Rocketry",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "drzooch",
        "name": "Dr Zooch Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "mpc",
        "name": "MPC Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "newway",
        "name": "NewWay Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "oddl",
        "name": "Odd'l Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "shorckets",
        "name": "Shorckets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "fliskits",
        "name": "Flis Kits",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "customco",
        "name": "Custom Rocket Company",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "starlight",
        "name": "Starlight Model Rockets",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "asp",
        "name": "Aerospace Speciality Products",
        "types": [
            "parachute",
            "rocket"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "alpha",
        "name": "Alpha Hybrids",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "animalmotorworks",
        "name": "Animal Motor Works",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "contrail",
        "name": "Contrail Rockets",
        "types": [
            "motor",
            "motorcase"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "ellis",
        "name": "Ellis Mountain",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "gorilla",
        "name": "Gorilla Rocket Motors",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "hypertek",
        "name": "Hypertek",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "kba",
        "name": "Kosdon by AeroTech",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "kosdon",
        "name": "Kosdon TRM",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "pp",
        "name": "Propulsion Polymers",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "pml",
        "name": "Public Missiles, Ltd.",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "quest",
        "name": "Quest Aerospace",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "ratt",
        "name": "R.A.T.T. Works",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "klima",
        "name": "Raketenmodellbau Klima",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "roadrunner",
        "name": "Roadrunner Rocketry",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "rvfs",
        "name": "Rocketvision Flight-Star",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "skyripper",
        "name": "Sky Ripper Systems",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "scr",
        "name": "Southern Cross Rocketry",
        "types": [
            "motor"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    },
    {
        "id": "wch",
        "name": "West Coast Hybrids",
        "types": [
            "motor",
            "mororCase"
        ],
        "ownerId": "BcHwSwTQnWUgTULr5sGVnN54Ckg2",
        "public": true
    }
];
