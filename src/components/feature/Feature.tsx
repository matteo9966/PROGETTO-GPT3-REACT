import * as styles from "./feature.module.css";
import './feature.module.css'
export const Feature: React.FC<{ title: string; text: string }> = (props) => {
  return (
    <div className={"gpt3__features-container__feature"}>
      <div className={"gpt3__features-container__feature-title"}>
        <div />
        <h1>{props.title}</h1>
      </div>

      <div className={"gpt3__features-container_feature-text"}>
        <p>

        {props.text}
        </p>
      </div>
    </div>
  );
};
