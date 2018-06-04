# pixi-crs

This branch tests the known vulnerabilities of Pixi known from [this workshop](http://prezo.s3.amazonaws.com/pixi_california_2018/pixi_lab.md) and checks if the OWASP ModSecurity Core Rule Set catches the attacks.


## Tests

### Test Nr. 3. Find the Reflected XSS attack

```
.typeText('#search_query', '<script>alert("hi")</script>')
```


[2018-05-19 20:38:20.434936] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. detected XSS using libinjection. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-941-APPLICATION-ATTACK-XSS.conf"] [line "61"] [id "941100"] [rev "2"] [msg "XSS Attack Detected via libinjection"] [data "Matched Data: XSS data found within ARGS:query: <script>alert(\\x22hi\\x22)</script>"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-xss"] [tag "OWASP_CRS/WEB_ATTACK/XSS"] [tag "WASCTC/WASC-8"] [tag "WASCTC/WASC-22"] [tag "OWASP_TOP_10/A3"] [tag "OWASP_AppSensor/IE1"] [tag "CAPEC-242"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.434994] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i)([<\\xef\\xbc\\x9c]script[^>\\xef\\xbc\\x9e]*[>\\xef\\xbc\\x9e][\\\\s\\\\S]*?)" at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-941-APPLICATION-ATTACK-XSS.conf"] [line "94"] [id "941110"] [rev "2"] [msg "XSS Filter - Category 1: Script Tag Vector"] [data "Matched Data: <script> found within ARGS:query: <script>alert(\\x22hi\\x22)</script>"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-xss"] [tag "OWASP_CRS/WEB_ATTACK/XSS"] [tag "WASCTC/WASC-8"] [tag "WASCTC/WASC-22"] [tag "OWASP_TOP_10/A3"] [tag "OWASP_AppSensor/IE1"] [tag "CAPEC-242"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.435149] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i)<[^\\\\w<>]*(?:[^<>\\"'\\\\s]*:)?[^\\\\w<>]*(?:\\\\W*?s\\\\W*?c\\\\W*?r\\\\W*?i\\\\W*?p\\\\W*?t|\\\\W*?f\\\\W*?o\\\\W*?r\\\\W*?m|\\\\W*?s\\\\W*?t\\\\W*?y\\\\W*?l\\\\W*?e|\\\\W*?s\\\\W*?v\\\\W*?g|\\\\W*?m\\\\W*?a\\\\W*?r\\\\W*?q\\\\W*?u\\\\W*?e\\\\W*?e|(?:\\\\W*?l\\\\W*?i\\\\W*?n\\\\W*?k|\\\\W*?o\\\\W*?b\\\\W*?j\\\\W*?e\\ ..." at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-941-APPLICATION-ATTACK-XSS.conf"] [line "223"] [id "941160"] [rev "2"] [msg "NoScript XSS InjectionChecker: HTML Injection"] [data "Matched Data: <script found within ARGS:query: <script>alert(\\x22hi\\x22)</script>"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-xss"] [tag "OWASP_CRS/WEB_ATTACK/XSS"] [tag "WASCTC/WASC-8"] [tag "WASCTC/WASC-22"] [tag "OWASP_TOP_10/A3"] [tag "OWASP_AppSensor/IE1"] [tag "CAPEC-242"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.435365] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. Pattern match "<(a|abbr|acronym|address|applet|area|audioscope|b|base|basefront|bdo|bgsound|big|blackface|blink|blockquote|body|bq|br|button|caption|center|cite|code|col|colgroup|comment|dd|del|dfn|dir|div|dl|dt|em|embed|fieldset|fn|font|form|frame|frameset|h1|head|h ..." at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-941-APPLICATION-ATTACK-XSS.conf"] [line "849"] [id "941320"] [rev "2"] [msg "Possible XSS Attack Detected - HTML Tag Handler"] [data "Matched Data: <script> found within ARGS:query: <script>alert(\\x22hi\\x22)</script>"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-xss"] [tag "OWASP_CRS/WEB_ATTACK/XSS"] [tag "WASCTC/WASC-8"] [tag "WASCTC/WASC-22"] [tag "OWASP_TOP_10/A2"] [tag "OWASP_AppSensor/IE1"] [tag "PCI/6.5.1"] [tag "paranoia-level/2"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.435785] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:([\\\\s'\\"`\\\\(\\\\)]*?)([\\\\d\\\\w]++)([\\\\s'\\"`\\\\(\\\\)]*?)(?:<(?:=(?:([\\\\s'\\"`\\\\(\\\\)]*?)(?!\\\\2)([\\\\d\\\\w]+)|>([\\\\s'\\"`\\\\(\\\\)]*?)(?:\\\\2))|>?([\\\\s'\\"`\\\\(\\\\)]*?)(?!\\\\2)([\\\\d\\\\w]+))|(?:not\\\\s+(?:regexp|like)|is\\\\s+not|>=?|!=|\\\\^)([\\\\s'\\"`\\\\(\\\\)]*?)(?!\\\\2)([\\\\d\\ ..." at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "606"] [id "942130"] [rev "2"] [msg "SQL Injection Attack: SQL Tautology Detected."] [data "Matched Data: <script> found within ARGS:query: <script>alert(\\x22hi\\x22)</script>"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [tag "paranoia-level/2"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.436416] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:(?:[\\"'`](?:\\\\s*?(?:(?:\\\\*.+(?:(?:an|i)d|between|like|x?or|div)\\\\W*?[\\"'`]|(?:between|like|x?or|and|div)\\\\s[^\\\\d]+[\\\\w-]+.*?)\\\\d|[^\\\\w\\\\s?]+\\\\s*?[^\\\\w\\\\s]+\\\\s*?[\\"'`]|[^\\\\w\\\\s]+\\\\s*?[\\\\W\\\\d].*?(?:--|#))|.*?\\\\*\\\\s*?\\\\d)|^[\\\\w\\\\s\\"'`-]+(?<=and\\\\s)(?: ..." at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "965"] [id "942370"] [rev "2"] [msg "Detects classic SQL injection probings 2/3"] [data "Matched Data: >alert(\\x22h found within ARGS:query: <script>alert(\\x22hi\\x22)</script>"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [tag "paranoia-level/2"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.436662] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 30)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]

[2018-05-19 20:38:20.436843] [-:error] 172.17.0.3:51282 WwCLPKqkaeCrr9rBEDL6IAAAAJc [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 30 - SQLI=10,XSS=20,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): Detects classic SQL injection probings 2/3"] [tag "event-correlation"] [hostname "localhost"] [uri "/search/"] [unique_id "WwCLPKqkaeCrr9rBEDL6IAAAAJc"]


### Test Nr. 4. Find the Angular Constructor XSS attack

```
.typeText('#search_query', '{{constructor.constructor("alert(1)")()}}')
```

[2018-05-20 19:59:11.158325] [-:error] 172.17.0.3:38020 WwHTj-mmnkx6xbS4qu5bUwAAAIU [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:(?:[\\"'`](?:\\\\s*?(?:(?:\\\\*.+(?:(?:an|i)d|between|like|x?or|div)\\\\W*?[\\"'`]|(?:between|like|x?or|and|div)\\\\s[^\\\\d]+[\\\\w-]+.*?)\\\\d|[^\\\\w\\\\s?]+\\\\s*?[^\\\\w\\\\s]+\\\\s*?[\\"'`]|[^\\\\w\\\\s]+\\\\s*?[\\\\W\\\\d].*?(?:--|#))|.*?\\\\*\\\\s*?\\\\d)|^[\\\\w\\\\s\\"'`-]+(?<=and\\\\s)(?: ..." at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "965"] [id "942370"] [rev "2"] [msg "Detects classic SQL injection probings 2/3"] [data "Matched Data: (1)\\x22) found within ARGS:query: {{constructor.constructor(\\x22alert(1)\\x22)()}}"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [tag "paranoia-level/2"] [hostname "localhost"] [uri "/search/"] [unique_id "WwHTj-mmnkx6xbS4qu5bUwAAAIU"]

[2018-05-20 19:59:11.158554] [-:error] 172.17.0.3:38020 WwHTj-mmnkx6xbS4qu5bUwAAAIU [client 172.17.0.3] ModSecurity: Warning. Pattern match "((?:[\\\\~\\\\!\\\\@\\\\#\\\\$\\\\%\\\\^\\\\&\\\\*\\\\(\\\\)\\\\-\\\\+\\\\=\\\\{\\\\}\\\\[\\\\]\\\\|\\\\:\\\\;\\"\\\\'\\\\\\xc2\\xb4\\\\\\xe2\\x80\\x99\\\\\\xe2\\x80\\x98\\\\`\\\\<\\\\>][^\\\\~\\\\!\\\\@\\\\#\\\\$\\\\%\\\\^\\\\&\\\\*\\\\(\\\\)\\\\-\\\\+\\\\=\\\\{\\\\}\\\\[\\\\]\\\\|\\\\:\\\\;\\"\\\\'\\\\\\xc2\\xb4\\\\\\xe2\\x80\\x99\\\\\\xe2\\x80\\x98\\\\`\\\\<\\\\>]*?){12})" at ARGS:query. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "1222"] [id "942430"] [rev "2"] [msg "Restricted SQL Character Anomaly Detection (args): # of special characters exceeded (12)"] [data "Matched Data: {{constructor.constructor(\\x22alert(1)\\x22)()}} found within ARGS:query: {{constructor.constructor(\\x22alert(1)\\x22)()}}"] [severity "WARNING"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [tag "paranoia-level/2"] [hostname "localhost"] [uri "/search/"] [unique_id "WwHTj-mmnkx6xbS4qu5bUwAAAIU"]

[2018-05-20 19:59:11.158747] [-:error] 172.17.0.3:38020 WwHTj-mmnkx6xbS4qu5bUwAAAIU [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 8)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/search/"] [unique_id "WwHTj-mmnkx6xbS4qu5bUwAAAIU"]

[2018-05-20 19:59:11.159007] [-:error] 172.17.0.3:38020 WwHTj-mmnkx6xbS4qu5bUwAAAIU [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 8 - SQLI=8,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): Restricted SQL Character Anomaly Detection (args): # of special characters exceeded (12)"] [tag "event-correlation"] [hostname "localhost"] [uri "/search/"] [unique_id "WwHTj-mmnkx6xbS4qu5bUwAAAIU"]



### Test Nr. 6. Find the actual administrator service account in a file

```
.navigateTo('http://172.17.0.2:8001/service.conf')
```

[2018-05-19 20:38:36.126526] [-:error] 172.17.0.3:51282 WwCLTKqkaeCrr9rBEDL6jAAAAJQ [client 172.17.0.3] ModSecurity: Warning. String match within ".asa/ .asax/ .ascx/ .axd/ .backup/ .bak/ .bat/ .cdx/ .cer/ .cfg/ .cmd/ .com/ .config/ .conf/ .cs/ .csproj/ .csr/ .dat/ .db/ .dbf/ .dll/ .dos/ .htr/ .htw/ .ida/ .idc/ .idq/ .inc/ .ini/ .key/ .licx/ .lnk/ .log/ .mdb/ .old/ .pass/ .pdb/ .pol/ .printer/ .pwd/ .resources/ .resx/ .sql/ .sys/ .vb/ .vbs/ .vbproj/ .vsdisco/ .webinfo/ .xsd/ .xsx/" at TX:extension. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-920-PROTOCOL-ENFORCEMENT.conf"] [line "1057"] [id "920440"] [rev "2"] [msg "URL file extension is restricted by policy"] [data ".conf"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-protocol"] [tag "OWASP_CRS/POLICY/EXT_RESTRICTED"] [tag "WASCTC/WASC-15"] [tag "OWASP_TOP_10/A7"] [tag "PCI/6.5.10"] [hostname "localhost"] [uri "/service.conf"] [unique_id "WwCLTKqkaeCrr9rBEDL6jAAAAJQ"]

[2018-05-19 20:38:36.126892] [-:error] 172.17.0.3:51282 WwCLTKqkaeCrr9rBEDL6jAAAAJQ [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/service.conf"] [unique_id "WwCLTKqkaeCrr9rBEDL6jAAAAJQ"]

[2018-05-19 20:38:36.127025] [-:error] 172.17.0.3:51282 WwCLTKqkaeCrr9rBEDL6jAAAAJQ [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=0,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): URL file extension is restricted by policy"] [tag "event-correlation"] [hostname "localhost"] [uri "/service.conf"] [unique_id "WwCLTKqkaeCrr9rBEDL6jAAAAJQ"]

### Test Nr. 7. Find the session secret for web app session cookies

```
.navigateTo('http://172.17.0.2:8001/secret.conf')
```

[2018-05-19 20:38:39.543813] [-:error] 172.17.0.3:51210 WwCLT6l2Sj4hfSfMEQaq@QAAAEw [client 172.17.0.3] ModSecurity: Warning. String match within ".asa/ .asax/ .ascx/ .axd/ .backup/ .bak/ .bat/ .cdx/ .cer/ .cfg/ .cmd/ .com/ .config/ .conf/ .cs/ .csproj/ .csr/ .dat/ .db/ .dbf/ .dll/ .dos/ .htr/ .htw/ .ida/ .idc/ .idq/ .inc/ .ini/ .key/ .licx/ .lnk/ .log/ .mdb/ .old/ .pass/ .pdb/ .pol/ .printer/ .pwd/ .resources/ .resx/ .sql/ .sys/ .vb/ .vbs/ .vbproj/ .vsdisco/ .webinfo/ .xsd/ .xsx/" at TX:extension. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-920-PROTOCOL-ENFORCEMENT.conf"] [line "1057"] [id "920440"] [rev "2"] [msg "URL file extension is restricted by policy"] [data ".conf"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-protocol"] [tag "OWASP_CRS/POLICY/EXT_RESTRICTED"] [tag "WASCTC/WASC-15"] [tag "OWASP_TOP_10/A7"] [tag "PCI/6.5.10"] [hostname "localhost"] [uri "/secret.conf"] [unique_id "WwCLT6l2Sj4hfSfMEQaq@QAAAEw"]

[2018-05-19 20:38:39.544142] [-:error] 172.17.0.3:51210 WwCLT6l2Sj4hfSfMEQaq@QAAAEw [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/secret.conf"] [unique_id "WwCLT6l2Sj4hfSfMEQaq@QAAAEw"]

[2018-05-19 20:38:39.544256] [-:error] 172.17.0.3:51210 WwCLT6l2Sj4hfSfMEQaq@QAAAEw [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=0,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): URL file extension is restricted by policy"] [tag "event-correlation"] [hostname "localhost"] [uri "/secret.conf"] [unique_id "WwCLT6l2Sj4hfSfMEQaq@QAAAEw"]


### Test Nr. 9. Log in as another user by bypassing authentication

```
.typeText('input#pass', '[$ne]=1')
```

[2018-05-19 20:38:47.023433] [-:error] 172.17.0.3:51230 WwCLV4oo6U-UOmmOsOczmgAAAA0 [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:(?:\\\\[\\\\$(?:ne|eq|lte?|gte?|n?in|mod|all|size|exists|type|slice|x?or|div|like|between|and)\\\\]))" at ARGS:pass. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "389"] [id "942290"] [rev "2"] [msg "Finds basic MongoDB SQL injection attempts"] [data "Matched Data: [$ne] found within ARGS:pass: [$ne]=1"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [hostname "localhost"] [uri "/login"] [unique_id "WwCLV4oo6U-UOmmOsOczmgAAAA0"]

[2018-05-19 20:38:47.023658] [-:error] 172.17.0.3:51230 WwCLV4oo6U-UOmmOsOczmgAAAA0 [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/login"] [unique_id "WwCLV4oo6U-UOmmOsOczmgAAAA0"]

[2018-05-19 20:38:47.023775] [-:error] 172.17.0.3:51230 WwCLV4oo6U-UOmmOsOczmgAAAA0 [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=5,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): Finds basic MongoDB SQL injection attempts"] [tag "event-correlation"] [hostname "localhost"] [uri "/login"] [unique_id "WwCLV4oo6U-UOmmOsOczmgAAAA0"]

### Test Nr. 10. Upload something that is not a photo

```
.setFilesToUpload('#filename', 'md5sum.exe')
```

Not found yet! Planned for 3.1

### Test Nr. 11. Inject on the admin page to find all users

```
.navigateTo('http://172.17.0.2:8001/ADMIN/likes?search[$ne]=1')
```

[2018-05-19 20:39:01.056537] [-:error] 172.17.0.3:51228 WwCLZaqkaeCrr9rBEDL6tQAAAJI [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:(?:\\\\[\\\\$(?:ne|eq|lte?|gte?|n?in|mod|all|size|exists|type|slice|x?or|div|like|between|and)\\\\]))" at ARGS_NAMES:search[$ne]. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "389"] [id "942290"] [rev "2"] [msg "Finds basic MongoDB SQL injection attempts"] [data "Matched Data: [$ne] found within ARGS_NAMES:search[$ne]: search[$ne]"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [hostname "localhost"] [uri "/ADMIN/search"] [unique_id "WwCLZaqkaeCrr9rBEDL6tQAAAJI"]

[2018-05-19 20:39:01.056720] [-:error] 172.17.0.3:51228 WwCLZaqkaeCrr9rBEDL6tQAAAJI [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/ADMIN/search"] [unique_id "WwCLZaqkaeCrr9rBEDL6tQAAAJI"]

[2018-05-19 20:39:01.056899] [-:error] 172.17.0.3:51228 WwCLZaqkaeCrr9rBEDL6tQAAAJI [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=5,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): Finds basic MongoDB SQL injection attempts"] [tag "event-correlation"] [hostname "localhost"] [uri "/ADMIN/search"] [unique_id "WwCLZaqkaeCrr9rBEDL6tQAAAJI"]

### Test Nr. 12. Inject on the admin page to find all likes

```
.navigateTo('http://172.17.0.2:8001/ADMIN/likes?search[$ne]=1')
```

[2018-05-19 20:39:04.473892] [-:error] 172.17.0.3:51210 WwCLaKl2Sj4hfSfMEQarAwAAAEY [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:(?:\\\\[\\\\$(?:ne|eq|lte?|gte?|n?in|mod|all|size|exists|type|slice|x?or|div|like|between|and)\\\\]))" at ARGS_NAMES:search[$ne]. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "389"] [id "942290"] [rev "2"] [msg "Finds basic MongoDB SQL injection attempts"] [data "Matched Data: [$ne] found within ARGS_NAMES:search[$ne]: search[$ne]"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [hostname "localhost"] [uri "/ADMIN/likes"] [unique_id "WwCLaKl2Sj4hfSfMEQarAwAAAEY"]

[2018-05-19 20:39:04.474040] [-:error] 172.17.0.3:51210 WwCLaKl2Sj4hfSfMEQarAwAAAEY [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/ADMIN/likes"] [unique_id "WwCLaKl2Sj4hfSfMEQarAwAAAEY"]

[2018-05-19 20:39:04.474197] [-:error] 172.17.0.3:51210 WwCLaKl2Sj4hfSfMEQarAwAAAEY [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=5,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): Finds basic MongoDB SQL injection attempts"] [tag "event-correlation"] [hostname "localhost"] [uri "/ADMIN/likes"] [unique_id "WwCLaKl2Sj4hfSfMEQarAwAAAEY"]

### Test Nr. 13. Inject on the admin page to find all loves

```
.navigateTo('http://172.17.0.2:8001/ADMIN/loves?search[$ne]=1')
```

[2018-05-19 20:39:07.880170] [-:error] 172.17.0.3:51352 WwCLa4oo6U-UOmmOsOczrQAAAAQ [client 172.17.0.3] ModSecurity: Warning. Pattern match "(?i:(?:\\\\[\\\\$(?:ne|eq|lte?|gte?|n?in|mod|all|size|exists|type|slice|x?or|div|like|between|and)\\\\]))" at ARGS_NAMES:search[$ne]. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf"] [line "389"] [id "942290"] [rev "2"] [msg "Finds basic MongoDB SQL injection attempts"] [data "Matched Data: [$ne] found within ARGS_NAMES:search[$ne]: search[$ne]"] [severity "CRITICAL"] [ver "OWASP_CRS/3.0.0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-sqli"] [tag "OWASP_CRS/WEB_ATTACK/SQL_INJECTION"] [tag "WASCTC/WASC-19"] [tag "OWASP_TOP_10/A1"] [tag "OWASP_AppSensor/CIE1"] [tag "PCI/6.5.2"] [hostname "localhost"] [uri "/ADMIN/loves"] [unique_id "WwCLa4oo6U-UOmmOsOczrQAAAAQ"]

[2018-05-19 20:39:07.880323] [-:error] 172.17.0.3:51352 WwCLa4oo6U-UOmmOsOczrQAAAAQ [client 172.17.0.3] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 1 at TX:anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "57"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "localhost"] [uri "/ADMIN/loves"] [unique_id "WwCLa4oo6U-UOmmOsOczrQAAAAQ"]

[2018-05-19 20:39:07.880476] [-:error] 172.17.0.3:51352 WwCLa4oo6U-UOmmOsOczrQAAAAQ [client 172.17.0.3] ModSecurity: Warning. Operator GE matched 1 at TX:inbound_anomaly_score. [file "/etc/httpd/modsecurity.d/owasp-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "74"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=5,XSS=0,RFI=0,LFI=0,RCE=0,PHPI=0,HTTP=0,SESS=0): Finds basic MongoDB SQL injection attempts"] [tag "event-correlation"] [hostname "localhost"] [uri "/ADMIN/loves"] [unique_id "WwCLa4oo6U-UOmmOsOczrQAAAAQ"]

## Summary of CRS rules per request
