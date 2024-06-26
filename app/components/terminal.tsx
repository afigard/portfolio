import React, { ReactNode } from "react";
import styles from "../ui/terminal.module.css";

interface TerminalProps {
  title: string;
  heightInput: string;
  widthInput: string;
  children: ReactNode;
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({
  title,
  heightInput,
  widthInput,
  children,
  onClose,
}) => {
  return (
    <div
      className={styles.terminalContainer}
      style={{ height: heightInput, width: widthInput }}
    >
      <div className={styles.terminalHeader}>
        <div className={styles.buttons}>
          <span className={styles.close} onClick={onClose}></span>
          <span className={styles.minimize}></span>
          <span className={styles.maximize}></span>
        </div>
        <div className={styles.title}>
          {title}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </div>
      </div>
      <div className={styles.terminalBody}>
        <pre className={styles.terminalPre}>
          <code className={styles.terminalCode}>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
