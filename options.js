/**
 * The questions to ask during the install process.
 */
const questions = [
  // {
  //   name: 'vector-icons',
  //   message: 'What vector icon library will you use?',
  //   type: 'list',
  //   choices: ['none', 'react-native-vector-icons']
  // },
  // {
  //   name: 'i18n',
  //   message: 'What internationalization library will you use?',
  //   type: 'list',
  //   choices: ['none', 'react-native-i18n']
  // }
]

/**
 * The max preset.
 */
const max = {
  // 'vector-icons': 'react-native-vector-icons',
  // i18n: 'react-native-i18n',
}

/**
 * The min preset.
 */
const min = {
  // 'vector-icons': 'none',
  // i18n: 'none',
}

module.exports = {
  questions,
  answers: { min, max }
}
