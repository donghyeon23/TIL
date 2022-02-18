## package.json란?

-   package.json 파일은 배포한 모듈 정보를 담고자 만들어졌다.
-   pacakge.json 파일은 기본적으로 CommonJS의 명세를 충실히 따르고 있으며 JSON 형식의 파일이다.
-   직접 작성할 수도 있고 npm init 명령을 통해서 자동으로 생성할 수도 있다.

> 예시

```
{
	"name" : "test",
	"description" : "javascript's test programming.",
	"keywords" : ["util", "f", "server", "client", "browser"],
	"author" : "Goorm",
	"contributors" : [],
	"dependencies" : [],
	"repository" : {"type": "git", "url" : "git://gitbub.com/documentcloud/test.git" },
	"main" : "test.js",
	"version" : "1.1.6"
}
```

### 각 항목별 의미

1. name
    - 프로젝트 이름으로, 가장 중요하다. 중앙 저장소에 배포할 때 version과 함께 필수 항목이다.
    - url로 사용되고, 설치할 때 디렉토리 이름이 되기 때문에 url이나 디렉터리에서 쓸 수 없는 이름을 사용하면 안 된다.
    - 또한, 이름에 node나 js가 들어가면 안 된다.
    - name은 214자보다 짧아야 하며, 점(.)이나 밑줄(\_)로 시작할 수 없다.
    - 대문자를 포함해서는 안 되며, require() 함수의 인수로 사용되며 짧고 알기 쉬운 것으로 짓는 것이 좋다.
2. version
    - 프로젝트 버전을 정의힌다. 3단계 버전을 사용하며, - 로 태그 이름을 적을 수 있다.
3. description
    - 프로젝트 설명으로, 문자열로 기술한다.
    - npm search로 검색된 리스트에 표시되기 때문에 사람들이 패키지를 찾아내고 이해하는 데 도움이 된다.
4. keywords
    - 프로젝트를 검색할 때 참조되는 키워드이다.
    - description과 마찬가지로 npm search로 검색된 리스트에 표시된다.
5. homepage
    - 프로젝트 홈페이지 주소이다.
    - url 항목과는 다르며, url을 설정하면 예상치 못한 움직임을 하게 되므로 주의한다.
6. author
    - 프로젝트 작성자 정보로, 한 사람만을 지정한다. JSON 형식으로 name, email, url 옵션을 포함한다.
7. contributors
    - 프로젝트에 참여한 공헌자 정보로, 여러 사람을 배열로 지정할 수 있다.
8. repository
    - 프로젝트의 소스 코드를 저장한 저장소의 정보이다.
    - 소스 코드에 참여하고자 하는 사람들에게 도움이 될 수 있다. 프로젝트의 홈페이지 url을 명시해서는 안 된다.
9. scripts
    - 프로젝트에서 자주 실행해야 하는 명령어를 scripts로 작성해두면 npm 명령어로 실행 가능하다.

```
"scripts": {"start": "node server.js"}
```

1. config
    - 소스 코드에서 config 필드에 있는 값을 환경 변수처럼 사용할 수 있다

```
"name": "foo",
"config": {
    "port": "8080"
}
```

1. private
    - 이 값을 true로 작성하면 중앙 저장소로 저장하지 않는다.
2. dependencies

    - 프로젝트 의존성 관리를 위한 부분이다. 이 프로젝트가 어떤 확장 모듈을 요구하는지 정리할 수 있다.
    - 일반적으로 package.json에서 가장 많은 정보가 입력되는 곳이다.애플리케이션을 설치할 때 이 내용을 참조하여 필요한 확장 모듈을 자동으로 설치한다.따라서 개발한 애플리케이션이 특정한 확장 모듈을 사용한다면 여기에 꼭 명시를 해주어야 한다.
    - 또한, npm install 명령은 여기에 포함된 모든 확장 모듈들을 설치하게 되어 있다.

3. devDependencies

-   개발할 때만 의존하는 확장 모듈을 관리한다.

1. engine
    - 실행 가능한 노드 버전의 범위를 결정한다.

---

### 참고

[https://programmingsummaries.tistory.com/385](https://programmingsummaries.tistory.com/385)

[https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174371/package-json](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174371/package-json)

[https://velog.io/@leyuri/Node.js-package.json-파일이란](https://velog.io/@leyuri/Node.js-package.json-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%9E%80)
