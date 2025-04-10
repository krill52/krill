const fs = require('fs')
const data = fs.readFileSync('/home/raspberry/Krill/token.json', 'utf-8')

const TelegramApi = require('node-telegram-bot-api')
//const {mainMenu} = require('./options')
//const sequelize = require('./db');
//const UserModel = require('./models');


const token = JSON.parse(data).token

const bot = new TelegramApi(token, {polling: true});

//const chats = {}

let botPause = false
const kDictionary = [
    "дрилл",
    "тильт",
    "я тебя щёлкну",
    "хуёво тебе",
    "Денис скажи им",
    "ради контентика",
    "по приколу",
    "я пошутил",
    "пошутил-пошутил",
    "мне похуй",
    "отстаньте",
    "ок",
    "52",
    "пидисят два",
    "слово чушпана",

    "люблю флорбол",
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const send = async (str) => { // get weather info for city ||| city store in db and taken from table 'User' in raw 'city'
    await bot.sendMessage(-1002395139132, str);
}

const reply = async (id, str) => { // get weather info for city ||| city store in db and taken from table 'User' in raw 'city'
    await bot.sendMessage(-1002395139132, str, {reply_to_message_id: id});
}

const start = async () => { // heart of app
    /*try { // connecting to db
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (e) {
        console.log('Подключение к бд сломалось', e)
    }*/
    await bot.setMyCommands([ // command list
        //{command: '/start', description: 'Начальное приветствие/Меню'},
        //{command: '/game', description: 'Играть'},
        //{command: '/help', description: 'Список команд и их описания'},
    ])
    bot.on('message', async msg => { // event: request -> text in message / response -> bot message and/or inline keyboard
        const text = msg.text; // simplification of reference to text in message
        const chatId = msg.chat.id; // simplification of reference to chat id // warn: chatId != userId
        const ido = msg.message_id;
        const tag = msg.from.username;
        //const user = await UserModel.findOne({where: {chatId: chatId}}) // simplification of reference to database
        console.log(chatId, `name`, msg.from.first_name, `nick`, msg.from.username) // log with some ifo about user
        if (botPause) {}
        else {
            if (text === "" || text == null) {

            }
            else if (еуче === "учеба") {
                await reply("отчислено")
            }
            else if (text === "upd bot") {
                // const { exec } = require('node:child_process');
                // await exec('status=1', (error, stdout, stderr) => {
                //     if (error) {
                //         console.log(`error: ${error.message}`);
                //         return;
                //     }
                //     if (stderr) {
                //         console.log(`stderr: ${stderr}`);
                //         return;
                //     }
                //     console.log(`stdout: ${stdout}`);
                // });
                process.exit(0)
            }
            else if (text === "учеба") {
                await reply("отчислено")
            }
            else if (text === "ева" || text === "Ева" || text === "ЕВА" || text === "Света" ||
                text === "света" || text === "СВЕТА") {
                await send("трахать")
            }
            else if (text === "Ева Света" || text === "ева Света" || text === "Ева света" ||
                text === "ева света" || text === "ЕВА СВЕТА" || text === "Света Ева" ||
                text === "света Ева" || text === "Света ева" || text === "света ева" ||
                text === "СВЕТА ЕВА") {
                await send("трахать-трахать")
            }
            else if (text.includes("Иди нахуй") || text.includes("Ди нахуй") ||
                text.includes("Динахуй") || text.includes("динахуй") || text.includes("иди нахуй")) {
                await reply(ido, "Сам иди")
            }
            else if (text.includes("Так точно") || text.includes("так точно")) {
                await reply(ido, "Сосу сочно")
            }
            else if (text === "Люблю Еву" || text === "люблю Еву" || text === "Люблю еву" ||
                text === "люблю еву" || text === "ЛЮБЛЮ ЕВУ") {
                await send(`Ева + @${tag} = ♥`)

            }
            else if (text === "Ева я любила тебя" || text === "ева я любила тебя") {
                await send("Твои пластинки слушала я")
            }
            else if (text === "И в каждой находила себя" || text === "и в каждой находила себя") {
                await send("Зачем остановила меня?")
            }
            else if ((/([А-Яа-яЁёA-Za-z\d]*|\[id\d*\|@[\d\w.]*]) (любит|люблю) (([А-Яа-яЁёA-Za-z\d\.\,\- ]*|\[id\d*\|@[\d\w.]*])|([А-Яа-яёЁA-Za-z\d\.\,\- ]*\[id\d*\|@[\d\w.]*][а-яёa-z\d\.\,\- ]*))\?/i).test(text)) {
                const random = await getRandomInt(2)
                if (random === 0) {
                    await send(`${text.match(/([А-Яа-яЁёA-Za\d]*|\[id\d*\|@[\d\w.]*]) (любит|люблю)/i)[0].slice(0, -6)} не ${text.match(/(любит|люблю)/i)[0]} ${text.match(/(любит|люблю) (([А-Яа-яЁёA-Za-z\d\.\,\- ]*|\[id\d*\|@[\d\w.]*])|([А-Яа-яёЁA-Za-z\d\.\,\- ]*\[id\d*\|@[\d\w.]*][а-яёa-z\d\.\,\- ]*))\?/i)[0].slice(6,-1)}💔`)
                } else if (random === 1) {
                    await send(`${text.match(/([А-Яа-яЁёA-Za-z\d]*|\[id\d*\|@[\d\w.]*]) (любит|люблю)/i)[0].slice(0, -6)} ${text.match(/(любит|люблю)/i)[0]} ${text.match(/(любит|люблю) (([А-Яа-яЁёA-Za-z\d\.\,\- ]*|\[id\d*\|@[\d\w.]*])|([А-Яа-яёЁA-Za-z\d\.\,\- ]*\[id\d*\|@[\d\w.]*][а-яёa-z\d\.\,\- ]*))\?/i)[0].slice(6,-1)}♥`)
                }
            }
            else if (/Стоит [А-Яа-яËёA-Za-z\d\.\,\- ]*\?/i.test(text)) {
                const random = await getRandomInt(2)
                if (random === 0) {
                    await reply(ido, `Не стоит`)
                } else if (random === 1) {
                    await reply(ido, `Стоит`)
                }
            }
            else if (text === "Кирилл" || text === "Кирил" || text === "кирилл" ||
                text === "кирил") {
                const random = await getRandomInt(2)
                if (random === 0) {
                    await send("Кирилл не любит Еву💔")
                } else if (random === 1) {
                    await send("Кирилл любит Еву♥")
                }
            }
            else if (text === "Роман" || text === "роман" || text === "Рома" ||
                text === "рома") {
                const random = await getRandomInt(2)
                if (random === 0) {
                    await send("пошлый")
                } else if (random === 1) {
                    await send("депортировать")
                }

            }
            // else if (/(Кирил|Кирилл) мем (([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*)|([A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*))/i.test(text)) {
            //     if (!generateJobIsExist){
            //         const peerId = peerId
            //         const fileName = uuid.v4() + ".png"
            //
            //         let myPath = path.resolve(__dirname, "static", fileName)
            //         //let myPath = path.resolve("/data", "static", fileName)
            //
            //         const plusCount = text.match(/\+/ig)
            //         //console.log(plusCount)
            //         if (plusCount === null) {
            //             const random = await getRandomInt(memNames.oneLine.length)
            //             await download(`https://api.memegen.link/images/${memNames.oneLine[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(10)))}/`, myPath)
            //         }
            //         else if (plusCount.length === 1) {
            //             const random = await getRandomInt(memNames.twoLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.twoLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else if (plusCount.length === 2) {
            //             const random = await getRandomInt(memNames.threeLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.threeLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else if (plusCount.length === 3) {
            //             const random = await getRandomInt(memNames.fourLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.fourLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else if (plusCount.length === 4) {
            //             const random = await getRandomInt(memNames.fiveLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.fiveLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else if (plusCount.length === 5) {
            //             const random = await getRandomInt(memNames.sixLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.sixLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else if (plusCount.length === 6) {
            //             const random = await getRandomInt(memNames.sevenLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.sevenLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else if (plusCount.length === 7) {
            //             const random = await getRandomInt(memNames.eightLines.length)
            //             await download(`https://api.memegen.link/images/${memNames.eightLines[random]}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/(Кирил|Кирилл) мем [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(10,-2)))}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]* \+/i)[0].slice(2, -2)))}${(text = text.replace("+", "")).slice(0, 0)}/` +
            //                 `${await screening4memegen(await rusToEng(text.match(/\+ [A-Za-zА-Яа-яЁё\d\_\-\?\&\%\#\/\\\>\<\"\@ ]*/i)[0].slice(2)))}`, myPath)
            //         }
            //         else {
            //             console.log("Error in memgen")
            //         }
            //
            //         const getUploadUrl = await vk.api.photos.getMessagesUploadServer(peerId)
            //         const uploadUrl = getUploadUrl.upload_url
            //
            //         await exec(`curl -F "photo=@${config.path_l}/${fileName}" "${uploadUrl}"`,
            //             async function (error, stdout, stderr) {
            //                 console.log("stdout: " + stdout)
            //                 console.log("stderr: " + stderr)
            //                 const testResponseExec = JSON.parse(stdout)
            //                 if (error !== null) {
            //                     console.log('exec error: ' + error);
            //                 }
            //                 const savedPhoto = await vk.api.photos.saveMessagesPhoto({
            //                     photo: testResponseExec.photo,
            //                     hash: testResponseExec.hash,
            //                     server: testResponseExec.server
            //                 })
            //                 await vk.api.messages.send({
            //                     peer_id: peerId,
            //                     random_id: 0,
            //                     attachment: `photo${savedPhoto[0].owner_id}_${savedPhoto[0].id}`
            //                 })
            //             });
            //
            //         try {
            //             if (generateJobIsExist === true) { // limit schedule messages // more about in introduce variable job
            //                 generateJob.stop();
            //                 generateJobIsExist = false;
            //             }
            //
            //             const date = new Date()
            //             date.setMinutes(date.getMinutes()+1)
            //             const minutes = date.getMinutes()
            //
            //             generateJobIsExist = true
            //             generateJob = new CronJob(`00 ${minutes} * * * 0-6`, async function() { // schedule's internal loop
            //                     /*
            //                      * Runs every day
            //                      * at ${time}:00:00.
            //                      */
            //                     generateJobIsExist = false;
            //                     generateJob.stop();
            //                 }, function () {
            //                     /* This function is executed when the job stops */
            //                 },
            //                 true, /* Start the job right now */
            //                 'Etc/UTC' /* Time zone of this job. */
            //             );
            //         } catch (e) {
            //             console.log('Сломалось генеративное расписание', e)
            //         }
            //     }
            //     else {
            //         await send("Подождите, прежде чем сгенерировать снова!!!")
            //     }
            // }
            //
            else {

            }
        }

    })
    bot.on('callback_query', async msg => { // event: request -> callback data from inline keyboard / response -> bot message and/or inline keyboard
        const data = msg.data; // simplification of reference to callback data from inline keyboard
        const chatId = msg.message.chat.id; // simplification of reference to chat id // warn: chatId != userId
        //const user = await UserModel.findOne({where: {chatId: chatId}}) // simplification of reference to database

        // incoming data processing module
        if (data === '/again') { // just test func, nothing useful
            return startGame(chatId, ch)
        }
        if (data === '/help') { // typical /help: command list description
            return bot.sendMessage(chatId, `
Полный список команд бота:
/start - Начальное приветствие
/game - Играть
/help или /h - Список команд и их описания
`)
        }

    })
}

start()
