import * as yup from 'yup';

const validations = yup.object().shape({
    title: yup.string().min(3, "Title en az 3 karakter olmalı").required("zorunlu alan"),
    content:yup.string().min(3, "Content en az 3 karakter olmalı").required("zorunlu alan"),
})

export default validations;