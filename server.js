require('dotenv').config();

const name = process.env.FIRST_NAME;
const lastName = process.env.LAST_NAME;
const groupNumber = process.env.GROUP_NUMBER;
const listNumber = process.env.LIST_NUMBER;
console.log(`Информация о студенте: 
    Имя: ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
    Фамилия: ${lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()}
    Группа: ${groupNumber}
    Номер по списку: ${listNumber}`);