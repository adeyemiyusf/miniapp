import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string;
    description: string
}

const CreateForm = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("This field can not be empty"),
        description: yup.string().required("This field cannot be empty"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    });

    const postRef = collection(db, "posts");
    

    const onCreatePost =  async (data: CreateFormData) => {
         await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            userID: user?.uid
         });
         navigate("/");
    }

    return ( 
        <div className="create-post">
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder="title" {...register("title")} />
                <p style={{color: 'red'}}>{ errors.title?.message }</p>
                <textarea placeholder="description" {...register("description")}/>
                <p style={{color: 'red'}}>{ errors.description?.message }</p>
                <input type="submit" className="submitForm"/>
            </form>
        </div>
     );
}
 
export default CreateForm;