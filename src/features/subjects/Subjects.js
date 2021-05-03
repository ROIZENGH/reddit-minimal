import { useSelector } from "react-redux"
import { selectSubjects } from "./subjectsSlice"

export const Subjects = () =>{
    const subjects = useSelector(selectSubjects);
    return (
        <div>
            <h2>Subjects</h2>
            {Object.values(subjects).map((subject)=>(
                <div className="post-container">
                    <p>{subject.subjectImageUrl}</p>
                    <p>{subject.subjectName}</p>
                </div>
            ))}
        </div>
    )
}

