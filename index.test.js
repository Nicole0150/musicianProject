// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test("testing /musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })

    test("testing data type", async ()=>{
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(typeof responseData).toBe("object");
    })
    

    
})

describe("Musicians route", () =>{
    test("it returns a musician by id", async ()=>{
        const res = await request(app).get("/musicians/2");
        expect(res.body).toHaveProperty("name", "Drake");
    })



})
