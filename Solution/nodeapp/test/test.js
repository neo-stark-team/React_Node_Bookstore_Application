// API = "http://localhost:8080";
// const database = require("../models")
// const Product = database.product;

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();

// chai.use(chaiHttp);

// it('testCase1', (done) => {
// chai.request(API)
//     .get('/products')   
//     .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('array');
//         done();
//     });
// });

// it('testCase2', (done) => {
//     let book = {
//         productName: "TEST",
//         description: "TEST",
//         price: "100",
//         imageUrl : "abcd",
//         quantity : "10"
//     }
//     chai.request(API)
//         .post('/admin/addProduct')
//         .send(book)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('boolean');
//         done();
//     });
// });

const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request("http://localhost:8080")
      .post('/admin/addProduct')
      .send({
        productName: "book",
        description: "test book",
        price: "120",
        imageUrl: "abcd",
        quantity: "10"
      })
    expect(res.statusCode).toEqual(200)
    // expect(res.body).toHaveProperty('post')
  })
})