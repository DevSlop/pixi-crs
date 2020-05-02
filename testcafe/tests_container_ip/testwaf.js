// One malicious Pixi Application Test against CRS for CI Pipeline to test the WAF itself
import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.1:8080/login`;

test('WAF Test with malicious string', async t => {
    await t
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', '<script>MyEvilWAFTest</script>')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});
