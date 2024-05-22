import quizdata from "@/data/mcq";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="home-heading">Test Your Knowledge</h1>
      <h2>Availble quiz</h2>
      <div>
        <h4>{quizdata.quiz_text}</h4>
    <Link href="quiz" className="btn">Start Quiz</Link>
      </div>
    </>
  )
}
