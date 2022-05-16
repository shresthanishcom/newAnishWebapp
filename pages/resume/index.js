import Style from "../../styles/resume.module.scss";

export default function Resume() {
  return (
    <div className={`${Style.resumeContainer}`}>
      <embed className={`${Style.resume}`} src="resume.pdf"></embed>
    </div>
  );
}
