const { Console } = require("console");
const os = require("os");
require('dotenv').config({path:'../.env'});

function MainInfo(){
    const platform = os.platform();
    const freeMemGB = (os.freemem() / 1024 ** 3);
    const mainDir = os.homedir()
    const hostname = os.hostname();
    const networkInterface = os.networkInterfaces();

    console.log(`
        Информация о системе:
        Платформа: ${platform}
        Свободная память: ${freeMemGB} ГБ
        Главаная директория: ${mainDir}
        Имя системы: ${hostname}
        Сетевой интерфейс: ${JSON.stringify(networkInterface)}`);
}

MainInfo();

const isFreeMemBiggerThan4gb = () => os.freemem() > 4*1024**3;
console.log(isFreeMemBiggerThan4gb());

function isAccessRights(){
    const mode = process.env.MODE
    console.log(mode)
    
    if (!mode) {
      console.log('Ошибка: переменная MODE не определена в .env');
      return;
    }
  
  
    if (mode.toLowerCase()=== 'admin') {
        MainInfo();
    } else {
      console.log('Доступ запрещен: функция доступна только в режиме admin');
    }
      
}

isAccessRights();


