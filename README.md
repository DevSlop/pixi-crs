# pixi-crs - Integration of OWASP CRS into a CI Pipeline     
This repository integrates the WAF OWASP CRS into a CI Pipeline (Circle CI).  
And it tests (TestCafe) DevSlop's vulnerable web application Pixi without and with the CRS.

## Further Reading

### Description of the CI Pipeline
Core Rule Set as Part of DevOps:     
https://coreruleset.org/20180619/the-core-rule-set-as-part-of-devops-ci-pipeline/

### Description of the CRS Docker Container (franbuehler/modsecurity-crs-rp)
Core Rule Set Docker Container:  
https://coreruleset.org/20181212/core-rule-set-docker-image/

### My franbuehler/modsecurity-crs-rp container has been integrated into the official OWASP Image: owasp/modsecurity-crs
https://github.com/SpiderLabs/owasp-modsecurity-crs/blob/v3.3/dev/util/docker/README.md

Also see tests of known vulnerabilities in Pixi [in this branch](https://github.com/DevSlop/pixi-crs/tree/test-pixi-vulnerabilities).

### Blog Post about Pixi's vulnerabilities and the CRS
https://coreruleset.org/20190909/how-the-crs-protects-the-vulnerable-web-application-pixi-by-owasp-devslop/




