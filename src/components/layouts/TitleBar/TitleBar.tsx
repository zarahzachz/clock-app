import styles from "./TitleBar.module.css";

function TitleBar() {
  return (
    <div
      class={styles.titleBar}
      data-tauri-drag-region
    >
      Navigation Here
    </div>
  );
}

export default TitleBar;
