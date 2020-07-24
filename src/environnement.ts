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
             * In developpement :: port 5555
             */
            return 5555
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
             * create database for each environment
             */
            return 'mago_eat_dev'
        } else if (this.environment === Environments.local_environnement ) {
            return 'mago_eat_test'
        } else if (this.environment === Environments.prod_environnement ) {
            return 'mago_eat_prod'
        } else {
            return 'magoeat_any_db'
        }
    }
}

export default new Environment(Environments.dev_environnement);