import { FieldValues, SubmitHandler } from "react-hook-form";
import UniForm from "../../../components/form/UniForm";
import UniInput from "../../../components/form/UniInput";
import { Button } from "antd";


const CreateStudent = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);

    }

    return (
        <UniForm onSubmit={onSubmit}>
            <UniInput type="text" name="name" label="name" />
            <Button htmlType="submit">Submit</Button>
        </UniForm>
    );
};

export default CreateStudent;