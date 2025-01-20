import { useRef, useEffect } from "react";
import { Title } from "../components";

export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef.current?.focus(), []);
  {
    /*포커스*/
  }

  return (
    <section className="mt-4">
      <Title>InputFocusTest</Title>
      <div className="flex justify-center mt-4 ">
        <input
          ref={inputRef}
          className="input input-primary"
          placeholder="enter some text"
        />
        <input
          ref={inputRef}
          className="input input-primary"
          placeholder="enter some text"
        />{" "}
        {/* 두개의 포커스라면 마지막에 포커스가 적용된다.,  */}
      </div>
    </section>
  );
}
