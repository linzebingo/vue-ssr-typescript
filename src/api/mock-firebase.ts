function generateMockData(child) {
  return function() {
    if (/stories/.test(child)) {
      return ['24268382']
    } else {
      return {
        "by": "dhouston",
        "descendants": 71,
        "id": 24268382,
        "kids": [8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876],
        "score": 111,
        "time": 1175714200,
        "title": "My YC app: Dropbox - Throw away your USB drive",
        "type": "story",
        "url": "http://www.getdropbox.com/u/2/screencast.html"
      }
    }
  }
}

/**
 * In China Firebase is blocked, use mock data instand of it.
 * more api see https://github.com/HackerNews/API
 */
export default class Firebase {
  static initializeApp(config) {
    console.log('initializeApp', config);
  }

  static database() {
    return {
      ref(version) {
        console.log('database.ref', version)
        return {
          onServer: false,
          cachedIds: {
            top: []
          },
          cachedItems: [],
          child: function (child) {
            return {
              once: function (key, cb) {
                cb({
                  val: generateMockData(child)
                })
              },
              on: function (key, cb) {
                cb({
                  val: generateMockData(child)
                })
              },
            }
          }
        }
      }
    }
  }
}
