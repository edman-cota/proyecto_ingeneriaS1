import styles from './MenuBar.module.scss';
import boldIcon from '../../assets/bold.svg';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className={styles.button}>
        <img src={boldIcon} alt="dfsdf" className={styles.icon} />
      </div>

      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        italic
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        strike
      </button>
      <button onClick={() => editor.chain().focus().toggleCode().run()}>
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button onClick={() => editor.chain().focus().setParagraph().run()}>
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      >
        h6
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        bullet list
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        ordered list
      </button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        code block
      </button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>undo</button>
      <button onClick={() => editor.chain().focus().redo().run()}>redo</button>
    </>
  );
};

export default MenuBar;
