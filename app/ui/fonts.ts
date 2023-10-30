import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] }); // 글꼴의 서브셋을 지정합니다.
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
