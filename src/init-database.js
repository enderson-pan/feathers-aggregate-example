const logger = require('./logger');

const users = [
  {
    name: '张一',
    phone: '13709266601',
    group: 'group1'
  },
  {
    name: '张二',
    phone: '13709266602',
    group: 'group1'
  },
  {
    name: '张三',
    phone: '13709266603',
    group: 'group1'
  },
  {
    name: '王一',
    phone: '13809266601',
    group: 'group2'
  },
  {
    name: '王二',
    phone: '13809266602',
    group: 'group2'
  },
  {
    name: '王三',
    phone: '13809266603',
    group: 'group2'
  },
  {
    name: '李一',
    phone: '13909266601',
    group: 'group3'
  },
  {
    name: '李二',
    phone: '13909266602',
    group: 'group3'
  },
  {
    name: '李三',
    phone: '13909266603',
    group: 'group3'
  }
];

const towers = [
  {
    name: 'test1-1',
    group: 'group1',
    maintainers: [13709266601, 13909266603],
    bindToDevice: '1-1'
  },
  {
    name: 'test1-2',
    group: 'group1',
    maintainers: [13709266602, 13809266601],
    bindToDevice: '1-2'
  },
  {
    name: 'test1-3',
    group: 'group1',
    maintainers: [13709266601, 13709266603],
    bindToDevice: '1-3'
  },
  {
    name: 'test2-1',
    group: 'group2',
    maintainers: [13809266601, 13809266603, 13909266601],
    bindToDevice: '2-1'
  },
  {
    name: 'test2-2',
    group: 'group2',
    maintainers: [13809266602, 13809266602, 13909266602],
    bindToDevice: '2-2'
  },
  {
    name: 'test2-3',
    group: 'group2',
    maintainers: [13809266603, 13809266601, 13909266602],
    bindToDevice: '2-3'
  },
  {
    name: 'test3-1',
    group: 'group3',
    maintainers: [13909266601, 13809266601, 13909266602],
    bindToDevice: '3-1'
  },
  {
    name: 'test3-2',
    group: 'group3',
    maintainers: [13909266602, 13809266601, 13909266602],
    bindToDevice: '3-2'
  },
  {
    name: 'test3-3',
    group: 'group3',
    maintainers: [13909266603, 13809266601, 13909266602],
    bindToDevice: '3-3'
  }
];

const poses = (() => {
  let ret = [];
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      for (let k = 0; k < 3; ++k) {
        ret[(i * 3 + j) * 3 + k] = {
          deviceIMEI: `${i + 1}-${j + 1}`,
          text: `message ${i + 1}-${j + 1}-${k + 1}`
        };
      }
    }
  }
  return ret;
})();

module.exports = async function(app) {
  logger.info('init database');

  const userService = app.service('users');
  await userService.remove(null);
  await userService.create(users);

  const towerService = app.service('tower');
  await towerService.remove(null);
  await towerService.create(towers);

  const poseService = app.service('pose');
  await poseService.remove(null);
  await poseService.create(poses);
};
