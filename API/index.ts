import { App } from './config/app';
/*import { connect } from './database'*/

async function main() {
    const app = new App(4001);
    await app.listen();
}

main();