import {useState} from "react";
import {HiOutlinePlus} from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="font-black text-secondary-700 text-xl">پروژه ها</h1>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                title="اضافه کردن پروژه جدید"
            >
                <CreateProjectForm onClose={() => setIsOpen(false)}/>
            </Modal>
            <button
                onClick={() => setIsOpen(true)}
                className="btn btn--primary flex items-center gap-x-2"
            >
                <HiOutlinePlus className="text-white w-5 h-5"/>
                <span>اضافه کردن پروژه</span>
            </button>
        </div>
    );
}

export default ProjectsHeader;
