export enum statusCode {
    success = 200,
    created = 201,
    bad_request = 400,
    internal_server_error = 500,
    unauthorized = 401,
    forbiden = 404
}

export enum accountType {
    admin = 'admin',
    buyer = 'buyer',
    restauAdmin = 'restau_admin',
    restauOwner = 'restau_owner',
    singleSeller = 'single_seller'
}