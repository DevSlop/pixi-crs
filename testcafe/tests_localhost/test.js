// Normal Pixi Application Tests against Pixi directly for CI Pipeline
import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://localhost:8000/register`;

test('Register User', async t => {
    await t
        .typeText('input#email', 'testuser@pixi.owasp')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

test('Login User', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

test('Search String in Search Box', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for Lunch
        .typeText('#search_query', 'Lunch')
        .pressKey('enter')
});
/*
test('Click About', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we click About
        .click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(1) > a')
        //.expect('body > div > div:nth-child(12) > div > div.card-deck')
});

test('Click My Profile and change Name', async t => {
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

test('Logout User', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
	.click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(4) > a')
});
