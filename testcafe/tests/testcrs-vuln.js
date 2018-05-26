// We want to test the known vulnerabilities in Pixi:
// http://prezo.s3.amazonaws.com/pixi_california_2018/pixi_lab.md

import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.2:8001/register`;

test('Register User WITH CRS', async t => {
    await t
        .typeText('input#email', 'testuser@pixi.owasp')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After registration the search pixi field should be there
        //.expect('#search_query')
});

// Test Nr. 3. Find the Reflected XSS attack
test('Search Reflected XSS String WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for <script>alert('hi')</script>
        .typeText('#search_query', '<script>alert("hi")</script>')
        .pressKey('enter')
        console.log('Testcase 3 - ' + Selector('#uniqueid').textContent + '\n');
});

// Test Nr. 4. Find the Angular Constructor XSS attack
test('Search Angular XSS String WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for {{constructor.constructor("alert(1)")()}}
        .typeText('#search_query', '{{constructor.constructor("alert(1)")()}}')
        .pressKey('enter')
});

// Test Nr. 6. Find the actual administrator service account in a file
test('Call service.conf WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/service.conf')
});

// Test Nr. 7. Find the session secret for web app session cookies
test('Call secret.conf WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/secret.conf')
});

// Test Nr. 9. Log in as another user by bypassing authentication
test('Login as another User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'email@address.com')
        .typeText('input#pass', '[$ne]=1')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

// Test Nr. 10. Upload something that is not a photo
test('Upload exe file WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        .setFilesToUpload('#filename', 'md5sum.exe')
        .click('body > div > div:nth-child(5) > div.col-md-4 > div > div.card-block > form > button')
});

// Test Nr. 11. Inject on the admin page to find all users
test('Call search [$ne]=1 WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/ADMIN/search?search[$ne]=1')
});

// Test Nr. 12. Inject on the admin page to find all likes
test('Call likes [$ne]=1 WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/ADMIN/likes?search[$ne]=1')
});

// Test Nr. 13. Inject on the admin page to find all loves
test('Call loves [$ne]=1 WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/ADMIN/loves?search[$ne]=1')
});
