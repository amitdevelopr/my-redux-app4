import Image from "next/image";
import styles from "./page.module.css";
import { A } from "@/A";
import { B } from "@/B";
import C  from "@/C";

export default function Home() {
  return (
    <div>
      <A />
      <B />
      <C />
    </div>
  );
}
