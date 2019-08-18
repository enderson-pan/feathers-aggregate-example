const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const logger = require('../src/logger');

const socket = io('http://localhost:3030/');
const client = feathers();

client.configure(socketio(socket));

const currentUser = '13809266602';

(async ( )=> {
  try {
    const groupRes = await client.service('users').find({
      query:{
        phone: currentUser
      }
    });
    const { group } = groupRes.data[0];
    console.log('group: ', group);

    const res = await client.service('tower').find({
      query: {
        _aggregate:[
          {
            $match: {
              group
            }
          },
          {
            $lookup: {
              from: 'poses',
              localField: 'bindToDevice',
              foreignField: 'deviceIMEI',
              as: 'devices'
            }
          }
        ]
      }
    });

    console.log('res: ', JSON.stringify(res, null, '  '));

    /*const analyticService = client.service('analytic');
    const analyticRes = await analyticService.find({
      query:{
        user: currentUser
      }
    });
    console.log('analyticRes', analyticRes);*/
  } catch (e) {
    console.log('error: ', e);
  }

  process.exit();
})();


