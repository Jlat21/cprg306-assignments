import StudentInfo from "./StudentInfo/StudentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl m-5">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week 2</Link>
      <br />
      <Link href="/week3">Week 3</Link>
      <br />
      <Link href="/week4">Week 4</Link>
    </main>

  )
}