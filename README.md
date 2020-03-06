# DevSlop pixi-crs - Integration of OWASP ModSecurity CRS into a CI Pipeline     

This repository is one of DevSlop's modules as described in [devslop.github.io](https://devslop.github.io).  

This repository integrates the WAF ModSecurity with the OWASP ModSecurity Core Rule Set (CRS) and its testing into different CI Pipelines.  
Currently the following Pipelines are implemented:

* CircleCI
* AWS
* Google Cloud Provider
* Azure (not yet finished)

The CI Pipelines test (with TestCafe) DevSlop's vulnerable web application Pixi without and with the CRS.

By adding and testing the WAF in the Continuous Integration (CI) pipeline, we provide the application developer early feedback. The application developer gets feedback about how their application will react when behind a WAF. We assure that Pixi’s legitimate traffic is not blocked by the WAF, and that illegitimate traffic is.

## Building Blocks of the Pipelines and how they are implemented

|               | CircleCI      | AWS           | GCP           | Azure         |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Code File     | .circleci/config.yml | buildspec.yml | cloudbuild.yaml | azure-pipelines.yml |
| Start Pixi    |               |               |               |               |
| Start CRS     |               |               |               |               |
| ModSec Tuning |               |               |               |               |
| Start Testcafe|               |               |               |               |
| Log Analysis  |               |               |               |               |

## Further Reading

### Description of the CI Pipeline
* [DevSlop Blog Post on dev.to describing the CircleCI pixi-crs Pipeline](https://dev.to/devslop/devslop-s-pixi-crs-pipeline-4bie) 
* [DevSlop Blog Post on dev.to describing how the CRS protects Pixi](https://dev.to/devslop/how-the-owasp-modsecurity-core-rule-set-protects-the-vulnerable-web-application-pixi-by-owasp-devslop-n4d)

### Blog Post about Pixi's vulnerabilities and the CRS
* [CRS protects Pixi on coreruleset.org](https://coreruleset.org/20190909/how-the-crs-protects-the-vulnerable-web-application-pixi-by-owasp-devslop/)
* [CRS as Part of DevOps on coreruleset.org](https://coreruleset.org/20180619/the-core-rule-set-as-part-of-devops-ci-pipeline/)

Also see Testcafe tests of known vulnerabilities in Pixi [in this branch](https://github.com/DevSlop/pixi-crs/tree/test-pixi-vulnerabilities).

### Description of first CRS RP Docker Container
* [Description of the first CRS RP (now the changes are integrated into the official OWASP CRS Container)](https://coreruleset.org/20181212/core-rule-set-docker-image/)



