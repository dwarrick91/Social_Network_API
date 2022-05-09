const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()


function formatDate() {
    dayjs(`${createdAt}`).format('DD/MM/YYYY')
}

// module.exports = formatDate