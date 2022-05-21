import Style from "../../styles/resume.module.scss";
import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Anish Shrestha / Resume</title>
        <meta name="description" content="Anish Shrestha Resume" />
      </Head>
      <div className={`${Style.resumeContainer}`}>
        <embed className={`${Style.resume}`} src="resume.pdf"></embed>
      </div>
    </>
  );
}
