import Link from "next/link";
import StudentInfo from "../StudentInfo/StudentInfo";

export default function week2() {
  return (
    <div>
      <h1 className="text-4xl m-5">My Shopping List</h1>
      <StudentInfo />
      <Link href="/">Home</Link>
      
    </div>

  )
  
  
}