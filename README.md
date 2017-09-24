[![Coverage Status](https://coveralls.io/repos/github/cheese10yun/travis-ci-node/badge.svg?branch=master)](https://coveralls.io/github/cheese10yun/travis-ci-node?branch=master)
[![Build Status](https://travis-ci.org/cheese10yun/travis-ci-node.svg?branch=master)](https://travis-ci.org/cheese10yun/travis-ci-node)

# TDD

## NPM Module
* mocha
* supertest
* should
* SQLlite3

## 사용법
```
$ npm install
$ npm test
```
## 테스트 시나리오

* `Get /users`
    * 성공시
        * `유저 객체를 담은 배열로 응답한다`
        * `최대 limit 갯수만큼 응답한다.`
    * 실패시
        * `Limit이 숫자형이 아니면 400을 응답한다.`
* `Get /users/:id`
    * 성공시
        * `id가 1인 유저 객챌르 반환한다.`
    * 실패시
        * `id가  숫자가 아닐 경우 400으로 응답한다.`
        * `id로 유저를 찾을수 없는 걍우 404로 응답한다.`
* `DELETE /users/:id`
    * 성공시
        * `204를 응답한다`
    * 실패시
        * `id가 숫자가 아닐경우 400으로 응답한다.`
* `POST /users`
    * 성공시
        * `생성된 유저 객체를 반환한다.`
        * `입력한 name을 반환한다`
    * 실패시
        * `name 파라미테거 누락시 400을 반환한다.`
        * `name이 중복일 경우 4009를 반환한다.`
* `PUT /users:id`
    * 성공시
        * `변경된 name을 응답한다.`
    * 실패시
        * `정수가아닌 id일 경우 400을 응답한다`
        * `name이 없을경우 400을 응답한다`
        * `없는 유저일 경우 404을 응답한다.`
        * `이름이 중복일 경우 409를 응답한다.`    
