//배열 타입 값일 때 useState 훅 사용하기
import { Title, Div } from "../components";
import { useCallback, useState, useMemo } from "react";
import { Icon } from "../theme/daisyui";
import * as D from "../data";

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]);
  const addImage = useCallback(
    () => setImages((images) => [D.randomImage(200, 100, 50), ...images]),
    []
  );

  const clearImages = useCallback(() => setImages([]), []);
  const children = useMemo(
    () =>
      images.map((image, index) => (
        <Div key={index} src={image} className="w-1/5 m-2" height="5rem" />
      )),
    [images]
  );
  return (
    <section className="mt-4">
      <Title>ArrState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add image" className="tooltip">
          <Icon name="추가!" onClick={addImage} className="mr-12 btn-primary" />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="지우기" onClick={clearImages} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  );
}
