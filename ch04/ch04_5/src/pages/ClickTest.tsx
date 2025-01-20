import { useRef, useCallback } from "react";
import { Title } from "../components";

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  {
    /* 초기에는 null 값이엿다가  */
  }
  const onClick = useCallback(() => inputRef.current?.click(), []);
  {
    /* 마운트 되는 시점에서 물리DOM객체의 값이 된다.  즉, 물리DOM 객체의 참조이다.   */
  }

  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="mt-4 flex justify-center items-center">
        <button className="btn btn-primary mr-4" onClick={onClick}>
          Click Me
        </button>
        {/* ref 속성은값은 사용자 코드에서 설정하는게 아니라 , 어떤시점에 리액트 프레임워크 내부에서 설정 .  */}
        <input ref={inputRef} className="hidden" type="file" accept="image/*" />{" "}
        {/* hidden클래스는css display: none같음 */}
      </div>
    </section>
  );
}
