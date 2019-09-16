import * as Yup from 'yup';

const skillCreate = Yup.object().shape({
  skill_name: Yup.string().required("Skillname is required"),
});

export const skillValidator = {
  skillCreate
};