require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'Yashar',
    url: META_URL || '',
    description: META_DESC || 'Seeking the Beatitudes.',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#708090',
    email: META_EMAIL || undefined,
    telephone: META_TELEPHONE || undefined,
    dateFormat: 'dd LLLL yyyy'
}
