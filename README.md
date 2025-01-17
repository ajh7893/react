이건 타입스크립트로 리액트 프로젝트를 공부하기 위해 만들었습니다.

2024년 11월 12일 기준으로 챕터 3-2까지 공부했습니다.
12월 3일 3-3 공부중.. 왜이렇게 바뻣을꼬..?

- tailwind css 사용법 익히기

  4.2 12월 16일 -훅

1. 컴포넌트가 기억력을 가지게 하고 싶어요? 👉 useState
2. 컴포넌트가 뭔가 일이 생겼을 때 실행되도록 하고 싶어요? 👉 useEffect
3. 컴포넌트가 다른 데이터를 쉽게 가져오게 하고 싶어요? 👉 useContext

🛠️ useEventListener Hook
useEventListener는 React에서 이벤트 리스너를 간단히 추가하고, 컴포넌트가 언마운트될 때 자동으로 정리해주는 커스텀 Hook입니다.
이 Hook은 이벤트 관리 코드를 깔끔하고 재사용 가능하게 만들어줍니다.

사용법
tsx

```
import { useEventListener } from "./useEventListener";

const Example = () => {
  const handleResize = () => {
    console.log("Window resized!");
  };

  // `window` 객체에 "resize" 이벤트를 추가
  useEventListener(window, "resize", handleResize);

  return <div>창 크기를 조정해 보세요!</div>;
};
```

매개변수
target: 이벤트를 등록할 대상 (window, document, DOM 요소 등).
type: 이벤트 타입 (예: "click", "resize", "keydown" 등).
callback: 이벤트 발생 시 실행할 함수.
주요 특징
이벤트 리스너 자동 추가 및 정리 (메모리 누수 방지).
여러 이벤트를 쉽게 처리할 수 있는 재사용 가능한 구조.
React의 useEffect와 함께 동작.
코드
tsx

```
import { useEffect } from "react";

export const useEventListener = (
  target: EventTarget | null,
  type: string,
  callback: EventListenerOrEventListenerObject | null
) => {
  useEffect(() => {
    if (target && callback) {
      target.addEventListener(type, callback);
      return () => target.removeEventListener(type, callback);
    }
  }, [target, type, callback]);
};
```
