import { useRef, useState } from "react";
import database from "../../firebase";
import Editor from "../../components/Editor/Editor";
import AddForm from "../../components/AddForm/AddForm";
import Sidebar from "../../components/Sidebar/Sidebars";
import styles from "./Add.module.scss";
import { Fragment } from "react";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { toast } from "react-toastify";

const Add = () => {
  const editorRef = useRef();
  const formRef = useRef();
  const [alreadyExist, setAlreadyExists] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const saveForm = async () => {
    const { id, title, url, materia, grade } = formRef.current.state;
    const editor = editorRef.current.save();

    if (title.trim() === "" || url.trim() === "" || id.trim() === "") {
      return;
    }

    setIsLoading(true);

    database
      .ref("temas")
      .orderByChild("tema_id")
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          if (snap.val().tema_id === id) {
            setAlreadyExists(true);
            console.log("already exists");
          }
        });
      });

    const currentDate = new Date();
    const timestamp = currentDate.getTime(); // Milliseconds

    var temasRef = database.ref("temas");
    var newTemaRef = temasRef.push();
    newTemaRef.set(
      {
        id: newTemaRef.key,
        tema_id: id.trim(),
        subject: materia,
        grade: grade,
        title: title,
        body: editor,
        video_url: url,
        date_added: timestamp.toString(),
        user_id: "2ZX9urSBNmY5BWAtyrBVK1q92iz1",
      },
      (error) => {
        if (error) {
          toast.error(error);
        } else {
          formRef.current.reset();
        }
      }
    );

    setIsLoading(false);
  };

  return (
    <Fragment>
      {isLoading && <LoadingOverlay />}
      <div className={styles.dashboardWrapper}>
        <Sidebar isActive={2} />
        <div className={styles.addWrapper}>
          <div className={styles.add}>
            <AddForm ref={formRef} />
            <Editor ref={editorRef} />
            <div className={styles.actions}>
              <button onClick={() => {}} className={styles.submitButton}>
                Resetear
              </button>
              <button onClick={saveForm} className={styles.submitButton}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Add;
