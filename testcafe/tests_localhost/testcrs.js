// Normal Pixi Application Tests against CRS for CI Pipeline
import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://localhost/register`;

test('Register User WITH CRS', async t => {
    await t
        .typeText('input#email', 'testuser@pixi.owasp')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

test('Login User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

test('Search String in Search Box WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //Evil demo, let step fail
        //.typeText('#search_query', '<script>alert("My evil DEMO")</script>')
        .pressKey('enter')
});

/*
test('Click About WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we click About
        .click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(1) > a')
});

test('Click My Profile and change Name WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we click My Profile
        .click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(3) > a')
        //After clicking My Profile we change our name
        .typeText('input#password', 'testpw')
        .typeText('input#name', 'testuser')
        .pressKey('enter')
});
*/

test('Logout User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        .click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(4) > a')
});

// Test WAF with a malicious string
test('WAF Test with malicious string', async t => {
    await t
        .typeText('input#email', 'test@test>')
        .typeText('input#password', '<script>alert("My evil WAF Test");</script>')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});
