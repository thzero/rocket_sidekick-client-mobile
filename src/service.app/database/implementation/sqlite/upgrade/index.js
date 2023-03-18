import NotImplementedError from '@thzero/library_common/errors/notImplemented';

class UpgradeSqliteDatabaseScript {
	constructor(version) {
		this._version = version;
	}

	isVersion(newVersion) {
		return !(newVersion === this._version);
	}

	statements() {
		throw new NotImplementedError();
	}

	get version() { return this._version; }
}

export default UpgradeSqliteDatabaseScript;
