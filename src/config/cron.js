import cron from 'cron';
import https from 'https';

const job = new cron.CronJob('*/5 * * * *', function () {
    https.get(process.env.API_URL, (res) => {
        if (res.statusCode === 200) console.log('get request sent successfully');

        else console.log(`Failed to send get request. Status code: ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
});

export default job;