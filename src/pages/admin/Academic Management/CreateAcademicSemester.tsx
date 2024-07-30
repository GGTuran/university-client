/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import UniForm from "../../../components/form/UniForm";
import { Button, Col, Flex } from "antd";
import UniSelect from "../../../components/form/UniSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UniForm onSubmit={onSubmit}>
          <UniSelect label="name" name="name" options={nameOptions} />
          <UniSelect label="Year" name="year" options={yearOptions} />
          <UniSelect label="Start Month" name="startMonth" options={nameOptions} />
          <UniSelect label="End Month" name="endMonth" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </UniForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
