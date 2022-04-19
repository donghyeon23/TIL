# REST API? RESTful API?

---

### REST API 란

- REST API 에서 REST는 Representational State Transfer 의 약자로 소프트웨어 프로그램 아키텍처의 한 형식
- 즉, 자원을 이름 (자원의 표현) 으로 구분하여 해당 자원의 상태 (정보)를 주고 받는 모든 것
- 월드 와이드 웹 (WWW) 과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식
- REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일

쉽게 말해서,

**리소스(HTTP URI로 정의됨)를 어떻게 하겠다(HTTP Method + Payload)를 구조적으로 깔끔하게 표현하는 방법입니다.**

---

### REST API의 설계 가이드

- 리소스에 대한 행위는 **HTTP Method(POST, GET, PUT, DELETE)로 표현**해야 합니다.
- **/(슬래시)는 계층 관계를 나타낼때 사용**합니다.
- **URI 마지막 문자에 /(슬래시)를 사용하지 않습니다.**
- **URI에 _(underscore)는 사용하지 않도록 합니다.** 또한 영어 대문자보다는 **소문자를 씁니다**.그리고 가독성을 위해서 긴 단어는 잘 사용하지 않습니다.
- **URI에** 동사는 GET, POST와 같은 HTTP Method를 표현하기 때문이다.동사가 아니라 **명사를 사용**한다.
- **URI에 파일의 확장자(예를들어 .json , .JPGE)를 포함 시키지 않습니다.**

---

### RESTful API 란?

**RESTful API는 REST API 설계 가이드를 따라 API를 만드는것 입니다.**

REST API 설계 가이드에 따라 API를 만들어서 웹 서비스를 제공하면 해당 웹 서비스는 **RESTful하다**고 합니다.

### RESTful 할때 장점

'RESTful'하다는것은 REST API 설계 가이드를 준수한다는 것인데, 'RESTful'하면 뭐가 좋을까요?

- **self-descriptiveness**: RESTful API는 그 자체만으로도 API의 목적이 무엇인지 쉽게 알 수 있습니다.

따라서

> API를 RESTful 하게 만들어서 API의 목적이 무엇인지 명확하게 하기 위해 RESTful 함을 지향 합니다.
> 

---

### 참고

[https://velog.io/@taeha7b/api-restapi-restfulapi](https://velog.io/@taeha7b/api-restapi-restfulapi)

[https://www.redhat.com/ko/topics/api/what-is-a-rest-api](https://www.redhat.com/ko/topics/api/what-is-a-rest-api)

[https://www.joinc.co.kr/w/man/12/rest/about](https://www.joinc.co.kr/w/man/12/rest/about)