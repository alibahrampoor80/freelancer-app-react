import React, {useState} from 'react';
import TextField from "../../ui/TextField.jsx";
import {useForm} from "react-hook-form";
import RhfSelect from "../../ui/RHFSelect.jsx";
import {TagsInput} from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField.jsx";
import useCategories from "../../hooks/useCategories.js";
import useCreateProject from "./useCreateProject.js";
import Loading from "../../ui/Loading.jsx";
import useEditProject from "./useEditProject.js";

const CreateProjectForm = ({onClose, projectToEdit = {}}) => {
    const {_id: editId} = projectToEdit
    const isEditSession = Boolean(editId)
    const {title, description, budget, deadline, category, tags: tagsProjectToEdit} = projectToEdit

    let editValues = {}
    if (isEditSession) {
        editValues = {
            title,
            description,
            budget,
            category: category._id,
            tags: tagsProjectToEdit
        }
    }
    const {
        register, formState: {errors},
        handleSubmit,
        reset
    } = useForm({defaultValues: editValues})
    const [tags, setTags] = useState(tagsProjectToEdit || [])
    const [date, setDate] = useState(new Date(projectToEdit?.deadline || null))
    const {categories} = useCategories()
    const {isLoadingCreateProject, createProject} = useCreateProject()
    const {editProject, isLoadingEditProject} = useEditProject()
    const onSubmit = (data) => {
        const newProject = {
            ...data,
            deadline: new Date(date).toISOString(),
            tags
        }

        if (isEditSession) {
            editProject({id: editId, newProject}, {
                onSuccess: () => {
                    onClose()
                    reset()
                }
            })
        } else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose()
                    reset()
                }
            })
        }


    }

    return (
        <div>
            <form className={`space-y-8`} onSubmit={handleSubmit(onSubmit)}>
                <TextField label={`عنوان پروژه`}
                           name={`title`}
                           register={register}
                           validationSchema={{
                               required: "عنوان ضروری است",
                               minLength: {
                                   value: 10,
                                   message: "طول عنوان نامعتبر است"
                               }
                           }}
                           errors={errors}
                           required
                />
                <TextField label={`توضیحات`}
                           name={`description`}
                           register={register}
                           validationSchema={{
                               required: "توضیحات ضروری است",
                               minLength: {
                                   value: 18,
                                   message: "طول توضیحات نامعتبر است"
                               }
                           }}
                           errors={errors}
                           required
                />
                <TextField label={`قیمت`}
                           name={`budget`}
                           register={register}
                           validationSchema={{
                               required: "قیمت ضروری است",
                               // minLength: {
                               //     value: 18,
                               //     message: "طول قیمت نامعتبر است"
                               // }
                           }}
                           errors={errors}
                           required
                />

                <RhfSelect label={`دسته بندی`} name={`category`} register={register} options={categories}/>
                <div>
                    <label className={`mb-2 block text-secondary-700`}>تگ ها</label>
                    <TagsInput value={tags} onChange={setTags} name={`tags`}/>
                </div>
                <DatePickerField setDate={setDate} date={date} label={`انتخاب زمان پایان پروژه`}/>
                <div className="!mt-8">
                    {
                        isLoadingCreateProject ? <Loading/> :
                            <button type={"submit"} className={'btn btn--primary w-full'}>تایید</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default CreateProjectForm;