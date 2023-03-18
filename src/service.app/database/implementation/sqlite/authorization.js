import NotImplementedError from '@thzero/library_common/errors/notImplemented';

class AuthorizationDatabase {
	userByExternalId(identifier) {
		throw new NotImplementedError();
	}

	userById(identifier) {
		throw new NotImplementedError();
	}

	userUpdate(user) {
		throw new NotImplementedError();
	}

	userUpdateByExternalId(user) {
		throw new NotImplementedError();
	}
}

export default AuthorizationDatabase;
