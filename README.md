# NAVER CLOVA PROJECT

## (230805) 리액트 프로젝트 개발 환경 설정

- CRA(Create-React-App)으로 개발 환경 설정
  - `npx create-react-app naver_clova --template typescript`
- 그 외 환경 설정 추가(Nodejs)
  - `npm install -D react-router-dom @types/react-router-dom`
  - (CSS) `npm install -D styled-components @types/styled-components`
  - (Protocol Transfer) `npm install axios`
  - (Web Speech API) `npm i -D react-speech-recognition @types/react-speech-recognition`
- 그 외 환경 설정 추가(VSCode)
  - Format
    - Format On Paste : true,
    - Format On Save : true,
    - Format On Type : true,
  - tab size : 2
- 그 외 환경 설정 추가(VSCode Extensions)
  - ESLint
  - Prettier
  - Auto Rename Tag
  - ES7 React/Redux/GraphQL/React-Native snippets

## (230806) Web Speech API 기본 세팅

- '음성 인식 API 또는 관련 서비스'에 대해 아래 3가지 방법이 있음을 확인
- 음성 인식 API 또는 서비스
  - Web Speech API : 현대적인 브라우저에서 지원되는 내장 브라우저 API
  - Google Cloud Speech-to-Text : Google Cloud에서 제공하는 강력한 클라우드 기반 음성 인식 서비스
  - IBM Watson Speech to Text : IBM의 클라우드 서비스로, 애플리케이션에 통합
  - Microsoft Azure Speech Service : Microsoft의 클라우드 기반 음성 인식 서비스
- 음성 인식 구현
  - 선택한 API나 서비스에 따라 소스코드에 해당 기능을 통합해야 한다.
    - Web Speech API : `SpeechRecognition` 인터페이스를 통해 음성 입력을 캡처하고 처리 가능
    - 클라우드 서비스 : SDK, API 라이브러리를 통해 API 요청. 사용자의 음성을 서비스로 전송(request)하고 인식된 텍스트를 응답(response)으로 받게 됨.
- 마이크 접근 권한 요청
  - 대부분의 브라우저는 권한 팝업을 표시하므로, 팝업으로 권한을 요청
- 인식된 텍스트 처리
  - 인식된 텍스트(변환)을 받은 후, **필요한 대로 처리** 가능.
  - (필요한 대로 처리) **화면에 표시**하거나, **서버로** 보내거나, 응용 프로그램의 요구에 따라 **다른 작업을 수행** 가능
- 오류 처리
  - 배경 소음, 방언 등으로 인해 음성 인식이 항상 정확하진 않을 수 있음.
  - 이를 대비해 App이 적절하게 처리하도록 수행
- 사용자 경험
  - 음성 인식이 처리되는 동안 사용자에게 시각적인 피드백을 제공하는 것을 고려하는 것을 추천
  - '듣는 중'이라는 텍스트 표시 등을 고려할 수 있음
