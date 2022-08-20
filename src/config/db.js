module.exports = {
  'maindb': {
    'client': 'mysql',
    'connection': {
      'host': '127.0.0.1',
      'port': 3306,
      'user': 'root',
      'password': '',
      'database': 'sampledb',
      'multipleStatements': true
    },
    'pool': {
      'min': 0,
      'max': 10
    }
  }
};