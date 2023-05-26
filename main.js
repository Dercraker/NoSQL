const { log } = require("console");
const redis = require("redis")
const fs = require('fs');
const csv = require('csv-parser');

const main = async () => {
    const redisOption = {
        host: "127.0.0.1",
        port: "6379",
    }

    const client = redis.createClient();
    client.on("error", (err) => console.log("Error " + err));
    client.on("connect", () => console.log("Redis is connected"));


    await client.connect(redisOption);
    let aa;

    //* Add a new key with multiple fields for values
    // const dataObject = {
    //     field1: 'value1',
    //     field2: 'value2',
    //     field3: 'value3',
    //     // Add more fields as needed
    // };
    // // Convert object to an array of field-value pairs
    // const fieldValues = Object.entries(dataObject).flat();
    // aa = await client.hSet("ANew Key", fieldValues)

    //!to update override values use ADD
    //* Add a new key with a single field-value pair
    // aa = await client.set("MyKeyOne", "dfsfq")

    //*get key with a single field-value pair
    // aa = await client.get("MyKeyOne")

    //*delete key
    // aa = await client.del("ANewKey")

    // log(aa)
    // await client.quit();



    //* Import Data from CSV
    const dataArray = [];
    fs.createReadStream('./contacts_2.csv')
        .pipe(csv())
        .on('data', (data) => {
            const newObj = {
                title: data.title,
                name: data.name,
                address: data.adress,
                realAddress: data.realAdress,
                department: data.departement,
                country: data.country,
                tel: data.tel,
                email: data.email,
            };

            dataArray.push(newObj);
        })
        .on('end', async () => {
            for (const key in dataArray) {
                if (Object.hasOwnProperty.call(dataArray, key)) {
                    const element = dataArray[key];
                    const fieldValues = Object.entries(element).flat();
                    const hashKey = fieldValues[1].toString() || fieldValues[3].toString();

                    try {
                        await client.HSET(key, fieldValues);
                        log(hashKey);
                        log(key);
                    } catch (e) {
                        log(e);
                    }
                }
            }


            client.quit();
        });


}

main()