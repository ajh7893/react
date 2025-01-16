import type { FormEvent, ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Title } from "../components";

type FormType = {
  name: string;
  email: string;
};

export default function BasicForm() {
  const [form, setForm] = useState<FormType>({ name: "", email: "" });

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 중요!!

      alert(JSON.stringify(form, null, 2));
    },
    [form]
  );

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log("test");
    //const newForm = form // 얕은 복사
    //const newForm = Object.assign({}, form) // 깊은 복사
    //newForm.name = e.target.value
    // 깊은 복사와 name 속성값 변경이 동시에 일어남
    setForm((state) => ({ ...state, name: e.target.value })); //...점3개가 붙어있는데 이건, 잔여연산자 또는 전개 연산자라고 불린다.  //깊은 복사 .
  }, []);

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, email: e.target.value }));
  }, []);

  return (
    <section className="mt-4">
      <Title>ObjectState</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input
              value={form.name}
              onChange={onChangeName}
              id="name"
              type="text"
              placeholder="enter your name"
              className="input input-primary"
            ></input>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <input
              value={form.email}
              onChange={onChangeEmail}
              id="email"
              type="email"
              placeholder="enter your email"
              className="input input-primary"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="Submit"
              className="w-1/2 btn-sm btn=primary"
            />
            <input defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm" />
          </div>
        </form>
      </div>
    </section>
  );
}
