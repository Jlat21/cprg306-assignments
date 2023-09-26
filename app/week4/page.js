import Link from "next/link";
import StudentInfo from "../StudentInfo/StudentInfo";
import NewItem from "./new-item";
export default function week4() {
  return (
    <div>
      <h1 className="text-4xl m-5">My Shopping List</h1>
      <StudentInfo />
      <Link href="/">Home</Link>
      <NewItem />
    </div>

  )
  
  
}