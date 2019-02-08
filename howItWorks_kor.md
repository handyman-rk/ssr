# ssr은 어떻게 동작할까요?

---

## 서버사이드에서...

### 일단 실행해보고 난 후

localhost:3000으로 들어가서 html파일을 보면 assets/style.css랑 assets/client.js는 사용하는게 보입니다. assets/bundle은 어디서 쓰이는 걸까요?

### 프로그램은 어느 시점에서 시작할까?

서버도 /index.js에 있고 라우팅 기능도 /index.js에서 합니다.

### index.js의 라우팅에서 서버와 클라이언트 모두 template을 호출한다.

서버랑 클라이언트랑 모두 src/template.js 로 html문서를 만들어서 res.send로 보내는데 서버의 경우 content 매개변수가 있고 클라이언트의 경우는 없습니다.

### server.js를 보면

renderTostring으로 아예 서버측에서 html문자열을 만들어 버리고 그것을 template로 넘기는데 중요한 것은 babel로 변환된 views/server.js 를 사용한다는 것입니다.

---

## 클라이언트 사이드에서...

그렇다면 client.js 와 bundle.js는 어디서 사용하느냐? template에서 content가 없을 경우 assets/bundle.js 스크립트를 삽입하도록 되어있습니다. 실제로 template에 매개변수 없이 호출해서 프로그램 실행해 봐도 결과는 같습니다. 그리고 content가 있으면 assets/client.js 스크립트를 삽입하도록 되어있습니다.

그런데 클라이언트 측에서 실행되는 스크립트는 assets/bundle.js와 assets/client.js뿐인데 리액트가 정상적으로 실행됩니다. 그 이유는 webpack이 해당 파일을 실행하는데 필요한 구성요소(의존성 dependencies)를 모두 각자 파일에 합쳐 줬기 때문입니다. 실제로 파일을 열어보면 알수 없는 문자들이 가득합니다.

---
## 서버사이드 렌더링이랑 클라이언트 사이드 렌더링을 두번씩 하네요?

서버측에서 renderToString으로 렌더링 하면 이벤트 리스너가 안붙나 봅니다. 그래서 클라이언트 측에서 hydrate로 한번더 렌더링 하는 대신에 이벤트 리스너를 부착해 주는 것이지요. 어느 글을 읽어보면 렌더링 하지 않고 이벤트 속성만 추가한다고 하는데 정확히 모르겠네용
