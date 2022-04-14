import styles from "./brand.module.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";
export const Brand = () => {
  return (
    <div className={`${styles["gpt3__brand"]} section__padding`}>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};
