import { useForm } from "react-hook-form";

const UniForm = ({ onSubmit, children }) => {

    const { handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

export default UniForm;