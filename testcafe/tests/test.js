// Normal Pixi Application Tests against Pixi directly for CI Pipeline
import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.1:8000/register`;

test('Register User', async t => {
    await t
        .typeText('input#email', 'testuser@pixi.owasp')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After registration the search pixi field should be there
        //.expect('#search_query')
});

test('Login User', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

test('Search String', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for Lunch
        .typeText('#search_query', 'Lunch')
        .pressKey('enter')
        //.expect('body > div > div:nth-child(12) > div > div.card-deck')
});

test('Logout User', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
	.click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(4) > a')
});
