import Link from "next/link";
const StudentInfo = () => {
    return (
        <div classname="studentinfo">
            <h1>Name: Jared Laturnus</h1>
            <h1>Course: CPRG 306 A</h1>
            <Link href="https://github.com/JLat21" target="_blank">GitHub</Link>
        </div>
    );
}

export default StudentInfo;