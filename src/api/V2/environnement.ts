import * as dotenv from 'dotenv';
dotenv.config();
enum Environments  {
    local_environnement = 'local',
    dev_environnement = 'dev',
    prod_environnement = 'prod'
}

class Environment {
    private environment : String;

    constructor (environment : String) {
        this.environment = environment;
    }
    getPort () : number {
        if (this.environment === Environments.dev_environnement ) {
            /**
             * In developpement :: port 8081
             */
            return 8081
        } else if (this.environment === Environments.local_environnement ) {
            return 5000
        } else if (this.environment === Environments.prod_environnement ) {
            return 8080
        } else {
            return 3000
        }
    }
    getDBName () : String {
        if (this.environment === Environments.dev_environnement ) {
            /**
             * In developpement :: port 8081
             */
            return process.env.DATABASE_URL
        } else if (this.environment === Environments.local_environnement ) {
            return process.env.DATA_BASE_LOCAL
        } else if (this.environment === Environments.prod_environnement ) {
            return process.env.DATA_BASE_URL
        } else {
            return 'any_db'
        }
    }
}

export default new Environment(Environments.dev_environnement);