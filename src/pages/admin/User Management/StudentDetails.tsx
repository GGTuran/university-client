import { useParams } from "react-router-dom";

const StudentDetails = () => {
    const { studentId } = useParams()
    return (
        <div>
            <h1>Details of {studentId}</h1>
        </div>
    );
};

export default StudentDetails;