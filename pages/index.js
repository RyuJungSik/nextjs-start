import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      create-next-app create-next-app으로 설치하면
      <br />
        1. 컴파일과 번들링이 자동으로 된다.(webpack babel)
      <br />
        2. 자동 리프레쉬 기능으로 수정하면 화면에 ㅂ로 반영됩니다.
      <br />
        3.서버사이드 렌더링이 지원됩니다.
      <br />
        4.스태틱 파일을 지원합니다.
      <br />
    </div>
  );
}
